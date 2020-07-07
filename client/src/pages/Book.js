// https://gist.github.com/darenju/355f2c276e5f64fd1c81b02952609be5

import React, {useState, useEffect} from 'react';

import Flipbook from "../components/Flipbook";

// import Nav from "../components/Nav";


import "../components/BookPainting/bookStyle.css";

import {useLocation} from "react-router-dom";



function Book() {
  let location = useLocation();
  let title = location.pathname.replace("/books/", "");

  const [windowSize, setWindowSize] = useState({
      h: window.innerHeight,
      w: window.innerWidth
  })

  // const [books, setBooks] = useState([])

  useEffect(() => {
    window.addEventListener("resize", ()=>(console.log("IM CHANGING!"), setWindowSize({h:window.innerHeight,w:window.innerWidth})));    
  }, [])



  return (
    <div className="BookPainting">
      {/* <Nav/> */}

      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

        <Flipbook title={title} width={windowSize.w*0.7} height={windowSize.h*0.7}/>
        
      </div>     
    </div>
  
  );
}

export default Book;