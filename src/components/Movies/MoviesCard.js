import React from "react";
import { useEffect, useState } from "react";

function MoviesCard(props) {

    const isLiked = props.saveDataFilms.some(i => i.movieId === props.card.id)

    const moviesCardLikeActive = `moviesCard__like-active`;
    const moviesCardLike = `moviesCard__like`;
    const moviesCardDelete = 'moviesCard__delete';

    function counterTimeFilm(time) {
        const hour = Math.floor(time/60);
        const minut = time%60;
        
        return `${hour === 0 ? '' : `${hour}ч`} ${minut === 0 ? '' : `${minut}м`}`;
    }
//props.handleFilmLike
    function handleLikeClick() {
        props.handleFilmLike(props.card);
    }

    const timeFilm = counterTimeFilm(props.duration);

    return(
        <>
            <article className="moviesCard">
                 <div className="moviesCard__info">
                    <p className="moviesCard__title">{props.nameRU}</p>
                    <p className="moviesCard__time">{timeFilm}</p>
                    <button className={ props.favoriteFilms ? moviesCardDelete : isLiked ? moviesCardLikeActive : moviesCardLike}
                            type="button" onClick={handleLikeClick}></button>
                </div>
                <a className="moviesCard__link" href={props.trailerLink}>
                    <img className="moviesCard__photo" src={ props.favoriteFilms ? props.image : `https://api.nomoreparties.co${props.image}`} alt='карточка'/>
                </a>
            </article>
        </>
    )
}

export default MoviesCard;