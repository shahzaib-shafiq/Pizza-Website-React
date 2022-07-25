import React from "react";
import Nabvar from "./Nabvar";

const Header = () => {
  return (
   
    <div className="banner">
    <Nabvar/>   
      <div className="banner__content">
       
        <div className="container">
       
          <div className="banner__text">
          
            <h3>Great Taste</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>
             Thank For Visitig US
             <br />
             Looking Forward For Your Next Visit 
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
