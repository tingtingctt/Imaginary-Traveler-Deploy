import React from "react";
import "./style.css";


function Row(props) {
    return (
        <div className="Row">{props.children}</div>
    )
}

export default Row