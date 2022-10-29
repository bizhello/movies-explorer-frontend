import React from 'react';
import { useEffect, useState } from "react";
import { Route, Routes, Navigate ,useNavigate } from 'react-router-dom';

import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import { CurrentUserContext } from '../../utils/contexts/CurrentUserContext';
import { getContentAuth, loginAuth, registerAuth, logout } from "../../utils/Auth"

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile";
import Register from "../Register";
import Login from "../Login";
import Error from "../Error";

function App() {

  const [messageUserEdit, setMessageUserEdit] = useState('');
  const [shortDataFilms, setShortDataFilms] = useState([]); //короткометражки со стороннего апи
  const [shortSaveDataFilms, setShortSaveDataFilms] = useState([]); //короткометражки с нашего апи
  const [dataFilms, setDataFilms] = useState([]); //фильмы со стороннего апи
  const [saveDataFilms, setSaveDataFilms] = useState([]); //фильмы с нашего апи
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(()=> {
    if(loggedIn) {
      pullAllMovies();
      updateSaveDataFilms();
      setFetchError(false);
    }
  },[loggedIn])
  
  useEffect(()=> {
    tokenCheck();
  },[]);

  useEffect(()=>{
    const apiGetUserInfo = mainApi.getUserInfo();
    if(loggedIn) {
      apiGetUserInfo
        .then((res) => {
          setCurrentUser({
            email: res.email,
            name: res.name,
            _id: res._id,
          });
        })
        .catch(err => {
          console.log(err);
        });
      }
    },[loggedIn]);

  const tokenCheck = () => {
    getContentAuth()
      .then((res) => {
        if(res) {
          setLoggedIn(true);
        } else {
          navigate('../');
        }
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const handelLogin = (email, password) => {
    setIsLoading(true);
    loginAuth(email, password)
      .then((res) => {
          if(res) {
            navigate('../movies', setLoggedIn(true), setIsLoading(false));
          } else {
            setIsLoading(false);
          }
      })
      .catch(err => {
        setIsLoading(false);
        setFetchError(true);
        console.log(err);
      });
  }

  const handelRegister = (email, password, name) => {
    setIsLoading(true);
    registerAuth(email, password, name)
      .then((res) => {
        if(res) {
          handelLogin(email,password);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch(err => {
        setIsLoading(false);
        setFetchError(true)
        console.log(err);
      });
  }

  const handelLogout = () => {
    logout()
      .then((res) => { 
        if (res) {
          localStorage.removeItem('params');
          navigate('../', setLoggedIn(false));
        }
    })
      .catch(err => {
        setFetchError(true);
        console.log(err);
      });
  }

  function handleUpdateUser(name, email) {
    setIsLoading(true);
    mainApi.editUserInfo(email, name)
    .then((res)=> {
      setMessageUserEdit('Данные успешно изменены. ')
      setIsLoading(false);
      setFetchError(false);
      setCurrentUser({
        email: res.email,
        name: res.name,
        _id: currentUser._id,
      })
    })
    .catch(err => {
      setMessageUserEdit('При обновлении профиля произошла ошибка.');
      setFetchError(true);
      setIsLoading(false);
      console.log(err);
    });
  }
  
  function createShortFilms(films) {
    return films.filter(item => item.duration <= 40)
  }

  function pullAllMovies() {
    moviesApi.getFilms()
      .then((res) => {
        setDataFilms(res);
        setShortDataFilms(createShortFilms(res))
      })
      .catch(err => {
        console.log(err);
      });
  }

  function updateSaveDataFilms() {
    mainApi.getInitialMovies()
      .then((res) => {
        setSaveDataFilms(res);
        setShortSaveDataFilms(createShortFilms(res));
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleFilmDelete(film) {
    setIsLoading(true);
    mainApi.deleteCard(film._id)
      .then((res)=>{
        if(res) {
          updateSaveDataFilms();
          setIsLoading(false);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }

  function handleLikeDelete(film) {
    setIsLoading(true);
    mainApi.deleteCard(film[0]._id)
      .then((res)=>{
        if(res) {
          updateSaveDataFilms();
          setIsLoading(false);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }

  function handleFilmLike(film) {
    setIsLoading(true);
    const isLiked = saveDataFilms.some(i => i.movieId === film.id)
    if (isLiked) {
      handleLikeDelete(saveDataFilms.filter(item => item.movieId === film.id));
      setSaveDataFilms(saveDataFilms.filter(item => item.movieId !== film.id));
    } else {
      setIsLoading(true);
      mainApi.createMovies(film.country, film.director, film.duration, film.year, film.description, `https://api.nomoreparties.co${film.image.url}`, film.trailerLink, film.nameRU, film.nameEN, `https://api.nomoreparties.co${film.image.url}`, film.id)
        .then((res) => {
          if(res) {
            updateSaveDataFilms();
            setIsLoading(false);
          }
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err);
        })
      }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Main loggedIn={loggedIn}/>} />
          <Route
            path="/movies"
            element={
              loggedIn
              ? 
              <Movies dataFilms={dataFilms} handleFilmLike={handleFilmLike} isLoading={isLoading} saveDataFilms={saveDataFilms} shortDataFilms={shortDataFilms} loggedIn={loggedIn}/>
              :
              <Navigate to='/'/> }/>
          <Route
            path="/saved-movies"
            element={
              loggedIn
              ?
              <SavedMovies dataFilms={saveDataFilms} handleFilmDelete={handleFilmDelete} isLoading={isLoading} shortDataFilms={shortSaveDataFilms} loggedIn={loggedIn}/>
              :
              <Navigate to='/'/>} />
          <Route
            path="/profile"
            element={
              loggedIn
              ?
              <Profile onUpdateUser={handleUpdateUser} fetchError={fetchError} logout={handelLogout} isLoading={isLoading} loggedIn={loggedIn} messageUserEdit={messageUserEdit}/>
              :
              <Navigate to='/'/>} />
          <Route
            path="/sign-up"
            element={ 
              loggedIn
              ?
              <Navigate to='/movies'/>
              :
              <Register handelRegister={handelRegister} fetchError={fetchError} isLoading={isLoading}/>} /> 
          <Route
            path="/sign-in"
            element={ 
              loggedIn
              ?
              <Navigate to='/movies'/>
              :
              <Login handelLogin={handelLogin} fetchError={fetchError} isLoading={isLoading}/>} /> 
          <Route
            path="/error"
            element={<Error/>} />
          <Route
            path="*"
            element={<Navigate to='/error'/>} />
        </Routes>
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;


// scp -r movies-explorer-api/* bizhello@158.160.3.8:/home/bizhello/movies-explorer-api
