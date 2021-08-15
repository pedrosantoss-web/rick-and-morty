import React, { useEffect, useState } from "react";
import Navbar from "../components/Nav/Navbar";
import CharacterList from "../components/Character/CharactersList";
import css from './pag.css'


export default function Home() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";


  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);
  

  return (
   <div className="home">
      <header className="header">
       <Navbar Logotipo="Rick and Morty " />
      </header>
      <div className="container ">
        <nav>
          <ul className="alter">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Prev
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>

      <CharacterList characters={characters} />

      <div className="container ">
        <nav>
          <ul className="alter">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
   </div> 
  );
}