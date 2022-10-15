// import {useState, useEffect, } from "react";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Navigate, useNavigate } from 'react-router-dom';

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile";
import Register from "../Register";
import Login from "../Login";
import Error from "../Error";
// import Footer from '../Footer'


// import {getContentAuth, loginAuth, registerAuth} from "../../utils/Auth"

function App() {

  // const [currentUser, setCurrentUser] = useState({});
  // const [loggedIn, setLoggedIn] = useState(false);
  // const navigate = useNavigate();

  // const [data, setData] = useState({
  //   email: '',
  //   id: ''
  // });

  // useEffect(()=> {
  //   if(loggedIn) {
  //       navigate('/')
  //   }
  //   else {
  //       navigate('/sign-in')
  //   }
  // },[loggedIn])

  // const tokenCheck = () => {
  //   let jwt = localStorage.getItem('jwt')
  //   if(jwt) {
  //       getContentAuth(jwt)
  //           .then((res) => {
  //               setData({
  //                   email: res.data.email,
  //                   id: res.data._id
  //               });
  //               navigate('../', setLoggedIn(true));
  //           })
  //           .catch((err) => console.log(err));
  //   }
  // }

  return (
    <div className="page">
      <div className="container">
        <Routes>
              <Route
                path="/"
                element={<Main/>} />
                <Route
                path="/movies"
                element={<Movies/>} />  
                <Route
                path="/saved-movies"
                element={<SavedMovies/>} />
                <Route
                path="/profile"
                element={<Profile/>} />
                <Route
                path="/sign-up"
                element={<Register/>} />
                <Route
                path="/sign-in"
                element={<Login/>} />
                <Route
                path="/error"
                element={<Error/>} />
              {/* <Route
                path="*"
                element={loggedIn ? <Navigate to='/'/> : <Navigate to='/sign-in'/>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;


// scp -r movies-explorer-api/* bizhello@158.160.3.8:/home/bizhello/movies-explorer-api
