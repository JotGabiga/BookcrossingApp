import React, { useEffect, useState } from "react";
import "./BookPage.scss";
import Button from "@material-ui/core/Button";
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
      .catch((err) => {
      });
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
              <header>{book.title}</header>
              <h6>{printElements(book.authors)}</h6>
              <h6>{printElements(book.tags)}</h6>
            </section>
            <section className="actionSection">
              <div className="rateSection">
                <h6>Oceń książkę</h6>
                <div className="ratingStarsSection">
                  <RatingStars votes={book.votes}></RatingStars>
                </div>
                <section>Ocena: {book.rating || 0} /10</section>
              </div>
              <section className="bookcrossingSection">
              </section>
            </section>
            <article>{book.description}</article>
            <Button
              classes={{ root: "basicButton", label: "basicButton-label" }}
              variant="contained"
            >
              Dodaj na półkę
            </Button>
          </section>
        </section>
        <section className="commentsSection">
          <div className="profileDiv"></div>
          <section className="commentSection">
            <Comments comments={book.comments}></Comments>
          </section>
        </section>
      </StylesProvider>
    </section>
  );
};
export default BookPage;
