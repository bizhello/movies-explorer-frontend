import React from "react";

import MoviesCard from "./MoviesCard";

function MoviesCardList(props) {

    return(
        <>
            <section className="moviesCardList">
                  <MoviesCard favoriteFilms={props.favoriteFilms} />
                  <MoviesCard favoriteFilms={props.favoriteFilms}/>
                  <MoviesCard favoriteFilms={props.favoriteFilms}/>
                  <MoviesCard favoriteFilms={props.favoriteFilms}/>
                  <MoviesCard favoriteFilms={props.favoriteFilms}/>
                  <MoviesCard favoriteFilms={props.favoriteFilms}/>
                  <MoviesCard favoriteFilms={props.favoriteFilms}/>
            </section>
        </>
    )
}
export default MoviesCardList;
