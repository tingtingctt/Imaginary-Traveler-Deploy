import React from "react";
import "./style.css";


function SearchBackground(props) {
    return (
        <div className="SearchBackground center-fit">{props.children}</div>
    )
}

export default SearchBackground