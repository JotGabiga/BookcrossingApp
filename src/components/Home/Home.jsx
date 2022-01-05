import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import girlWithBooks from "./assets/girl-book1.png";
import Books from "../Books/Books";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [tag, setTag] = useState({});
  const [tags, setTags] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [noMore, setNoMore] = useState(true);

  const loadBooksOnScroll = () => {
    console.log("scroll");
    axios
      .get(
        `https://bookcrossing-api.herokuapp.com/books/paginated?skip=${
          books.length || 0
        }`
      )
      .then((res) => {
        setBooks([...books, ...res.data]);
        setLoading(false);
      });
    if (books.length % 9 !== 0 ) {
      setNoMore(false);
    }
  };

  useEffect(() => {
    axios
      .get(`https://bookcrossing-api.herokuapp.com/tags`)
      .then((res) => {
        setTag(res.data);
        setLoading(false);
        let tagsArray = [];
        res.data.forEach((t) => {
          tagsArray.push(t.tag);
        });
        setTags(tagsArray);
      })
      .catch((err) => {
        console.log(err);
      });
    loadBooksOnScroll();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // selectedtags do state
  const filterBooksByTag = (ev) => {
    axios
      .get(
        `https://bookcrossing-api.herokuapp.com/books?tags=${ev.currentTarget.value}`
      )
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      });
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const results = !searchTerm
    ? books
    : books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.authors.filter((author) =>
            author.toLowerCase().includes(searchTerm.toLowerCase())
          ).length !== 0
      );

  return (
    <section className="home">
      <section className="searchSection">
        <div className="welcomeSection">
          <img src={girlWithBooks} alt="girl with books"></img>
          <div className="textSec">
            <h1>Wymień się książką!</h1>
            <h2>
              Znajdź książkowe inspiracje, twórz bibliotekę przeczytanych
              tytułów i tych, które chcesz przeczytać, wymieniaj się książkami.
            </h2>
            <input
              type="search"
              onChange={handleChange}
              className="input"
              placeholder="Filter"
            />
          </div>
        </div>
        <section className="filtrSection">
          {tags.map((tag) => {
            return (
              <div className="radio-toolbar">
                <input
                  key={tag._id}
                  value={tag}
                  type="radio"
                  name="tag"
                  id={tag}
                  onChange={filterBooksByTag}
                />
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
        </section>
      </section>

      <InfiniteScroll
        dataLength={books.length} //This is important field to render the next data
        next={loadBooksOnScroll}
        hasMore={noMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <h3>Yay! You have seen it all</h3>
          </p>
        }
      >
        <Books books={results} loading={isLoading} />
      </InfiniteScroll>
    </section>
  );
};
export default Home;
