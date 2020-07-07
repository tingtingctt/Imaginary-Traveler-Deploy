import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from './pages/Book'
import MyBook from './pages/MyBook'
import MyBooks from './pages/MyBooks'
import Search from './pages/Search'
import Mybookshelf from './pages/Mybookshelf'
import Login from "./components/Login"
import Bookfloat from "./components/Bookfloat"
import Bookshelf from "./pages/BookShelf";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import {getCurrentUser} from "./utils/API";
import {userContext} from "./utils/appContext";

function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    getCurrentUser().then(({data})=> setUser(data))
  },[])
  return (
    <Router>
      <userContext.Provider value={{user}}>
      <div className="App">
       
        <Switch>
          <Route exact path="/">
            <Login/>
            <Bookfloat/>
          </Route>

          <Route exact path="/books">
            <Bookshelf />
          </Route>

          <Route exact path="/books/:title">
            <Book/>
          </Route>

          <Route exact path="/searchbooks">
            <Mybookshelf/>
          </Route>

          <Route exact path="/mybooks">
            <MyBooks/>
          </Route>

          {/* <Route exact path="/saved">   
            <Saved/>
          </Route> */}

          <Route exact path="/editbooks">
            <Search/>
          </Route>

          <Route exact path="/mybooks/:title">
            <MyBook/>
          </Route>

          {/* to be replaced */}
          <Route exact path="/mybook">
            <MyBook/>
          </Route>



          <Route component={NoMatch} />
        </Switch>
      </div>
      </userContext.Provider>
    </Router>
  );
}

export default App;
