import React from "react";
import "./RatingStar.scss";
import ratingStar from "./assets/star-solid.svg";

const RatingStar = (props) => {
    return (
        <section className="ratingStar">
           <img src={ratingStar} alt="rating star"></img>
           <text>{props.ratingProps}</text>
        </section>
  );
};
export default RatingStar;
