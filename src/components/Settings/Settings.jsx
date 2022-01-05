import React from "react";
import "./Settings.scss";
import { StylesProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import profileImage from "./assets/user-icon.svg";

const Settings = (props) => {
  return (
    <section className="settings">
      <section className="bacgroundContainer"></section>
      <aside className="profileImageSection">
        <div className="profileImageContainer">
          <img src={profileImage} alt="profile"></img>
        </div>
        <section>Ustaw zdjęcie profilowe</section>
      </aside>
      <section className="formSection">
        <StylesProvider injectFirst>
          <h3>Edytuj profil</h3>
          <section>
            Osoby odwiedzające Twój profil zobaczą następujące informacje
          </section>
          <h6>Imie i nazwisko</h6>
          <TextField id="outlined-helperText" label="" variant="outlined" />
          <h6>Nazwa profilu</h6>
          <TextField id="outlined-helperText" label="" variant="outlined" />
          <h6>Email</h6>
          <TextField id="outlined-helperText" label="" variant="outlined" />
          <h6>Zmiany na koncie</h6>
          <section>
            Tutaj ustawisz preferencje logowania i dokonasz znaczących zmian na
            koncie
          </section>
          <section className="accountChangesSection">
            <div>
              <h6>Hasło</h6>
              <TextField id="outlined-helperText" label="" variant="outlined" />
            </div>
            <button>Zmień</button>
          </section>
          <section className="accountChangesSection">
            <div>
              <h6>Usuń konto</h6>
              <section>Usuń konto i jego dane</section>
            </div>
            <button>Usuń</button>
          </section>
          <section className="submmitSection">
            <button>Rejestracja</button>
          </section>
        </StylesProvider>
      </section>
    </section>
  );
};

export default Settings;
