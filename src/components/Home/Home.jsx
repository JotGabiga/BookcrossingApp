import React, { useEffect, useState } from "react";
import booksImage from "./assets/main-image2.jpg";
import "./Home.scss";
import axios from "axios";
import BookCrossCard from "../BookCrossCard/BookCrossCard";


const Home = (props) => {
 

  
    const [isLoading, setLoading] = useState(true);
    const [tag, setTag] = useState({})
    const [tags, setTags]= useState([])
    const [books, setBooks] = useState([])
    useEffect(()=>{
      axios.get(`https://bookcrossing-api.herokuapp.com/tags`)
      .then( res => {
        console.log(res.data)
        setTag(res.data);
        setLoading(false);
        let tagsArray = []
        console.log(res.data)
        res.data.forEach(t => {
        tagsArray.push(t.tag)
      })
      setTags(tagsArray)
      })
      .catch(err => {
        console.log(err)
      })
      axios.get  ('https://bookcrossing-api.herokuapp.com/books')
        .then(res => {
            setBooks(res.data);
            setLoading(false);
            console.log(res.data);
        })
        console.log(books);
    },[]);
  
    if(isLoading){
      return <div>Loading...</div>
    }
    
    
// selectedtags do state


  const handleButtonClicked = ev => {
    axios.get  (`https://bookcrossing-api.herokuapp.com/books?tags=${ev.currentTarget.value}`)
    .then(res => {
      setBooks(res.data);
      setLoading(false);
      console.log(res.data);
  })
     }
    
    return (
        <section className="home">
            <section className="backgroundContainer">
                <img src={booksImage} alt="books"></img>
            </section>
            <section className="searchSection">
                <div className="textSection">
                    <h1>Wymień się książką!</h1>
                    <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt est in laoreet tincidunt. Morbi facilisis nisi eu feugiat lacinia. Proin ornare eu purus id porttitor. Donec et mattis libero. Aliquam erat volutpat. Fusce tempus nisi at nisi efficitur, vitae malesuada dui euismod. Phasellus auctor id sapien id malesuada. 
                    </article>
                </div>
                <section className="filtrSection">
                {tags.map(tag=>{return <button key={tag} value={tag} onClick={handleButtonClicked}>{tag}</button>})}   
                  
                </section>
            </section>
            <section className="booksSection">
            {books.map(book=>{return <BookCrossCard bookProps={book}/>})}   
            </section>
        </section>

        
  );
};


export default Home;
