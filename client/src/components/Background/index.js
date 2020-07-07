import React from "react";
import "./style.css";


function Background(props) {
    return (
        <div className="Background center-fit">{props.children}</div>
    )
}

export default Background

