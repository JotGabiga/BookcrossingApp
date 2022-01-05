import React from "react";
import "./BookCrossCard.scss";
import RatingStar from "../RatingStar/RatingStar";
import { Link } from "react-router-dom";

const BookCrossCard = (props) => {
  return (
    <section className="bookCrossCard">
      <section className="bookCoverSection">
        <Link
          style={{ textDecoration: "none" }}
          to={`/bookpage/${props.bookProps._id}`}
        >
          <img src={props.bookProps.cover} alt="book cover"></img>
        </Link>
      </section>
      <section className="bookDesSection">
        <section className="titleSec">
          <Link
            style={{ textDecoration: "none" }}
            to={`/bookpage/${props.bookProps._id}`}
          >
            <h3>{props.bookProps.title}</h3>
          </Link>
          <div className="authorRatingSection">
            <h4>{props.bookProps.authors}</h4>
            <div className="ratingSection">
              <RatingStar
                ratingProps={props.bookProps.rating || 0}
              ></RatingStar>
            </div>
          </div>
        </section>
        <section className="buttonsSec">
          <button>Wymień się</button>
        </section>
      </section>
    </section>
  );
};
export default BookCrossCard;
