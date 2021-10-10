import axios from "axios";
import React, { useState } from "react";
import "./RatingStars.scss";
import { useParams } from "react-router-dom";


const RatingStar = (props) => {
    const {id} = useParams();
    const [rating, setRating]= useState(0);
    const [hover, setHover]= useState(0);

    function updateRating(index){
        const votes = props.votes;
        votes.push(index)
        axios.patch(`https://bookcrossing-api.herokuapp.com/books/${id}`, {votes:votes})
        setRating(index)
    }
    return (
        <section className="ratingStars">
          {[...Array(10)].map((star, index)=>{
              index += 1;
            return (
                <button 
                    type="button" 
                    key={index} 
                    className={index <= (hover || rating) ? "on":"off"}
                    onClick={()=>updateRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}>
              <span className="star">&#9733;</span>
              </button>
            )
          })}
           
        </section>
  );
};
export default RatingStar;
