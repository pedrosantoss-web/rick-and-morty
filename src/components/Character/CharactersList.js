import React from "react";
import css from "./Character.css"



const CharacterList = ({ characters }) => {
    return (
    
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="con">
            <div className="card" >
              <img className="card-img" src={item.image} alt="character" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p className="card-text">Species: {item.species}</p>
                <p className="card-text">Location: {item.location.name}</p>
              </div>
            </div>
          </div>
        ))};
      </div>
    );
        
      
    
  
};

export default CharacterList;