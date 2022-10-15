import React from 'react';
// import { NavLink } from "react-router-dom";

import Header from "../Header";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Footer from "./../Footer";
import Preloader from './Preloader';

function Movies() {

    return (
      <>
        <Header />
        <main className="content">
          <SearchForm />
          <MoviesCardList />
          <Preloader />
        </main>
        <Footer />
      </>
    );
}

export default Movies;
