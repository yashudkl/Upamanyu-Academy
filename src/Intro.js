import React from "react";
import logo from './images/intro-image.png';
import './Intro.css';
function Intro(){
 return( 
    <div className="Intro">
<div class="intro-card">
 <img src={logo} alt="Upamanyu Academy Logo" className="intro-image" />
 <div className="intro-content">
        <h1>Welcome to Upamanyu Academy!</h1>
        <p>
          At Upamanyu Academy, we believe in empowering students to achieve their full potential through innovative and effective learning experiences...
        </p>
        <p>
          Join us at Upamanyu Academy, where we are dedicated to "Making Education Better in Nepal." Together, we can build a brighter future for our students and our nation.
        </p>
      </div>
</div>
    </div>
 );
}
export default Intro;