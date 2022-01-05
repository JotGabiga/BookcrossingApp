import React, { useEffect, useState } from "react";
import "./BookPage.scss";
import { StylesProvider } from "@material-ui/core/styles";
import RatingStars from "../RatingStars/RatingStars";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../Comments/Comments";

const BookPage = (props) => {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [book, setBook] = useState({});

  useEffect(() => {
    axios
      .get(`https://bookcrossing-api.herokuapp.com/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {});
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function printElements(array) {
    return array.join(", ");
  }

  return (
    <section className="bookPage">
      <StylesProvider injectFirst>
        <section className="bookSection">
          <aside className="bookCoverSec">
            <img src={book.cover} alt="book cover"></img>
          </aside>
          <section className="bookDesSec">
            <section className="bookDes">
              <h2>{book.title}</h2>
              <h3>{printElements(book.authors)}</h3>
              <h4>{printElements(book.tags)}</h4>
            </section>
            <section className="actionSection">
              <div className="rateSection">
                <h4>Oceń książkę</h4>
                <div className="ratingStarsSection">
                  <RatingStars votes={book.votes}></RatingStars>
                </div>
                <h5>Ocena: {book.rating || 0} /10</h5>
              </div>
              {/* <section className="bookcrossingSection">
              </section> */}
            </section>
            <article>{book.description}</article>
            <div className="buttonSection">
            <button>Dodaj na półkę</button>
            </div>
          </section>
        </section>
        <section className="commentsSection">
          <div className="emptyDiv"></div>
          <section className="commentSection">
            <Comments comments={book.comments}></Comments>
          </section>
        </section>
      </StylesProvider>
    </section>
  );
};
export default BookPage;
