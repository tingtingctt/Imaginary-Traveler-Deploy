import React, {useState, useEffect, useContext} from 'react';

import MyFlipbook from "../components/MyFlipbook";

import Nav from "../components/Nav";

import {userContext} from "../utils/appContext"

import "../components/BookPainting/bookStyle.css";

import {useLocation} from "react-router-dom";


function MyBook() {
  const {user} = useContext(userContext);
  const [currentBook, setCurrentBook] = useState([]);
  
  const [currentDescriptions, setCurrentDescriptions] = useState([]);
  const [currentLocations, setCurrentLocations] = useState([]);

  useEffect(()=>{
    let title = location.pathname.replace("/mybooks/", "");
    console.log(user);
    setCurrentBook(user?.entries.filter(a=> a.title === title));

    setCurrentDescriptions(user?.entries.filter(a=> a.title === title).map(obj=>obj.description));
    setCurrentLocations(user?.entries.filter(a=> a.title === title).map(obj=>obj.location));

  }, [user]);

  console.log("23", currentBook);

  let location = useLocation();
  // need to modify this line
  

  const [windowSize, setWindowSize] = useState({
      h: window.innerHeight,
      w: window.innerWidth
  })

  // const [books, setBooks] = useState([])

  useEffect(() => {
    window.addEventListener("resize", ()=>(console.log("IM CHANGING!"), setWindowSize({h:window.innerHeight,w:window.innerWidth})));    
  }, [])

  // const updateIterator = () => {

  // }



  return (
    <div className="BookPainting">
      {/* <Nav/> */}
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <MyFlipbook descriptions={currentDescriptions}  locations={currentLocations} width={windowSize.w*0.7} height={windowSize.h*0.7}/>
      </div>     
    </div>
  
  );
}

export default MyBook;