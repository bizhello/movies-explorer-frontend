import React from 'react';
import { NavLink } from "react-router-dom";

import Promo from "./Promo";
import Techs from "./Techs";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Footer from "./../Footer";
import headerСover from "../../images/headerСover.png";


function Main(props) {

    return (
      <>
        <header className='main-header'>
            <section className='main-header__top'>
                <NavLink className="main-header__logo logo" to="/"></NavLink>
                <div className="main-header__nav">
                    <NavLink className="main-header__register" to="/sign-up">Регистрация</NavLink>
                    <NavLink className="main-header__login" to="/sign-in">Войти</NavLink>
                </div>
            </section>
            <section className='main-header__cover'>
                <h1 className='main-header__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <img className='main-header__img' src={headerСover} alt="узор"/>
            </section>
        </header>
        <main className="content">
            <Promo />
            <Techs/>
            <AboutMe />
            <Portfolio />
        </main>
        <Footer />
      </>
    );
}

export default Main;
