import React from "react";
import imgsrc from "./logo.jpg"
import "./style.css"
import email from "./email.jpg"
import twi from "./twitter.avif";
import fb from "./fb-logo.avif"
import insta from "./insta.jpg"
import linkin from "./in-logo.png"
import gitimg from "./github-logo.png"

function App() {
  return (
    <div className="outrow">

      <div className="body">

        <img src={imgsrc} className="img-logo" alt="logo" />
        <div className="intro">
          <h2 className="name">Alok Jha</h2>

          <h5>Frontend Developer</h5>

          <h6>alokjha.website</h6>
          </div>

          
          <button className="button">
            <img src={email} alt="logo" className="logo"/>
            <h5>Email</h5>
          </button>
          
          
          <div className="content">

            <h4>About</h4>
            <p>
              I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
            <h4>Interests</h4>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>

          <div className="footer">
            <ul>
              <li> <img src={twi} alt="twitter-logo" /> </li>
              <li><img src={fb} alt="fb-logo" /></li>
              <li><img src={insta} alt="instalogo" /> </li>
              <li><img src={linkin} alt="linkedin-logo" /> </li>
              <li><img src={gitimg} alt="github-logo" /> </li>
            </ul>
          </div>
        
      </div>





    </div>
  );
}
export default App;