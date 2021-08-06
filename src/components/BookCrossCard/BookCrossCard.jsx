import React from "react";
import "./BookCrossCard.scss";
import bookCover from "./assets/book-cover.jpg";
import RatingStar from "../RatingStar/RatingStar";

const BookCrossCard = (props) => {
    return (
        <section className="bookCrossCard">
           <section className="bookCoverSection">
                <img src={bookCover} alt="book cover"></img>
           </section>
           <section className="bookDesSection">
               <section className="titleSec">
               <h4>Bezmatek</h4>
                <h5>Mira Marcinów</h5>
                <h6>W bibliotece</h6>
               </section>
                <section className="buttonsSec">
                    <button>Wymień się</button>
                    <RatingStar></RatingStar>
                </section>
            </section>
        </section>
  );
};
export default BookCrossCard;
