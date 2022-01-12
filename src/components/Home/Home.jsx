import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import girlWithBooks from "./assets/girl-book1.png";
import Books from "../Books/Books";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadMoreBooks, setLoadMoreBooks] = useState(true);
  const loadMore = (dataCount) => {
    if (dataCount<9) {
      setLoadMoreBooks(false);
    }
  }
  const loadBooksOnScroll = () => {
    axios
      .get(
        `https://bookcrossing-api.herokuapp.com/books?skip=${
          books.length || 0
        }&tag=${tag}`
      )
      .then((res) => {
        setBooks([...books, ...res.data]);
        setLoading(false);
        return res.data.length
      })
      .then((dataCount) => {
        loadMore(dataCount);
      });
  };
  useEffect(() => {
    axios
      .get(`https://bookcrossing-api.herokuapp.com/tags`)
      .then((res) => {
        setLoading(false);
        let tagsArray = [];
        res.data.forEach((t) => {
          tagsArray.push(t.tag);
        });
        setTags(tagsArray);
      })
      .catch((err) => {
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // selectedtags do state
  const filterBooksByTag = (ev) => {
    console.log("filterBooksByTag")
    const tag = ev.currentTarget.value;
    setLoadMoreBooks(true);
    setTag(tag);
    axios
      .get(
        `https://bookcrossing-api.herokuapp.com/books?skip=0&tag=${tag}`
      )
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
        return res.data.length;
      })
      .then((dataCount) => {
        loadMore(dataCount);
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
        <div className="radio-toolbar">
                <input
                  key="allTags"
                  value=""
                  type="radio"
                  name="tag"
                  id="allTags"
                  onChange={filterBooksByTag}
                />
                <label htmlFor="allTags">Wszytskie</label>
              </div>
          {tags.map((tag, index) => {
            
            return (
            <div key={tag+index}className="radio-toolbar">
                <input
                  key={tag}
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
        hasMore={loadMoreBooks}
        loader={<h4>Loading...</h4>}
        endMessage={
          <section style={{ textAlign: "center" }}>
            <h3> Wszytskie książki zostały wyświetlone..</h3>
          </section>
        }
      >
        <Books books={results} loading={isLoading} />
      </InfiniteScroll>
    </section>
  );
};
export default Home;
