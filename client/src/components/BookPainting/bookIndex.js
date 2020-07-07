import React from "react";
import "./bookStyle.css";


function BookPainting(props) {
    return (
        <div className="BookPainting center-fit">{props.children}</div>
    )
}

export default BookPainting