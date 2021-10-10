import React from "react";
import "./BookCrossCard.scss";
// import bookCover from "./assets/book-cover.jpg";
import RatingStar from "../RatingStar/RatingStar";
import { Link } from "react-router-dom";


// '/bookpage/'

const BookCrossCard = (props) => {
    return (
        <Link to ={`/bookpage/${props.bookProps._id}`}>
        <section className="bookCrossCard">
           <section className="bookCoverSection">
                <img src={props.bookProps.cover} alt="book cover"></img>
           </section>
           <section className="bookDesSection">
               <section className="titleSec">
               <h4>{props.bookProps.title}</h4>
                <h5>{props.bookProps.authors}</h5>
               </section>
                <section className="buttonsSec">
                    <button>Wymień się</button>
                    <RatingStar ratingProps={props.bookProps.rating}></RatingStar>
                </section>
            </section>
        </section>
        </Link>
  );
};
export default BookCrossCard;
