import React from "react";
import Profilepic from "../Assets/mr-bean-image.jpg";
import {AiFillStar} from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At corporis ab, 
                omnis voluptatem saepe delectus quas aperiam accusantium quaerat ut tempora vel. 
                Impedit a ratione magnam laudantium, quibusdam molestias mollitia?
            </p>
        </div>
        <div className="textimonial-section-bottom" >
            <img src={Profilepic} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Amet, repudiandae perferendis quisquam numquam in quis, placeat ea iure cum voluptates, nesciunt ex asperiores recusandae dolorum. 
                Dolore deserunt consequuntur incidunt necessitatibus.
            </p>
            <div className="textimonial-stars-container" >
               <AiFillStar /> 
               <AiFillStar /> 
               <AiFillStar /> 
               <AiFillStar /> 
               <AiFillStar /> 
            </div>
            <h2>Pooja Singh</h2>
        </div>
    </div>
  );
};

export default Testimonials