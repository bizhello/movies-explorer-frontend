import React from 'react';
import {NavLink} from "react-router-dom";
import { useState } from "react";
import { useInput } from "../utils/validation"
import LoadingSpinner from "./../utils/loading";

function Register(props) {
    const loginInput = useInput('', {isEmpty: true, isEmail: true});
    const passwordInput = useInput('', {isEmpty: true});
    const nameInput = useInput('', {isEmpty: true, minLength: 2, maxLength: 30});

    const [data, setData] = useState({
        email: '',
        password: '',
        name: '',
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((oldData) => ({
            ...oldData,
            [name]:value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handelRegister(data.email, data.password, data.name);
    }
    return(
        <>
            <form className="register" onSubmit={handleSubmit}>
                {props.isLoading && <LoadingSpinner />}
                <NavLink className="register__logo" to="/"></NavLink>
                <h2 className="register__title">Добро пожаловать!</h2>
                <label className="input-container register__label" onChange={handleChange}>
                    <p className="register__textLabel">Имя</p>
                    <input
                    className="register__name register__input"
                    id="register__name"
                    name="name"
                    type="text"
                    value={nameInput.value}
                    onChange={e => nameInput.onChange(e)}
                    onBlur={e => nameInput.onBlur(e)}
                    />
                </label>
                {(loginInput.isDirty && nameInput.isMinLengthError ) && <div style={{color:'red'}}>Минимальная длина 2 символа</div>}
                {(loginInput.isDirty && nameInput.isMaxLengthError ) && <div style={{color:'red'}}>Максимальная длина 30 символов</div>}
                <label className="input-container register__label" onChange={handleChange}>
                    <p className="register__textLabel">E-mail</p>
                    <input
                    className="register__email register__input"
                    id="register__email"
                    name="email"
                    type="email"
                    value={loginInput.value}
                    onChange={e => loginInput.onChange(e)}
                    onBlur={e => loginInput.onBlur(e)}
                    />
                </label>
                {(loginInput.isDirty && loginInput.isEmpty ) && <div style={{color:'red'}}>Email не может быть пустым</div>}
                {(loginInput.isDirty && loginInput.isEmailError ) && <div style={{color:'red'}}>Email указан некорректно</div>}
                <label className="input-container register__password" onChange={handleChange}>
                    <p className="register__textLabel">Пароль</p>
                    <input
                    className="register__password register__input"
                    id="register__password"
                    name="password"
                    type="password"
                    
                    value={passwordInput.value}
                    onChange={e => passwordInput.onChange(e)}
                    onBlur={e => passwordInput.onBlur(e)}
                    />
                </label>
                {(passwordInput.isDirty && passwordInput.isEmpty ) && <div style={{color:'red'}}>Пароль не может быть пустым</div>}
                <span className={props.fetchError ? "display-block error-text" : "display-none error-text"} id="popup-name-error">Что-то пошло не так...</span>
                <button className="register__button" disabled={!loginInput.inputValid || !passwordInput.inputValid || !nameInput.inputValid} type="submit">Зарегистрироваться</button>
                <div className='register__toback'>
                    <p className="register__question">Уже зарегистрированы?</p>
                    <NavLink className="register__toChangePage" to="/sign-in">Войти</NavLink>
                </div>
                
            </form>
        </>
    )
}

export default Register;