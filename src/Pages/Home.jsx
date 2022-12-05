import React from "react";
import Navigation from "../Components/Navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import CardsMovie from "./CardsMovie";

const Home = () => {
  const [film, setFilm] = useState([]);

  console.log(film);

  const URL =
    "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR";

  const getData = () => {
    axios.get(URL).then((res) => setFilm(res.data.results));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="result">
      {film.slice(0, 66).map((films) => (
        <CardsMovie films={films} />
        ))}

        </div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
