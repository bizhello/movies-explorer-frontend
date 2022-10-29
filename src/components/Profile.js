import React, { useEffect } from "react";
import {NavLink} from "react-router-dom";
import Header from "./Header";
import { CurrentUserContext } from "../utils/contexts/CurrentUserContext";
import { useState } from "react";
import { useInput } from "../utils/validation"
import LoadingSpinner from "../utils/loading";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [edit, setEdit] = useState(false);
    const [fetchSuccess, setFetchSuccess] = useState(false);

    const nameInput = useInput(currentUser.name, {isEmpty: true, minLength: 2, maxLength: 30});
    const emailInput = useInput(currentUser.email, {isEmpty: true, isEmail: true});

    useEffect(()=> {
        setButtonDisabled(nameInput.value === currentUser.name && emailInput.value === currentUser.email);
    },[nameInput.value, emailInput.value, currentUser.name, currentUser.email])

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
        props.onUpdateUser(nameInput.value, emailInput.value);
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
                    <label className="profile__name">
                        <p className="profile__text">Имя</p>
                        <input
                            className="profile__text"
                            name="name"
                            type="text"
                            value={nameInput.value || ''}
                            onChange={e => nameInput.onChange(e)}
                            onBlur={e => nameInput.onBlur(e)}
                            disabled={!edit&&true}
                        />
                    </label>
                    {(emailInput.isDirty && nameInput.isMinLengthError ) && <div style={{color:'red'}}>Минимальная длина 2 символа</div>}
                    {(emailInput.isDirty && nameInput.isMaxLengthError ) && <div style={{color:'red'}}>Максимальная длина 30 символов</div>}
                    <div className="line profile__line"></div>
                    <label className="profile__email">
                        <p className="profile__text">E-mail</p>
                        <input
                            className="profile__text"
                            name="email"
                            type="email"
                            value={emailInput.value || ''}
                            onChange={e => emailInput.onChange(e)}
                            onBlur={e => emailInput.onBlur(e)}
                            disabled={!edit&&true}
                        />
                    </label>
                    {(emailInput.isDirty && emailInput.isEmpty ) && <div style={{color:'red'}}>Email не может быть пустым</div>}
                    {(emailInput.isDirty && emailInput.isEmailError ) && <div style={{color:'red'}}>Email указан некорректно</div>}
                </div>
                <span className={fetchSuccess ? "display-block error-text" : "display-none error-text"} id="popup-name-error">{props.messageUserEdit}</span>
                <button className={edit?"profile__edit profile__edit-save":"display-none"} disabled={buttonDisabled} type="submit">Сохранить</button>
                <button className={edit?"display-none":"profile__edit"} disabled={!emailInput.inputValid || !nameInput.inputValid} onClick={clickEdit} type="button">Редактировать</button>
                <NavLink className={edit?"display-none":"profile__logout"} to='/sign-in' onClick={props.logout}>Выйти из аккаунта</NavLink>
            </form>
        </>
    )
}

export default Profile;
