import React from 'react';
// // import { NavLink } from "react-router-dom";

import Header from "../Header";
import SearchForm from "./../Movies/SearchForm";
import MoviesCardList from "./../Movies/MoviesCardList";
import Footer from "./../Footer";
// import Preloader from './Preloader';

function Movies() {

    return (
      <>
        <Header />
        <main className="content">
          <SearchForm />
          <MoviesCardList favoriteFilms={true} />
          {/* <Preloader /> */}
        </main>
        <Footer />
      </>
    );
}

export default Movies;
