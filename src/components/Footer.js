import React from 'react';

function Footer() {
    return(
        <section className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="line footer__line"></div>
            <div className="footer__row">
                <p className="footer__yers">© 2022</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/bizhello">Github</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;
