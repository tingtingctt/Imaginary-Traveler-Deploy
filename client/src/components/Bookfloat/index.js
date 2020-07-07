import React from 'react';
import alburquerque from "../../assets/alburquerque.png";
import bigSleep from "../../assets/bigSleep.png";
import dracula from "../../assets/dracula.png";
import foucault from "../../assets/foucault.png";
import greatGatsby from "../../assets/greatGatsby.png";
import guns from "../../assets/guns.png";
import hunchback from "../../assets/hunchback.png";
import kingbird from "../../assets/kingBird.png";
import littleFires from "../../assets/littleFires.png";
import play from "../../assets/play.png";
import shaker from "../../assets/shaker.png";
import sweetbitter from "../../assets/sweetbitter.png";
import "../../components/Background/style.css";


function Bookfloat() {
  const canvasRef = React.useRef(null);


  return (
    <canvas
      className="Background"
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{position: "fixed", top: 0, left: 0, zIndex: -1}}
      onClick={e => {        
         const canvas = canvasRef.current        
         const ctx = canvas.getContext('2d')        
         // implement draw on ctx here

         var innerWidth = window.innerWidth;
         var innerHeight = window.innerHeight;
         canvas.width = innerWidth;
         canvas.height = innerHeight;

         var maxScale = 0.25;
         
         var imgArray = [
            alburquerque,
            bigSleep,
            dracula,
            foucault,
            greatGatsby,
            guns,
            hunchback,
            kingbird,
            littleFires,
            play,
            shaker,
            sweetbitter
         ]
         
         
         window.addEventListener('mousemove', function(event){
             MouseEvent.x = event.x;
             MouseEvent.y = event.y
         });
         
         window.addEventListener('resize', function(){
             canvas.width = window.innerWidth;
             canvas.height = window.innerHeight;
             init();
         });
         
         
         function Fish (x, y, dx, dy, scale, index) {
             this.x = x;
             this.y = y;
             this.dx = dx;
             this.dy = dy;
             this.img = imgArray[index];
            //  this.img = imgArray[Math.floor(Math.random()*imgArray.length)];
             this.scale = scale;
         
             this.fish = new Object();
             this.fish["image"] =  new Image();
             this.fish.image.src = this.img;
         
             this.draw = function(){
         
                 ctx.drawImage (this.fish.image, this.x, this.y, this.fish.image.width*this.scale, this.fish.image.height*this.scale); 
             }
         
             this.update = function(){
         
                 if (this.x + this.fish.image.width*this.scale > innerWidth || this.x < 0){
                     this.dx = -this.dx;
                 }
                 if (this.y + this.fish.image.height*this.scale > innerHeight || this.y  < 0){
                     this.dy = -this.dy;
                 }
         
                 this.x += this.dx;
                 this.y += this.dy;
         
                 this.draw();
             }
         }
         
         var fishArray = [];
         
         function init(){
             fishArray = [];
             for (let i=0; i<imgArray.length; i++){
                 var x = Math.random()*(innerWidth-200);
                 var y = Math.random()*(innerHeight-400);
                 var dx = (Math.random() - 0.5)*1;
                 var dy = (Math.random() - 0.5)*1;
                 var scale = 0.5;
                 var index = i;
                //  var scale = Math.random()*maxScale + 0.25;
                 fishArray.push(new Fish(x, y, dx, dy, scale, index));
             }
         
         }
         
         
         function animate(){
             requestAnimationFrame(animate);
             ctx.clearRect(0, 0, innerWidth, innerHeight);
             for (let i=0; i<fishArray.length; i++){
                 fishArray[i].update();
             }
         }
         
         init();
         animate();
         

      }}
    />
  )
}
export default Bookfloat