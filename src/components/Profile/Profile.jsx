import React, { useEffect, useState } from "react";
import "./Profile.scss";
import profile from "./assets/profile-photo.png";
import axios from "axios";
import BookCrossCard from "../BookCrossCard/BookCrossCard";

const Profile = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [readBooks, setReadBooks] = useState([]);
  const [selectedBookshelve, setSelectedBookshelve] = useState("bookcrossing");

  useEffect(() => {
    axios
      .get(`https://bookcrossing-api.herokuapp.com/user`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
        return res.data._id;
      })
      .then((userId) =>
        axios
          .get(
            `https://bookcrossing-api.herokuapp.com/user/${userId}/bookcrossing`
          )
          .then((res) => {
            setReadBooks(res.data);
            setLoading(false);
          })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const changeBookshelve = (bookshelve) => {
    axios
      .get(
        `https://bookcrossing-api.herokuapp.com/user/${user._id}/${bookshelve}`
      )
      .then((res) => {
        setReadBooks(res.data);
        setSelectedBookshelve(bookshelve);
        setLoading(false);
      });
  };
  const declineWord = (value) => {
    if (value === 1) {
      return "książka";
    }
    if (value <= 4 && value !== 0) {
      return "książki";
    }
    return "książek";
  };
  return (
    <section className="profile">
      <section className="photoSection">
        <section className="innerSection"></section>
        <section className="innerSection ">
          <section className="photoContainer">
            <img src={profile} alt="profile" />
            <h3>{user.fullName}</h3>
          </section>
        </section>
        <section className="innerSection">
          <section className="iconContainer"></section>
        </section>
      </section>
      <section className="bookshelveSection">
        <div className="bookshelve">
          <input
            type="radio"
            name="readBooks"
            id="bookcrossing"
            checked={selectedBookshelve === "bookcrossing"}
            onChange={() => changeBookshelve("bookcrossing")}
          />
          <label htmlFor="bookcrossing">
            <h4>Bookcrosing</h4>
            <section className="categoriesDes">
              <h5>
                {user.bookcrossing.length}{" "}
                {declineWord(user.bookcrossing.length)}
              </h5>
            </section>
          </label>
        </div>
        <div className="bookshelve">
          <input
            type="radio"
            name="readBooks"
            id="wantToRead"
            checked={selectedBookshelve === "wantToRead"}
            onChange={() => changeBookshelve("wantToRead")}
          />
          <label htmlFor="wantToRead">
            <h4>Chce przczytać</h4>
            <div className="categoriesDes">
              <h5>
                {user.wantToRead.length} {declineWord(user.wantToRead.length)}
              </h5>
            </div>
          </label>
        </div>
        <div className="bookshelve">
          <input
            type="radio"
            name="readBooks"
            id="currentlyReadBooks"
            checked={selectedBookshelve === "currentlyReadBooks"}
            onChange={() => changeBookshelve("currentlyReadBooks")}
          />
          <label htmlFor="currentlyReadBooks">
            <h4>Czytam</h4>
            <section className="categoriesDes">
              <h5>
                {user.currentlyReadBooks.length}{" "}
                {declineWord(user.currentlyReadBooks.length)}
              </h5>
            </section>
          </label>
        </div>
        <div className="bookshelve">
          <input
            type="radio"
            name="readBooks"
            id="readBooks"
            checked={selectedBookshelve === "readBooks"}
            onChange={() => changeBookshelve("readBooks")}
          />
          <label htmlFor="readBooks">
            <h4>Przeczytane</h4>
            <section className="categoriesDes">
              <h5>
                {user.readBooks.length} {declineWord(user.readBooks.length)}
              </h5>
            </section>
          </label>
        </div>
      </section>
      <section className="booksSection">
        {readBooks.map((readBook) => (
          <BookCrossCard key={readBook._id} bookProps={readBook} />
        ))}
        {readBooks.length % 3 !== 0 && <div className="emptyBookCard"></div>}
      </section>
    </section>
  );
};
export default Profile;
