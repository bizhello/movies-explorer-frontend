import React, { useEffect } from "react";
import {NavLink} from "react-router-dom";
import Header from "./Header";
import { CurrentUserContext } from "../utils/contexts/CurrentUserContext";
import { useState } from "react";
import { useInput } from "../utils/validation"
import LoadingSpinner from "../utils/loading";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const nameInput = useInput(currentUser.name, {isEmpty: true, minLength: 2, maxLength: 30});
    const loginInput = useInput(currentUser.email, {isEmpty: true, isEmail: true});

    const [edit, setEdit] = useState(false);
    const [fetchSuccess, setFetchSuccess] = useState(false);
    
    const [data, setData] = useState({
        name: currentUser.name,
        email: currentUser.email,
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((oldData) => ({
            ...oldData,
            [name]:value
        }))
    }

    useEffect(()=> {
        setFetchSuccess(true)
        if(props.fetchError) {
            setEdit(true)
        } else {
            setEdit(false)
        }
    },[props.isLoading])


    const handleSubmit = (e) => {
        e.preventDefault();
        setFetchSuccess(false);
        props.onUpdateUser(data.email, data.name);
    }
    
    function clickEdit() {
        setEdit(true);
        setFetchSuccess(false)
    }

    return(
        <>
            <Header />
            <form className="content profile__content" onSubmit={handleSubmit}>
                {props.isLoading && <LoadingSpinner />}
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                <div className="profile__info">
                    <label className="profile__name" onChange={handleChange}>
                        <p className="profile__text">Имя</p>
                        <input
                            className="profile__text"
                            name="name"
                            type="text"
                            value={nameInput.value}
                            onChange={e => nameInput.onChange(e)}
                            onBlur={e => nameInput.onBlur(e)}
                            disabled={!edit&&true}
                        />
                    </label>
                    {(loginInput.isDirty && nameInput.isMinLengthError ) && <div style={{color:'red'}}>Минимальная длина 2 символа</div>}
                    {(loginInput.isDirty && nameInput.isMaxLengthError ) && <div style={{color:'red'}}>Максимальная длина 30 символов</div>}
                    <div className="line profile__line"></div>
                    <label className="profile__email" onChange={handleChange}>
                        <p className="profile__text">E-mail</p>
                        <input
                            className="profile__text"
                            name="email"
                            type="email"
                            value={loginInput.value}
                            onChange={e => loginInput.onChange(e)}
                            onBlur={e => loginInput.onBlur(e)}
                            disabled={!edit&&true}
                        />
                    </label>
                    {(loginInput.isDirty && loginInput.isEmpty ) && <div style={{color:'red'}}>Email не может быть пустым</div>}
                    {(loginInput.isDirty && loginInput.isEmailError ) && <div style={{color:'red'}}>Email указан некорректно</div>}
                </div>
                <span className={fetchSuccess ? "display-block error-text" : "display-none error-text"} id="popup-name-error">{props.messageUserEdit}</span>
                <button className={edit?"profile__edit profile__edit-save":"display-none"} type="submit">Сохранить</button>
                <button className={edit?"display-none":"profile__edit"} disabled={!loginInput.inputValid || !nameInput.inputValid} onClick={clickEdit} type="button">Редактировать</button>
                <NavLink className={edit?"display-none":"profile__logout"} to='/sign-in' onClick={props.logout}>Выйти из аккаунта</NavLink>
            </form>
        </>
    )
}

export default Profile;
