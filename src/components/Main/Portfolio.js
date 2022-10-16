import React from 'react';

function Portfolio() {
    return(
        <section className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <ul className="portfolio__ul">
                <li className="portfolio__item">
                    <a className="portfolio__name" target="_blank"  rel="noreferrer" href="https://bizhello.github.io/how-to-learn/">Статичный сайт</a>
                    <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://bizhello.github.io/how-to-learn/">.</a>
                </li>
                <div className="line"></div>
                <li className="portfolio__item">
                    <a className="portfolio__name" target="_blank" rel="noreferrer" href="https://bizhello.github.io/russian-travel/">Адаптивный сайт</a>
                    <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://bizhello.github.io/russian-travel/">.</a>
                </li>
                <div className="line"></div>
                <li className="portfolio__item">
                    <a className="portfolio__name" target="_blank" rel="noreferrer" href="https://bizhello.github.io/mesto-react/">Одностраничное приложение</a>
                    <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://bizhello.github.io/mesto-react/">.</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
