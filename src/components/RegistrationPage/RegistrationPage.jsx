import React from "react";
import girlWithBooks from "./assets/girl-book1.png";
import "./RegistrationPage.scss";


const RegistrationPage = (props) => {
    return (
        <section className="registrationPage">
            <section className="bacgroundContainer">
            </section>
            <section className="regContainer imageSection">
                <img src={girlWithBooks} alt="girl with books">
                </img>
                <h1>
                    Witaj na Bookstagramie
                </h1>
                <article>
                    Znajdź książkowe inspiracje, 
                    twórz bibliotekę przeczytanych tytułów i tych, które chcesz przeczytać, 
                    wymieniaj się ksiązkami.
                </article>
            </section>
            <section className="regContainer formSection">
                
            </section>



                
           
            
        </section>
  );
};
export default RegistrationPage;
