import React from "react";

import MoviesCard from "./MoviesCard";


function MoviesCardList(props) {
    
    return(
        <>
            <section className="moviesCardList">
            {!props.checkShortFilms && props.completeDataFilms && props.dataFilms.map((card) => (
                <MoviesCard
                    card={card}
                    nameRU={card.nameRU}
                    duration={card.duration}
                    trailerLink={card.trailerLink}
                    image={props.favoriteFilms ? card.image : card.image.url}
                    key={props.favoriteFilms ? card._id : card.id}
                    handleFilmLike={props.handleFilmLike}
                    saveDataFilms={props.saveDataFilms}
                    favoriteFilms={props.favoriteFilms}
                    
                />))}
                {props.checkShortFilms && props.completeDataFilms && props.shortDataFilms.map((card) => (
                <MoviesCard
                    card={card}
                    nameRU={card.nameRU}
                    duration={card.duration}
                    trailerLink={card.trailerLink}
                    image={props.favoriteFilms ? card.image : card.image.url}
                    key={props.favoriteFilms ? card._id : card.id}
                    handleFilmLike={props.handleFilmLike}
                    saveDataFilms={props.saveDataFilms}
                    favoriteFilms={props.favoriteFilms}
                    
                />))}
            </section>
        </>
    )
}
export default MoviesCardList;
