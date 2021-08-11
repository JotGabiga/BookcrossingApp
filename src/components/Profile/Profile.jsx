import React from "react";
import "./Profile.scss";
import profile from "./assets/profile-photo.png";
import plus from "./assets/plus-solid.svg";
import settings from "./assets/cog-solid.svg";

const Profile = (props) => {
  return (
    <section className="profile">
      <section className="photoSection">
        <section className="innerSection"></section>
        <section className="innerSection ">
          <section className="photoContainer">
            <img src={profile} alt="profile" />
            <h5>Jona Doe</h5>
            <section className="followersSection">
            <h6>12 Obserwujących</h6>
            <h6>200 Obserwowanych</h6>
            </section>
          </section>
        </section>
        <section className="innerSection">
          <section className="iconContainer">
            <button>
              <img src={plus} alt="add item" />
            </button>
            <button>
              <img src={settings} alt="settings" />
            </button>
          </section>
        </section>
      </section>
      <section className="categoriesSection">
        <section className="categories">
          <section className="categoriesHeader">Chce przczytać</section>
          <section className="categoriesDes">12 książek</section>
        </section>
        <section className="categories">
          <section className="categoriesHeader">Czytam</section>
          <section className="categoriesDes">12 książek</section>
        </section>
        <section className="categories">
          <section className="categoriesHeader">Przeczytane</section>
          <section className="categoriesDes">12 książek</section>
        </section>
        <section className="categories">
          <section className="categoriesHeader">Bookcrosing</section>
          <section className="categoriesDes">12 książek</section>
        </section>
      </section>
      <section className="booksSection"></section>
    </section>
  );
};

export default Profile;
