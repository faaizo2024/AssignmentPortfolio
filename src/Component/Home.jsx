
import React from "react";

import { Link } from "react-router-dom";

function Home (){
    return ( <div>

   
       <header className="header">
        <a href="#" className="logo"><span>Faisa</span>Said</a>
       
       <ul className="navbar">
        <Link to="/Bio" className="active">Bio</Link>
        <Link to="/Projecr">project</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Skill">Skill</Link>
      
       </ul>

       <a href="" className="contact">contact me</a>
       </header>

       <div>
       <section className="home">
        <div className="home-content">
            <h3>HI</h3>

            <h1>I'm <span>Faisa <br /></span>a Fullstack Developer</h1>

            <p>Hello, I'm [Faaisa], a passionate software developer with a love for crafting innovative solutions. My journey into the world of coding began with 
            a deep fascination for technology and its potential to transform lives.</p>
       
         <div className="btn-box">
            <button className="btn-1">Hire me</button>
            <button className="btn-2">Experience</button>
         </div>
        </div>
        <div className="img-box">
            <img src="https://img.freepik.com/free-photo/portrait-female-interior-designer-home_23-2150334498.jpg?w=360" className="img-responsive"/>
        </div>
       </section>
       </div>
       </div>
  
    )
}

export default Home;