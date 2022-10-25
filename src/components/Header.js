import React from 'react';
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header(props) {

    const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsBurgerPopupOpen(true);
    }
    const closeAllPopups = () => {
        setIsBurgerPopupOpen(false);
    }

    return (
        <header className="header">
            <NavLink className="header__logo main-header__logo logo" to="/"></NavLink>
            <div className="header__films">
                <NavLink className={({ isActive }) => (isActive ? "header__text header__all-films active" : "header__text header__all-films")} to="/movies">Фильмы</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "header__text header__save-films active" : "header__text header__save-films")} to="/saved-movies">Сохранённые фильмы</NavLink>
            </div>
            <div className="header__account">
                <p className="header__text header__text_acc">Аккаунт</p>
                <div className="header__user">
                    <NavLink className="header__user_logo" to="/profile"></NavLink>
                    <button className="header__burger" onClick={handleBurgerClick}></button>
                </div>
            </div>
            <div className={isBurgerPopupOpen ? "header__popup display-flex" : "header__popup display-none"}>
                <div className="popup__container popup__container-left"></div>
                <div className="popup__container popup__container-right">
                    <div className="popup__close" onClick={closeAllPopups}></div>
                    <div className="popup__navigation">
                        <NavLink className="popup__link popup__link_main" onClick={closeAllPopups} to="/">Главная</NavLink>
                        <NavLink className="popup__link popup__link_movies" onClick={closeAllPopups} to="/movies">Фильмы</NavLink>
                        <NavLink className="popup__link popup__link_saved-movies" onClick={closeAllPopups} to="/saved-movies">Сохранённые фильмы</NavLink>
                    </div>
                    <div className="header__account header__account_popup">
                        <p className="header__text header__text_acc header__text_popup">Аккаунт</p>
                        <div className="header__user header__user_popup">
                            <NavLink className="header__user_logo header__user_logo_popup" onClick={closeAllPopups} to="/profile"></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;