import React from "react";

const Form = () => {
  return (
    <div className="form">
      <div className="form-container">
        <form action="">
          <input type="text" placeholder="Entrer le titre d'un film" />
          <input type="submit" value={"Rechercher"} />
        </form>
        <div className="btn-sort-container">
            <div className="btn-sort" id="goodToBad">
                top<span></span>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Form;
