// https://github.com/mattboldt/typed.js/
// https://jsfiddle.net/mattboldt/ovat9jmp/

import React from "react";
import Typed from 'typed.js'

class Subtitle extends React.Component {
    componentDidMount() {
      const { text } = this.props;
      const options = {
        strings: text,
        typeSpeed: 55,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 200,
        showCursor: false,
        loopCount: Infinity,
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className="wrap">
          <div className="type-wrap" style={{position: "fixed", top: "50px", left: "50px", zIndex: 2, color: "white", fontSize: "20px", backgroundColor: "black"}}>
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
          </div>
        </div>
      );
    }
  }

  export default Subtitle;