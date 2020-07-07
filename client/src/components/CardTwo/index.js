import React from "react";


function CardTwo({ icon, title, children }) {
  return (

      <div className="CardTwo mt-4" style={{"backgroundColor" : "transparent"}}>
        <div className="cardTwo-header">
          <h3>
            <strong>
              <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
            </strong>
          </h3>
        </div>
        <div className="cardTwo-body">{children}</div>
      </div>


  );
}
export default CardTwo;