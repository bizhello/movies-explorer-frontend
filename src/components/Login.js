import React from 'react';
import {NavLink} from "react-router-dom";

// const [data, setData] = useState({
//     login__email: '',
//     login__password: ''
// })
// const handleChange = (e) => {
//     const {name, value} = e.target;
//     setData((oldData) => ({
//         ...oldData,
//         [name]:value
//     }))
// }
// const handleSubmit = (e) => {
//     e.preventDefault()
//     props.handelLogin(data.login__email, data.login__password);
// }

function Login(props) {
    return(
        <>
            <form className="login">
                <NavLink className="login__logo" to="/"></NavLink>
                <h2 className="register__title login__title">Рады видеть!</h2>
                <label className="input-container login__label" onChange="#">
                    <p className="register__textLabel login__textLabel">E-mail</p>
                    <input
                    className="register__input login__email"
                    id="login__email"
                    name="login__email"
                    type="email"
                    required
                    />
                </label>
                <label className="input-container login__password" onChange="#">
                    <p className="register__textLabel login__textLabel">Пароль</p>
                    <input
                    className="register__input login__password"
                    id="login__password"
                    name="login__password"
                    type="password"
                    required
                    />
                </label>
                <span className="error display-none" id="popup-name-error">Что-то пошло не так...</span>
                <button className="login__button" type="submit">Войти</button>
                <div className='login__toback'>
                    <p className="login__question">Ещё не зарегистрированы?</p>
                    <NavLink className="login__toChangePage" to="/sign-up">Регистрация</NavLink>
                </div>
            </form>
        </>
    )
}

export default Login;