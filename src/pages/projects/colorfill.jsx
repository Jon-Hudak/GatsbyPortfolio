import React from "react"
import Layout from "../../components/Layout.jsx"
import sketch from "../../images/tattootestsketch.jpg"
import color from "../../images/tattootest.jpg"
import { useEffect } from "react"

export default function ColorFill() {
   
    
    function handleClick(){
    var element = document.getElementById("sketchImg");
    
    element.classList.remove('mask-animation');
    window.requestAnimationFrame(()=> {
      element.classList.add('mask-animation');
    });
  };
    
        
    
    useEffect(() => {
      window.requestAnimationFrame(()=> {
        
      
        const element = document.getElementById("sketchImg");
      element.classList.add("mask-animation");
    });
      
    }, []);
  return (
    <Layout>
      <button className="reset-animation mt-10 bg-accent-blue p-5" onClick={handleClick}>Reset</button>
      <div className="mask-container">
        <img id="sketchImg"className="sketchImg colorFillImg z-10" src={sketch} alt="" />
        <img className="colorImg colorFillImg" src={color} alt="" />
        
      </div>
    </Layout>
  )
}
