import React from "react";
import Header from "./Header";

function Profile() {
    return(
        <>
            <Header />
            <main className="content profile__content">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <div className="profile__info">
                    <div className="profile__name">
                        <p className="profile__text">Имя</p>
                        <p className="profile__text">Андрей</p>
                    </div>
                    <div className="line profile__line"></div>
                    <div className="profile__email">
                        <p className="profile__text">E-mail</p>
                        <p className="profile__text">bizhello@mail.ru</p>
                    </div>
                </div>
                <button className="profile__edit">Редактировать</button>
                <button className="profile__logout">Выйти из аккаунта</button>
            </main>
        </>
    )
}

export default Profile;