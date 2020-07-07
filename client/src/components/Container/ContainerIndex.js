import React from "react";
import "./style.css";


function Container(props) {
    return (
        <div className="Container center-fit">{props.children}</div>
    )
}

export default Container