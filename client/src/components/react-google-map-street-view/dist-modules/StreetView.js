'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _googleMaps = require('google-maps');

var _googleMaps2 = _interopRequireDefault(_googleMaps);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StreetView = function (_Component) {
  _inherits(StreetView, _Component);

  function StreetView(props) {
    _classCallCheck(this, StreetView);

    var _this = _possibleConstructorReturn(this, (StreetView.__proto__ || Object.getPrototypeOf(StreetView)).call(this, props));

    _this.state = {
      error: false
    };
    return _this;
  }

  _createClass(StreetView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _googleMaps2.default.KEY = this.props.APIkey;
      _googleMaps2.default.LIBRARIES = ['geometry', 'places'];
      var vm = this;
      this.promise = new Promise(function (resolve, reject) {
        _googleMaps2.default.load(function (google) {
          if (google) {
            vm.google = google;
            resolve(google);
          } else {
            reject('Unable to fetch google maps loader');
          }
        });
      });
      if (!this.props.address) {
        this.setState({ error: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.node = this.map;
      if (!this.state.error) {
        this.displayMap();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.address && (nextProps.address !== this.props.address || nextProps.streetView !== this.props.streetView)) {
        this.setState({ error: false });
        this.displayMap();
      }
    }
  }, {
    key: 'getLatLangFromAddress',
    value: function getLatLangFromAddress() {
      var _this2 = this;

      var geocoder = new this.google.maps.Geocoder();
      return new Promise(function (resolve, reject) {
        geocoder.geocode({
          address: _this2.props.address
        }, function (results, geoStatus) {
          if (geoStatus === _this2.google.maps.GeocoderStatus.OK) {
            resolve(results[0].geometry.location);
          } else {
            _this2.setState({ error: true });
            reject('Unable to fetch Latitude and Longitutde');
          }
        });
      });
    }
  }, {
    key: 'renderPanaroma',
    value: function renderPanaroma(latLang, panoId) {
      var _this3 = this;

      var streetView = new this.google.maps.StreetViewService();
      streetView.getPanoramaByLocation(panoId, this.props.streetViewZoom, function (data, status) {
        if (status === _this3.google.maps.StreetViewStatus.OK) {
          var panorama = new _this3.google.maps.StreetViewPanorama(_this3.node);
          panorama.setPano(data.location.pano);
          var heading = _this3.google.maps.geometry.spherical.computeHeading(data.location.latLng, latLang);
          panorama.setPov({
            heading: heading,
            pitch: 0,
            zoom: 1
          });
          panorama.setVisible(true);
        } else {
          _this3.renderMapView(latLang);
        }
      });
    }
  }, {
    key: 'renderMapView',
    value: function renderMapView(latLang) {
      var map = new this.google.maps.Map(this.node, { center: latLang, zoom: this.props.zoomLevel });
      var marker = new this.google.maps.Marker({
        position: latLang
      });
      marker.setMap(map);
    }
  }, {
    key: 'directionsService',
    value: function directionsService(address, latLang) {
      var _this4 = this;

      var directionsService = new this.google.maps.DirectionsService();
      var request = {
        origin: address,
        destination: address,
        travelMode: this.google.maps.DirectionsTravelMode.DRIVING
      };
      directionsService.route(request, function (response, directionStatus) {
        if (directionStatus === _this4.google.maps.DirectionsStatus.OK) {
          var panoId = response.routes[0].legs[0].start_location;
          _this4.renderPanaroma(latLang, panoId);
        }
      });
    }
  }, {
    key: 'displayMap',
    value: function displayMap() {
      var _this5 = this;

      var address = this.props.address + this.props.zip;
      if (address) {
        this.promise.then(function () {
          _this5.getLatLangFromAddress(address).then(function (latLang) {
            if (_this5.props.streetView) {
              _this5.directionsService(address, latLang);
            } else {
              _this5.renderMapView(latLang);
            }
          }).catch(function () {
            _this5.setState({ error: true });
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _props = this.props,
          address = _props.address,
          mapStyle = _props.mapStyle,
          textStyle = _props.textStyle,
          defaultText = _props.defaultText,
          errorText = _props.errorText;
      var error = this.state.error;


      var displayText = _react2.default.createElement(
        'div',
        { style: textStyle },
        ' ',
        defaultText,
        ' '
      );
      if (address && error) {
        displayText = _react2.default.createElement(
          'div',
          { style: textStyle },
          ' ',
          errorText,
          ' '
        );
      }
      return _react2.default.createElement(
        'div',
        { ref: function ref(div) {
            _this6.map = div;
          }, style: mapStyle },
        (!address || error) && displayText
      );
    }
  }]);

  return StreetView;
}(_react.Component);

StreetView.defaultProps = {
  streetView: 1,
  zoomLevel: 10,
  streetViewZoom: 50,
  zip: 0,
  mapStyle: _styles.defaultMapStyle,
  textStyle: _styles.defaultTextStyle,
  defaultText: 'Please Provide address',
  errorText: 'Couldn\'t load maps for the address'
};

StreetView.propTypes = process.env.NODE_ENV !== "production" ? {
  APIkey: _propTypes2.default.string.isRequired,
  mapStyle: _propTypes2.default.any,
  textStyle: _propTypes2.default.object,
  address: _propTypes2.default.string.isRequired,
  zip: _propTypes2.default.number,
  streetView: _propTypes2.default.bool,
  zoomLevel: _propTypes2.default.number,
  streetViewZoom: _propTypes2.default.number,
  defaultText: _propTypes2.default.string,
  errorText: _propTypes2.default.string
} : {};

exports.default = StreetView;