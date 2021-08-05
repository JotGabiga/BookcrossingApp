import React from "react";
import girl from "./assets/main-image.jpg";
import "./Home.scss";

const Home = (props) => {
    return (
        <section className="home">
            <section className="searchSection">
                <div className="imageSection">
                    <img src={girl} alt="books"></img>
                </div>
            <div className="textSection">
                <h1>Wymień się książką!</h1>
                <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt est in laoreet tincidunt. Morbi facilisis nisi eu feugiat lacinia. Proin ornare eu purus id porttitor. Donec et mattis libero. Aliquam erat volutpat. Fusce tempus nisi at nisi efficitur, vitae malesuada dui euismod. Phasellus auctor id sapien id malesuada. 
                </article>
            </div>
            </section>
            <section className="filtrSection">
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button> 
                <button>Lorem ipsum</button> 
                <button>Lorem ipsum</button> 
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button>
            </section>
            <section className="booksSection">
            </section>
        </section>
  );
};
export default Home;
