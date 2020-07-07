import React from 'react';



const FlipChild = props => {
  return (
    <>  
        <p style={{lineHeight:"200%", display: 'flex',  justifyContent:'center', alignItems:'center', height: props.height, width: props.width, float:'right'}}>
            {props.children}
        </p>
        {/* <button onClick={props.handleClick} value={props.address} style={{position: "absolute", zIndex: "20", left: "50%"}}>FullPano</button> */}
    </>
  )
}

export default FlipChild;