import React from 'react';
import { useEffect, useState } from "react";
import LoadingSpinner from "../../utils/loading";

import Header from "../Header";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Footer from "./../Footer";
import Preloader from './Preloader';

function Movies(props) {

  // const [paramsSearchUser, setParamsSearchUser] = useState({
  //   textValue: '',
  //   checkShortFilms: false,
  //   showCard: []
  // });

  const [noFound, setNoFound] = useState(false)
  const [checkShortFilms, setCheckShortFilms] = useState(false); //нажатый кечбокс короткометражек
  const [completeDataFilms, setCompleteDataFilms] = useState(false); //нажали на поиск
  const [addCards, setAddCards] = useState([]); //все фильмы с апи
  const [showCards, setShowCards] = useState([]); //фильмы которые будем показывать
  const [shortShowCards, setShortShowCards] = useState([]); //короткометражки которые будем показывать
  const [counter, setCounter] = useState(0); //сколько фильмов 
  const [counterClick, setCounterClick] = useState(0); //сколько кликнули
  const [maxCounterClick, setMaxCounterClick] = useState(0); // макс число кликов

  // useEffect(()=>{
  //     const user = JSON.parse(window.localStorage.getItem('paramsSearchUser'));
  //     if (user !== null) setParamsSearchUser(user);
  // },[])

  useEffect(()=> { 
    setMaxCounterClick(Math.floor(addCards.length/7)); 
    setShowCards(addCards.slice(0, counter));
    setShortShowCards(addCards.filter(item => item.duration <= 40));
  },[addCards]);

  useEffect(()=> {
    if (showCards.length === 0) {
      setNoFound(true)
    } else {
      setNoFound(false)
      // setParamsSearchUser({
      //   textValue: paramsSearchUser.textValue,
      //   checkShortFilms: checkShortFilms,
      //   showCard: showCards
      // })
      }
    },[showCards]);

    // useEffect(()=>{
    //   setParamsSearchUser({
    //     textValue: paramsSearchUser.textValue,
    //     checkShortFilms: checkShortFilms,
    //     showCard: showCards
    //   })
    //   window.localStorage.setItem('paramsSearchUser', JSON.stringify(paramsSearchUser));
    // },[completeDataFilms])

  useEffect(()=> { //начальные данные
    setCounter(0);
    setCounterClick(-1);
    setAddCards(props.dataFilms);
    },[props.dataFilms]);

  function searchFilms(valueSearch) {
    setCounter(7);
    setCounterClick(1);
    setAddCards(props.dataFilms.filter(item => item.nameRU.toLowerCase().includes(valueSearch.toLowerCase())));
    setCompleteDataFilms(true);
    // setParamsSearchUser({textValue: valueSearch})
  }
  function addSevenCards() {
    setShowCards(addCards.slice(0, counter+7));
    setCounter(counter+7);
    setCounterClick(counterClick+1);
  }

    return (
      <>
        <Header />
        <main className="content">
          {props.isLoading && <LoadingSpinner />}
          <SearchForm completeDataFilms={completeDataFilms} noFound={noFound} searchFilms={searchFilms} setCheckShortFilms={setCheckShortFilms} checkShortFilms={checkShortFilms}/>
          <MoviesCardList favoriteFilms={false} dataFilms={showCards} handleFilmLike={props.handleFilmLike} saveDataFilms={props.saveDataFilms} shortDataFilms={shortShowCards} checkShortFilms={checkShortFilms} completeDataFilms={completeDataFilms}/>
          {!checkShortFilms && completeDataFilms && (counterClick < maxCounterClick) && <Preloader click={addSevenCards}/>}
        </main>
        <Footer />
      </>
    );
}

export default Movies;
