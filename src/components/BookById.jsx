import React from "react";
import axios from "axios";
import BookPage from "./BookPage/BookPage";
export default class BookById extends React.Component{
    state={
        bookById:[],
    };
    componentDidMount(_id){
        axios.get  (`https://bookcrossing-api.herokuapp.com/books/${_id}`)

        .then(res => {
            // console.log(res);
            this.setState({bookById: res.data });
        })
    }
    render(){
        return (
      <div>
          <BookPage bookProps={book}/>
      </div>
        )
    }
}