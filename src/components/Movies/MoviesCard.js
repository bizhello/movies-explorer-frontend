/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function MoviesCard(props) {

    // const isLiked = props.likes.some(i => i._id === currentUser._id);
    const isLiked = true;
    const moviesCardLikeActive = `moviesCard__like-active`;
    const moviesCardLike = `moviesCard__like`;
    const moviesCardDelete = 'moviesCard__delete';

    return(
        <>
            <article className="moviesCard">
                 <div className="moviesCard__info">
                    <p className="moviesCard__title">33 слова о дизайне</p>
                    <p className="moviesCard__time">1ч 42м</p>
                    <button className={ props.favoriteFilms ? moviesCardDelete : isLiked ? moviesCardLikeActive : moviesCardLike}
                            type="button"></button>
                                    
                </div>
                <img className="moviesCard__photo" src="https://klike.net/uploads/posts/2019-07/medium/1562069992_2.jpg" alt="photo" />
            </article>
        </>
    )
}

export default MoviesCard;