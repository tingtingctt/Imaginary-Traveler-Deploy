import React from "react";
import alburquerque from "../assets/alburquerque.png";
import bigSleep from "../assets/bigSleep.png";
import dracula from "../assets/dracula.png";
import foucault from "../assets/foucault.png";
import greatGatsby from "../assets/greatGatsby.png";
import guns from "../assets/guns.png";
import hunchback from "../assets/hunchback.png";
import kingbird from "../assets/kingBird.png";
import littleFires from "../assets/littleFires.png";
import play from "../assets/play.png";
import shaker from "../assets/shaker.png";
import sweetbitter from "../assets/sweetbitter.png";
import Background from "../components/Background";
import Wrapper from "../components/Wrapper"
import Row from "../components/Row"
import "../components/Background/style.css";
import Nav from "../components/Nav";

function BookShelf(props) {
    // mock API call
    const books = [
        {
            title: "Alburquerque"
        },
        {
            title: "BigSleep"
        }
    ]


    return (
        // <Wrapper>

                <div className="container-fluid">

                    <Nav/>
    
                    {/* <Row> */}
                    <div className="Background">
                        <div className="Alburquerque">
                            {/* JSX Template Literal Example */}
                            <a href={`books/Alburquerque`}> 
                                < img id="alburquerque" src={alburquerque} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "81vw", "top" : "7vh"}} alt="Alburquerque"/>
                            </a>
                        </div>
                        <div className="BigSleep">
                        <a href={`books/The Big Sleep`}> 
                            < img id="sleep" src={bigSleep} style={{"width" : "9vw", "height" : "22.5vh", "position": "absolute", "left" : "59vw", "top" : "9vh"}} alt="The Big Sleep"/>
                        </a>
                        </div>
                        <div className="Dracula">
                            <a href={`books/Dracula`}>
                                < img id="dracula" src={dracula} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "17vw", "top" : "8vh"}} alt="Dracula"/>
                            </a>
                        </div>  
                        <div className="Foucault">
                            <a href={`books/Foucault’s Pendulum`}> 
                                < img id="foucault" src={foucault} style={{"width" : "9vw", "height" : "26vh", "position": "absolute", "left" : "37vw", "top" : "5vh"}} alt="Foucault's Pendulum"/>
                            </a>
                       </div>                                                             
                    {/* </Row> */}
                    {/* <Row> */}
                        <div className="Gatsby">
                            <a href={`books/The Great Gatsby`}>
                                < img id="gatsby" src={greatGatsby} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "73vw", "top" : "39vh"}} alt="The Great Gatsby"/>
                            </a>
                        </div>
                        <div className="Guns">
                            <a href={`books/The Guns of August`}>
                                < img id="guns"src={guns} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "53vw", "top" : "38.5vh"}} alt="The Guns of August"/>
                            </a>
                        </div>
                        <div className="Hunchback">
                            {/* animation and settime out, JSX Template Literal not working */}
                            <a href={`books/The Hunchback of Notre Dame`}> 
                                <img id="hunch" src={hunchback} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "10vw", "top" : "39vh"}} alt="The Hunchback of Notre Dame"/>
                            </a>                                              
                        </div>  
                        <div className="Kingbird">
                            <a href={`books/Kingbird Highway`}>
                                < img id="kingbird" src={kingbird} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "32vw", "top" : "39vh"}} alt="Kingbird Highway"/>
                            </a>
                        </div>                                                             
                    {/* </Row> */}
                    {/* <Row> */}
                        <div className="Little">
                            <a href={`books/Little Fires Everywhere`}>
                                < img id="bridge" src={littleFires} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "81vw", "top" : "71vh"}} alt="Little Fires Everywhere"/>
                            </a>
                        </div>
                        <div className="Play">
                            <a href={`books/Play It As It Lays`}>
                                < img id="play" src={play} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "59vw", "top" : "71vh"}} alt="Play It As It Lays"/>
                            </a>
                        </div>
                        <div className="Shaker">
                            <a href={`books/Shaker, Why Don't You Sing?`}>
                                < img id="savannah" src={shaker} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "17vw", "top" : "71vh"}} alt="Shaker, Why Don't You Sing?"/>
                            </a>
                        </div>  
                        <div className="Sweet">
                            <a href={`books/Sweetbitter`}>
                                < img id="union2"src={sweetbitter} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "37vw", "top" : "70.5vh"}} alt="Sweetbitter"/>
                            </a>
                        </div>                                                             
                    {/* </Row> */}

                    </div>
                
                </div>                   

        // </Wrapper>
    );
};

export default BookShelf;