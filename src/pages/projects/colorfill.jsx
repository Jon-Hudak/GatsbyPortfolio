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
        <img className="colorImg" src={color} alt="" />
        <img id="sketchImg"className="sketchImg mask-animatio" src={sketch} alt="" />
      </div>
    </Layout>
  )
}
