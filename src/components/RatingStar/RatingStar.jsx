import React from "react";
import "./RatingStar.scss";
import ratingStar from "./assets/star-solid.svg";

const RatingStar = (props) => {
    return (
        <section className="ratingStar">
           <img src={ratingStar} alt="rating star"></img>
           <h6>{props.ratingProps || 0}/10</h6>
        </section>
  );
};
export default RatingStar;
