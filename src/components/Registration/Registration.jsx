import React from "react";
import "./Registration.scss";
import Button from "@material-ui/core/Button";
import girlWithBooks from "./assets/girl-book1.png";
import googleIcon from "./assets/google-brands.svg";
import { StylesProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Registration = (props) => {
  return (
    <section className="registration">
      <section className="bacgroundContainer"></section>
      <section className="regContainer imageSection">
        <img src={girlWithBooks} alt="girl with books"></img>
        <h1>Witaj na Bookstagramie</h1>
        <article>
          Znajdź książkowe inspiracje, twórz bibliotekę przeczytanych tytułów i
          tych, które chcesz przeczytać, wymieniaj się ksiązkami.
        </article>
      </section>
      <section className="regContainer formSection">
        <StylesProvider injectFirst>
          <Button
            classes={{ root: "button", label: "button-label" }}
            variant="contained"
          >
            <img src={googleIcon} alt="google icon"></img>
            Załóż konto przez Google
          </Button>
          <h6>lub</h6>
          <TextField
            classes={{ root: "input", label: "input-label" }}
            id="outlined-helperText"
            label="Imię i nazwisko"
            variant="outlined"
          />
          <TextField
            classes={{ root: "input", label: "input-label" }}
            id="outlined-helperText"
            label="Nazwa profilu"
            variant="outlined"
          />
          <TextField
            classes={{ root: "input", label: "input-label" }}
            id="outlined-helperText"
            label="Adres mail"
            variant="outlined"
          />
          <TextField
            classes={{ root: "input", label: "input-label" }}
            id="outlined-helperText"
            label="Hasło"
            variant="outlined"
          />
          <section className="checkboxSection">
            <FormControlLabel
              control={<Checkbox name="checkedC" />}
              label="Rejestrując się, potwierdzam, że akceptuję regulamin, przeczytałam/em politykę prywatności
                    i mam powyżej 18 lat."
            />
          </section>
          <Button
            classes={{ root: "basicButton", label: "basicButton-label" }}
            variant="contained"
          >
            Rejestracja
          </Button>
        </StylesProvider>
      </section>
    </section>
  );
};
export default Registration;
