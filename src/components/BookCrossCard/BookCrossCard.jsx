import React from "react";
import "./BookCrossCard.scss";
import RatingStar from "../RatingStar/RatingStar";
import { Link } from "react-router-dom";


// '/bookpage/'

const BookCrossCard = (props) => {
    return (
        
        <section className="bookCrossCard">
            
           <section className="bookCoverSection">
           <Link to ={`/bookpage/${props.bookProps._id}`}>
                <img src={props.bookProps.cover} alt="book cover"></img>
                </Link>  
           </section>
           <section className="bookDesSection">
               <section className="titleSec">
               <Link to ={`/bookpage/${props.bookProps._id}`}>
               <h4>{props.bookProps.title}</h4>
               </Link>
                <h5>{props.bookProps.authors}</h5>
               </section>
                <section className="buttonsSec">
                    <button>Wymień się</button>
                    <RatingStar ratingProps={props.bookProps.rating || 0}></RatingStar>
                </section>
            </section>
           
        </section>
       
  );
};
export default BookCrossCard;
