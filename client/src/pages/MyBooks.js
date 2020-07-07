import React, {useContext,useState} from "react";
import "../components/Background/style.css";
import {userContext} from "../utils/appContext";
import Nav from "../components/Nav";


function MyBooks() {
    const {user} = useContext(userContext);

    return (


                <div className="container-fluid">
    
                    <div className="Background">

                      
                        <Nav/>


                        {user?.books[0]?
                        (
                        <div className="Alburquerque">
                        <a href={`mybooks/${user?.books[0].volumeInfo.title}`}> 
                            < img src={user?.books[0].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "81vw", "top" : "7vh"}} alt="Alburquerque"/>
                        </a>
                        </div>
                            
                        ):<></>
                        }

                        
                        {user?.books[5]?
                        (
                        <div className="BigSleep">
                        <a href={`mybooks/${user?.books[5].volumeInfo.title}`}> 
                            < img src={user?.books[5].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "22.5vh", "position": "absolute", "left" : "59vw", "top" : "9vh"}} alt="The Big Sleep"/>
                        </a>
                        </div>
                        ):<></>
                        }


                        {user?.books[10]?
                            (<div className="Dracula">
                                <a href={`mybooks/${user?.books[10].volumeInfo.title}`}> 
                                     < img src={user?.books[10].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "17vw", "top" : "8vh"}} alt="Dracula"/>
                                </a>
                            </div> ) :<></>
                        }
                         
                        {user?.books[3]?
                        (<div className="Foucault">
                            <a href={`mybooks/${user?.books[3].volumeInfo.title}`}> 
                                < img src={user?.books[3].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "26vh", "position": "absolute", "left" : "37vw", "top" : "5vh"}} alt="Foucault's Pendulum"/>
                            </a>
                        </div>) : <></>  
                        }
                                                                                 

                        {user?.books[8]?
                        (
                        <div className="Gatsby">
                            <a href={`mybooks/${user?.books[8].volumeInfo.title}`}> 
                                < img src={user?.books[8].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "73vw", "top" : "39vh"}} alt="The Great Gatsby"/>
                            </a>
                        </div>
                        ):<></>
                        }


                        {user?.books[4]?
                        (
                        <div className="Guns">
                        <a href={`mybooks/${user?.books[4].volumeInfo.title}`}> 
                            < img src={user?.books[4].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "53vw", "top" : "38.5vh"}} alt="The Guns of August"/>
                        </a>
                        </div>
                        ):<></>
                        }


                        {user?.books[6]?
                        (
                        <div className="Hunchback">
                        {/* animation and settime out, JSX Template Literal not working */}
                        {/* <a href="javascript:setTimeout(()=>{window.location = 'The Hunchback of Notre Dame' },2000);">  */}
                        <a href={`mybooks/${user?.books[6].volumeInfo.title}`}> 
                            <img src={user?.books[6].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "10vw", "top" : "39vh"}} alt="The Hunchback of Notre Dame"/>
                        </a>                                              
                        </div> 
                        ):<></>
                        }


                        {user?.books[9]?
                        (
                        <div className="Kingbird">
                        <a href={`mybooks/${user?.books[9].volumeInfo.title}`}> 
                            <img src={user?.books[9].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "32vw", "top" : "39vh"}} alt="Kingbird Highway"/>
                        </a>
                        </div> 
                        ):<></>
                        }
                                                            

                        {user?.books[7]?
                        (<div className="Little">
                         <a href={`mybooks/${user?.books[7].volumeInfo.title}`}> 
                            <img src={user?.books[7].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "81vw", "top" : "71vh"}} alt="Little Fires Everywhere"/>
                        </a>
                        </div>
                            
                        ):<></>
                        }


                        {user?.books[2]?
                        ( <div className="Play">
                        <a href={`mybooks/${user?.books[2].volumeInfo.title}`}> 
                            < img src={user?.books[2].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "59vw", "top" : "71vh"}} alt="Play It As It Lays"/>
                        </a>
                        </div>
                            
                        ):<></>
                        }


                        {user?.books[11]?
                        (
                        <div className="Shaker">
                        <a href={`mybooks/${user?.books[11].volumeInfo.title}`}> 
                            < img src={user?.books[11].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "17vw", "top" : "71vh"}} alt="Shaker, Why Don't You Sing?"/>
                        </a>
                        </div> 
                        ):<></>
                        }
 

                        {user?.books[1]?
                        (
                        <div className="Sweet">
                        <a href={`mybooks/${user?.books[1].volumeInfo.title}`}> 
                            < img src={user?.books[1].volumeInfo.imageLinks.thumbnail} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "37vw", "top" : "70.5vh"}} alt="Sweetbitter"/>
                        </a>
                        </div>    
                        ):<></>
                        }
                                                         


                    </div>
                
                </div>                   


    );
};

export default MyBooks;