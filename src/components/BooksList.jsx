// import React from "react";
// import axios from "axios";
// import BookCrossCard from "./BookCrossCard/BookCrossCard";

// export default class BooksList extends React.Component{
//     state={
//         books:[],
//     };
//     componentDidMount(){
//         axios.get  ('https://bookcrossing-api.herokuapp.com/books')
//         .then(res => {
//             this.setState({books: res.data });
//         })
//     }
//     render(){
//         return (
//       <div>
//           {this.state.books.map(book=>{return <BookCrossCard bookProps={book}/>})}
//       </div>
//         )
//     }
// }