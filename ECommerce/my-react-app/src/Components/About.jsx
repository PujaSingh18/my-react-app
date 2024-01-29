import React from "react";
import AbooutBackground from "../Assets/about-background.png";
import AbooutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="about-section-container" >
        <div className="about-background-image-container" >
            <img src={AbooutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AbooutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container" >
            <p className="primary-subheading">About</p>
            <h1>
                Food Is An Important Part Of A Balanced Diet.
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Asperiores itaque mollitia iure quis ab veritatis officiis accusantium aliquam reiciendis. 
                Deserunt quasi provident saepe esse in autem expedita eveniet dolor ab.
            </p>
            <p className="primary-text">
                Non tincidunt magna non et elit. Dolor turpis molestie dui magnis faciisis at fringilla quam.
            </p>
            <div className="about-buttons-container" >
                <button className="secondary-button" >Learn More</button>
                <button className="watch-video">
                    {" "}
                    <BsFillPlayCircleFill/>Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About