import React from "react";
import "./brushyStyle.css";


function BrushyBackground(props) {
    return (
        <div className="BrushyBackground center-fit">{props.children}</div>
    )
}

export default BrushyBackground;