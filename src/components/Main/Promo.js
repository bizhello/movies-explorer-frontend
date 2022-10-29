import React from 'react';

function Promo() {
    return(
        <section className="promo">
            <h2 className="promo__title">О проекте</h2>
            <div className="line promo__line"></div>
            <div className="promo__row">
                <div className="promo__column">
                    <p className="promo__title-text">Дипломный проект включал 5 этапов</p>
                    <p className="promo__text">Составление плана, работу над бэкендом, вёрстку,
                       добавление функциональности и финальные доработки.</p>
                </div>
                <div className="promo__column">
                    <p className="promo__title-text">На выполнение диплома ушло 5 недель</p> 
                    <p className="promo__text">У каждого этапа был мягкий и жёсткий дедлайн,
                       которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="promo__time-interval">
                <div className="promo__row promo__row-interval">
                    <div className="promo__column promo__column_back">
                        <p className="promo__time promo__time_back">1 неделя</p>
                        <p className="promo__development promo__development_back">Back-end</p>
                    </div>
                    <div className="promo__column promo__column_front">
                        <p className="promo__time promo__time_front">4 недели</p>
                        <p className="promo__development promo__development_front">Front-end</p>
                    </div>   
                </div>    
            </div>
        </section>
    )
}

export default Promo;
