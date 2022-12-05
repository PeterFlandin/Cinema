import React from "react";

const CardsMovie = ({ films }) => {

const dateFormateur = (date) => {
    let [yy, mm, dd] = date.split("-")
    return [dd, mm, yy].join("/")
}


  return (
    <div className="cards">
      <img
        src={
          films.poster_path
            ? "https://image.tmdb.org/t/p/original/" + films.poster_path
            : "./img/poster.jpg"
        }
        alt={`affiche ${films.title}`}
      />
      <h2>{films.title}</h2>
      {films.release_date ? <h5>Sorti le : {dateFormateur(films.release_date)}</h5> : null}
    </div>
  );
};

export default CardsMovie;
