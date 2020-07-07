import React from "react";
import "./style.css";


function Wrapper(props) {
    return (
        <div className="Wrapper">{props.children}</div>
    )
}

export default Wrapper