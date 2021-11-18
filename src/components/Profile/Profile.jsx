import React, { useEffect, useState } from "react";
import "./Profile.scss";
import profile from "./assets/profile-photo.png";
import plus from "./assets/plus-solid.svg";
import settings from "./assets/cog-solid.svg";
import axios from "axios";
import BookCrossCard from "../BookCrossCard/BookCrossCard";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [readBooks, setReadBooks] = useState([]);
  const [selectedBookshelve, setSelectedBookshelve] = useState("bookcrossing")

  useEffect(() => {
    axios
      .get(`https://bookcrossing-api.herokuapp.com/user`)
      .then((res) => {
        // console.log(res.data);
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
            // console.log(res.data);
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
        // console.log(res.data);
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
            <h5>{user.fullName}</h5>
          </section>
        </section>
        <section className="innerSection">
          <section className="iconContainer">
            <button>
              <img src={plus} alt="add item" />
            </button>
            <button>
              <Link to="/settings">
                <img src={settings} alt="settings" />
              </Link>
            </button>
          </section>
        </section>
      </section>
      <section className="bookshelveSection">
        <div className="bookshelve">
          <input
            type="radio"
            name="readBooks"
            id="bookcrossing"
            checked={selectedBookshelve === "bookcrossing" }
            onChange={() => changeBookshelve("bookcrossing")}
          />
          <label htmlFor="bookcrossing">
          <div>Bookcrosing</div>
            <section className="categoriesDes">
              {user.bookcrossing.length} {declineWord(user.bookcrossing.length)}
            </section>
          </label>
        </div>

        <div className="bookshelve">
          <input
            type="radio"
            name="readBooks"
            id="wantToRead"
            checked={selectedBookshelve === "wantToRead" }
            onChange={() => changeBookshelve("wantToRead")}
          />
          <label htmlFor="wantToRead">
            <div>Chce przczytać</div>
            <div className="categoriesDes">
              {user.wantToRead.length} {declineWord(user.wantToRead.length)}
            </div>
          </label>
        </div>

        <div className="bookshelve">
          <input
            type="radio"
            name="readBooks"
            id="currentlyReadBooks"
            checked={selectedBookshelve === "currentlyReadBooks" }
            onChange={() => changeBookshelve("currentlyReadBooks")}
          />
          <label htmlFor="currentlyReadBooks">
           <div>Czytam</div> 
            <section className="categoriesDes">
              {user.currentlyReadBooks.length}{" "}
              {declineWord(user.currentlyReadBooks.length)}
            </section>
          </label>
        </div>

        <div className="bookshelve">
          <input
            type="radio"
            name="readBooks"
            id="readBooks"
            checked={selectedBookshelve === "readBooks" }
            onChange={() => changeBookshelve("readBooks")}
          />
          <label htmlFor="readBooks">
          <div>Przeczytane</div> 
            <section className="categoriesDes">
              {user.readBooks.length} {declineWord(user.readBooks.length)}
            </section>
          </label>
        </div>
      </section>
      <section className="booksSection">
        {readBooks.map((readBook) => {
          return <BookCrossCard 
          key={readBook._id} 
          bookProps={readBook} />;
        })}
      </section>
    </section>
  );
};

export default Profile;
