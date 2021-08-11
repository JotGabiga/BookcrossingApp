import React from "react";
import "./BookPage.scss";
import bookCover from "./assets/book-cover.jpg";
import bookcrossing from "./assets/bookcrossing.png";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core/styles";
import ratingStar from "./assets/star-solid.svg";

const BookPage = (props) => {
  return (
    <section className="bookPage">
      <StylesProvider injectFirst>
        <section className="bookSection">
          <aside className="bookCoverSection">
            <img src={bookCover} alt="book cover"></img>
          </aside>
          <section className="bookDesSection">
              <section className="bookDes">
            <header>Pułapki myślenia. O myśleniu szybkim i wolnym</header>
            <h6>Daniel Kahneman</h6>
            <h6>nauki społeczne</h6>
            </section>
            <section className="actionSection">
              <div className="ratingSection">
                <h6>Oceń książkę</h6>
                <div className="ratingStarsSection">
                  <img src={ratingStar} alt="rating star" />
                  <img src={ratingStar} alt="rating star" />
                  <img src={ratingStar} alt="rating star" />
                  <img src={ratingStar} alt="rating star" />
                  <img src={ratingStar} alt="rating star" />
                  <img src={ratingStar} alt="rating star" />
                  <img src={ratingStar} alt="rating star" />
                  <img src={ratingStar} alt="rating star" />
                  <img src={ratingStar} alt="rating star" />
                  <img src={ratingStar} alt="rating star" />
                </div>
                <text>Ocena 8,9/10</text>
              </div>
              <section className="bookcrossingSection">
                <Button
                  classes={{ root: "button", label: "button-label" }}
                  variant="contained"
                >
                  <img src={bookcrossing} alt="bookcrossing" />
                </Button>
                <section className="bookcrossingSectionDes">
                  <h6>Bookcrossing</h6>
                  <text>27 użytkowników chcę wymienić tę ksiązkę </text>
                </section>
              </section>
            </section>
            <article>
              Czy ludzie są świadomymi i autonomicznymi autorami własnych
              wyborów i osądów? Czy mogą ufać własnemu myśleniu, zwłaszcza temu
              szybkiemu – intuicyjnemu i emocjonalnemu? Rozważniej jest na pewno
              zdać się na myślenie wolne, analityczne. A mimo to trudno uniknąć
              pułapek myślenia. Przytrafia się to nawet ekonomistom i nie
              sprzyja podejmowaniu trafnych decyzji… W tej odkrywczej książce
              Daniel Kahneman, psycholog, laureat Nagrody Nobla w dziedzinie
              ekonomii, rozważa te zagadnienia i daje istotny wgląd w mechanizmy
              ludzkiego myślenia. Jest to książka przełomowa. Kahneman objaśnia
              nam działanie umysłu i opisuje, jak o naszym myśleniu wspólnie
              decydują dwa systemy: System 1 – szybki, intuicyjny i emocjonalny
              oraz System 2 – wolniejszy, działający w sposób bardziej
              przemyślany i logiczny. Kahneman odkrywa przed nami niezwykłe
              możliwości – ale też błędy i usterki – szybkiego myślenia,
              wskazując wszechogarniający wpływ intuicyjnych wrażeń na nasze
              myśli i zachowania.
            </article>
            <Button
              classes={{ root: "basicButton", label: "basicButton-label" }}
              variant="contained"
            >
              Dodaj na półkę
            </Button>
          </section>
        </section>
      </StylesProvider>
      <section className="commentSection"></section>
    </section>
  );
};

export default BookPage;
