import React from 'react';
import { NavLink } from "react-router-dom";
import { useState } from "react";

import LoadingSpinner from "./../utils/loading";

import { useInput } from "../utils/validation"

function Login(props) {

    const loginInput = useInput('', {isEmpty: true, isEmail: true});
    const passwordInput = useInput('', {isEmpty: true});

    const [data, setData] = useState({
        login__email: '',
        login__password: ''
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((oldData) => ({
            ...oldData,
            [name]:value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handelLogin(data.login__email, data.login__password);
    }

    return(
        <>
            <form className="login" onSubmit={handleSubmit}>
                <NavLink className="login__logo" to="/"></NavLink>
                <h2 className="register__title login__title">Рады видеть!</h2>
                <label className="input-container login__label" onChange={handleChange}>
                    <p className="register__textLabel login__textLabel">E-mail</p>
                    <input
                    className="register__input login__email"
                    id="login__email"
                    name="login__email"
                    type="email"
                    value={loginInput.value}
                    onChange={e => loginInput.onChange(e)}
                    onBlur={e => loginInput.onBlur(e)}
                    />
                </label>
                {(loginInput.isDirty && loginInput.isEmpty ) && <div style={{color:'red'}}>Email не может быть пустым</div>}
                {(loginInput.isDirty && loginInput.isEmailError ) && <div style={{color:'red'}}>Email указан некорректно</div>}
                {props.isLoading && <LoadingSpinner />}
                <label className="input-container login__password" onChange={handleChange}>
                    <p className="register__textLabel login__textLabel">Пароль</p>
                    <input
                    className="register__input login__password"
                    id="login__password"
                    name="login__password"
                    type="password"
                    value={passwordInput.value}
                    onChange={e => passwordInput.onChange(e)}
                    onBlur={e => passwordInput.onBlur(e)}
                    />
                </label>
                {(passwordInput.isDirty && passwordInput.isEmpty ) && <div style={{color:'red'}}>Пароль не может быть пустым</div>}
                <span className={props.fetchError ? "display-block error-text" : "display-none error-text"} id="popup-name-error">Что-то пошло не так...</span>
                <button className="login__button" disabled={!loginInput.inputValid || !passwordInput.inputValid} type="submit">Войти</button>
                <div className='login__toback'>
                    <p className="login__question">Ещё не зарегистрированы?</p>
                    <NavLink className="login__toChangePage" to="/sign-up">Регистрация</NavLink>
                </div>
            </form>
        </>
    )
}

export default Login;