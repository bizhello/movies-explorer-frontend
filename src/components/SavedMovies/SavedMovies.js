import React from 'react';
import { useEffect, useState } from "react";
import LoadingSpinner from "../../utils/loading";

import Header from "../Header";
import SearchForm from "./../Movies/SearchForm";
import MoviesCardList from "./../Movies/MoviesCardList";
import Footer from "./../Footer";

function SavedMovies(props) {
  const [noFound, setNoFound] = useState(false)
  const [checkShortFilms, setCheckShortFilms] = useState(false); //нажатый кечбокс короткометражек
  const [addCards, setAddCards] = useState([]); //все фильмы с апи
  const [showCards, setShowCards] = useState([]); //фильмы которые будем показывать
  const [shortShowCards, setShortShowCards] = useState([]); //короткометражки которые будем показывать

  useEffect(()=> { 
    setShowCards(addCards);
    setShortShowCards(addCards.filter(item => item.duration <= 40));
  },[addCards]);

  useEffect(()=> {
    if (showCards.length === 0) {
      setNoFound(true)
    } else {
      setNoFound(false)
    }
    },[showCards]);
  
  useEffect(()=> {
    setAddCards(props.dataFilms);
    // setShowCards(addCards);
    },[props.dataFilms]);

   function searchFilms(valueSearch) {
    setAddCards(props.dataFilms.filter(item => item.nameRU.toLowerCase().includes(valueSearch.toLowerCase())));
  }

    return (
      <>
        <Header />
        <main className="content">
        {props.isLoading && <LoadingSpinner />}
          <SearchForm 
            completeDataFilms={true}
            noFound={noFound}
            searchFilms={searchFilms}
            setCheckShortFilms={setCheckShortFilms}
            checkShortFilms={checkShortFilms}/>
          <MoviesCardList
            favoriteFilms={true}
            dataFilms={showCards}
            handleFilmLike={props.handleFilmDelete}
            shortDataFilms={shortShowCards}
            checkShortFilms={checkShortFilms}
            completeDataFilms={true}
            saveDataFilms={props.dataFilms}/>
        </main>
        <Footer />
      </>
    );
}

export default SavedMovies;

// {/* dataFilms={props.dataFilms} */}
// shortDataFilms={props.shortDataFilms}
// {/* saveDataFilms={props.saveDataFilms} */}