import React from 'react';

function Portfolio() {
    return(
        <section className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <div className="portfolio__item">
                <p className="portfolio__name">Статичный сайт</p>
                <a className="portfolio__link" href="https://bizhello.github.io/how-to-learn/">.</a>
            </div>
            <div className="line"></div>
            <div className="portfolio__item">
                <p className="portfolio__name">Адаптивный сайт</p>
                <a className="portfolio__link" href="https://bizhello.github.io/russian-travel/">.</a>
            </div>
            <div className="line"></div>
            <div className="portfolio__item">
                <p className="portfolio__name">Одностраничное приложение</p>
                <a className="portfolio__link" href="https://bizhello.github.io/mesto-react/">.</a>
            </div>
        </section>
    )
}

export default Portfolio;
