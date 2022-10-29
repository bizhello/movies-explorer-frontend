import React from "react";
import {NavLink} from "react-router-dom";

function Error() {
    return(
        <>
            <section className="error">
                <h2 className="error__title">404</h2>
                <p className="error__text">Страница не найдена</p>
                <NavLink className="error__back" to="../">Назад</NavLink>
            </section>

        </>
    )
}

export default Error;
