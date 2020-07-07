import React, { useState, useEffect, useContext} from "react";
import {userContext} from "../utils/appContext";
import Nav from "../components/Nav";


import * as API from "../utils/API";

import Halfpano from "../components/Halfpano";
import "../components/BookPainting/bookStyle.css";



function Search() {
  const [text, setText] = useState("Book Text");
  const [address, setAddress] = useState("Paris Notre-Dame -- Place Jean-Paul-II, Paris, France");
  const [book, setBook] = useState("Frankenstein");
  const [books, setBooks] = useState([]);
  const {user} = useContext(userContext);

  const [windowSize, setWindowSize] = useState({
    h: window.innerHeight,
    w: window.innerWidth
})


  useEffect(() => {
    //Get list of books available to add to
    API.getBooks().then(res => {
      //Remove duplicates (caused by multiple entries for one book)
      const titles = res.data.map(book => book.title);
      const uniques = new Set(titles)
      setBooks([...uniques])
    })
  }, [])

  useEffect(() => {
    window.addEventListener("resize", ()=>(console.log("IM CHANGING!"), setWindowSize({h:window.innerHeight,w:window.innerWidth})));    
  }, [])

  const handleTextChange = event => {
    setText(event.target.value);
  };


  const handleAddressChange = event => {
    event.preventDefault();
    setAddress(event.target.value);
    console.log(event.target.value);
  };

  const handleBookChange = event => {
    console.log(event.target.value);
    setBook(event.target.value);
  }

  const handleSave = () => {
    console.log(user);
    // console.log("Book", book);
    // console.log("Entry", text);
    // console.log("Address", address);
    // console.log("Books", books);
    //Not working, need UPDATE-user route for adding entries
    API.saveEntry({title: book, location: address, description: text}, user._id).then(res => console.log(res));
  }



  return (


 <div>

    <div className="BookPainting">

    <div style={{}}>

    <Nav/>


      <div style={{transform: "skewY(2deg)", margin: "5% 16% 0% 0%", paddingLeft:"5%", float: "right", lineHeight:"200%", justifyContent:'center', display: "flex", alignItems:'center', height: window.innerHeight*0.8, width: window.innerWidth*0.3}}>
        {text}
      </div>
          
      <div style={{transform: "skewY(-2.2deg)", margin: "5% 0% 5% 14%", paddingRight:"5%", float: "left", display: 'flex',  justifyContent:'center', zIndex: "2", height: windowSize.h*0.8, width: windowSize.w*0.38}}>
        <Halfpano address={address}/>  
      </div>   
    </div>

    </div>

    <form>
      <div className="form-group">
        <input
          // value={props.search}
          onChange={handleTextChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type paragraph here"
          id="term"
        />
      </div>


      <div className="form-group">
            <select onChange={handleBookChange} className="custom-select" id="pref-input" aria-label="Example select with button addon">
              <option disabled selected>Select Book</option>
              {user?.books.map(book => (
                <option value={book.volumeInfo.title} key={book.volumeInfo.title}>{book.volumeInfo.title}</option>
              ))}
            </select>
      </div>

      <div className="form-group">
        <input
          // value={address}
          onChange={handleAddressChange}

          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Search Address here"
          id="term"
        />
      </div>

      <button onClick={handleSave} type="button" className="btn btn-default">Save</button>

    </form>



    </div>

  );
}

export default Search;
