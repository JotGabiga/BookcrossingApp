import React from "react";
import "./Start.scss";
// import girlWithBooks from "./assets/girl-book1.png";
import Login from "../Login/Login";

const Start = (props) => {
  return (
    <section className="registration">
      <section className="bacgroundContainer"></section>
      <section className="regContainer imageSection">
        {/* <img src={girlWithBooks} alt="girl with books"></img> */}
        <h1>Witaj na Bookstagramie</h1>
        <article>
          Znajdź książkowe inspiracje, twórz bibliotekę przeczytanych tytułów i
          tych, które chcesz przeczytać, wymieniaj się książkami.
        </article>
      </section>
      <Login></Login>
    </section>
  );
};
export default Start;
