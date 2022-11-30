import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/"className={(nav) => (nav.isActive ? "nav-active" : "")}>
         accueil
        </NavLink>
        <NavLink to="/CoupdeCoeur" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Coup de Coeur
        </NavLink>
      </ul>
        <h1>CINEMANE</h1>
    </div>
  );
};

export default Navigation;
