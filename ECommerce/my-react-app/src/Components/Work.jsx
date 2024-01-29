import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals  from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title:"Pick Meals",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum explicabo at eos iure! Eveniet commodi voluptate modi maiores amet dolorem debitis quisquam pariatur.Distinctio a officiis quia facere sit facilis.",
        },
        {
            image: ChooseMeals,
            title:"Choose How Oftendy",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum explicabo at eos iure! Eveniet commodi voluptate modi maiores amet dolorem debitis quisquam pariatur.Distinctio a officiis quia facere sit facilis.",
        },
        {
            image: DeliveryMeals,
            title:"Fast Deliveries",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum explicabo at eos iure! Eveniet commodi voluptate modi maiores amet dolorem debitis quisquam pariatur.Distinctio a officiis quia facere sit facilis.",
        },
    ];
  return <div className="work-section-wrapper" >
  <div className="work-section-top" >
     <p className="primary-subheading">Work</p>
     <h1 className="primary-heading">How It Works</h1>
     <p className="primary-text">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
         Vero quisquam ducimus veniam hic, voluptatem molestiae facilis quam aliquam, sapiente quis saepe tempora deserunt corporis aperiam ea. 
         Impedit quae pariatur magnam.
     </p>
  </div>
  <div className="work-section-bottom" >
     {
         workInfoData.map((data) => (
             <div className="work-section-info" >
                 <div className="info-boxes-img-container" >
                     <img src={data.image} alt="" />
                 </div>
                 <h2>{data.title}</h2>
                 <p>{data.text}</p>
             </div>
         ))
     }
  </div>
</div>;
}

export default Work