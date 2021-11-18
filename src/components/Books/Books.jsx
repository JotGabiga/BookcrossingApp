import React from "react";
import "./Books.scss";
import BookCrossCard from "../BookCrossCard/BookCrossCard";

const Books = ({books, loading}) => {
  // console.log(books)
if (loading){
  return <h2>Loading..</h2>
}
return (
  <div className="booksSection">
  {books.map((book) => (
    <BookCrossCard key={book._id} bookProps={book} />
  ))}
</div>
  );
};
export default Books;
