import React from 'react';
import Halfpano from "../Halfpano";
import Panorama from '../Panorama';
import Subtitle from '../Subtitle';


class MyFlipbook extends React.Component {
  constructor(props) {
    super(props);

    this.gotoNextPage = this.gotoNextPage.bind(this);
    this.gotoPreviousPage = this.gotoPreviousPage.bind(this);
    
  }

  state = {
    clicked: false,
    index: 0,
  }

  // async componentDidMount() {    

  // }

  gotoNextPage() {

    if (this.state.index < this.props.descriptions.length-1){
      let j = this.state.index + 1;
      this.setState( { index: j } );

    }

    console.log("current index:" + this.state.index)
  }

  gotoPreviousPage() {

      if (this.state.index > 0){
        let j = this.state.index -1;
        this.setState( { index: j } );
      }

    }

  handleClick = () => {

    if(this.state.clicked  === false) {
      return this.setState({clicked: true});
    } 
    if(this.state.clicked === true)  {
      return this.setState({clicked: false});
    }
  };
  
  render() {

    console.log("78", this.props.descriptions?.length);
    return (
      <div>


      {this.state.clicked === false ? 
      (<>

          <a href="/mybooks" style={{position: "fixed", top: "0em", right: "1em", color:"white", backgroundColor: "#363332",  zIndex: 3}}> My BookShelf </a>
          <a href="/books" style={{position: "fixed", top: "0em", right: "10em", color:"white", backgroundColor: "#363332", zIndex: 3}}> Curated </a>  

        <button onClick={this.handleClick} value={this.props.locations??[this.state.index]} style={{position: "fixed", transform: "skewY(-2.2deg)", left: "28%", top: "5%", zIndex: "20"}}>FullPano</button>

        <div style={{transform: "skewY(-2.2deg)", paddingRight:"12%", float: "left", display: 'flex',  justifyContent:'center', zIndex: "2", height: window.innerHeight*0.8, width: window.innerWidth*0.4}}>
            {this.props.locations? (<Halfpano address={this.props.locations[this.state.index]}/>): (<></>)  }
        </div>


        <div style={{transform: "skewY(2deg)", paddingLeft:"5%", float: "right", lineHeight:"200%", justifyContent:'center', display: "flex", alignItems:'center', height: window.innerHeight*0.8, width: window.innerWidth*0.3}}>
        {this.props.descriptions? (this.props.descriptions[this.state.index]): (<></>)  }
        </div>

        <br/>     

        <button style={{transform: "skewY(-2.3deg)", marginRight: "20%"}} onClick={this.gotoPreviousPage}>Go to previous page</button>
        <button style={{transform: "skewY(2deg)", marginLeft: "20%"}} onClick={this.gotoNextPage}>Go to next page</button>
        </>)
      : (
      
      <>
        <Panorama style={{zIndex:"3", position: "fixed", top: 0, left: 0}} address={this.props.locations??[this.state.index]}/>
        <button style={{zIndex:"100", position: "fixed", top: "1em"}} onClick={this.handleClick}>Go back</button>
        <Subtitle text={(this.props.descriptions??[this.state.index]).split(".")}/>


      </>)
     } 
    </div>
  )}

}

export default MyFlipbook;