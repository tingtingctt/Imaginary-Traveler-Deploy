import React from "react";
import {logout} from "../../utils/API";
import { Link, useLocation } from "react-router-dom";
// import "./style.css";

function Nav() {

  const handleLogout = () => {
    logout().then(data=> {
      //do stuff here like redirect
      window.location.replace('/')
    })
  }

    return (
      <>
      <a href={`#`} onClick={handleLogout} style={{position: "fixed", top: "0em", right: "1em", color:"white", backgroundColor: "#363332", zIndex: 3}}> Logout </a>
      <a href={`mybooks`} style={{position: "fixed", top: "0em", right: "5em", color:"white", backgroundColor: "#363332",  zIndex: 3}}> My BookShelf </a>
      <a href={`editbooks`} style={{position: "fixed", top: "0em", right: "12em", color:"white", backgroundColor: "#363332", zIndex: 3}}> Edit MyBooks </a>
      <a href={`searchbooks`} style={{position: "fixed", top: "0em", right: "19em", color:"white", backgroundColor: "#363332",  zIndex: 3}}> Search Books </a>
      <a href={`books`} style={{position: "fixed", top: "0em", right: "26em", color:"white", backgroundColor: "#363332", zIndex: 3}}> Curated </a>
      </>
    )

}

export default Nav;