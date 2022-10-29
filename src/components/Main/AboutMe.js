import React from 'react';

function AboutMe() {
    return(
        <section className="aboutMe">
            <h2 className="aboutMe__title">Студент</h2>
            <div className="line aboutMe__line"></div>
            <div className="aboutMe__row">
                <div className="aboutMe__column">
                    <div className="aboutMe__name">Андрей</div>
                    <div className="aboutMe__old">Фронтенд-разработчик, 24 года</div>
                    <div className="aboutMe__info">Я живу в Таганроге, закончил физический
                     факультет Южного федерального университета. Я люблю слушать
                      музыку, а ещё увлекаюсь бегом и йогой.
Недавно начал кодить. С 2020 года работал в компании АО «ТАГМЕТ». 
После того, как прошёл курс по веб-разработке ушёл с постоянной работы.</div>
                    <a className="aboutMe__gh" href="https://github.com/bizhello">Github</a>
                </div>
                <div className="aboutMe__photo"></div>
            </div>
        </section>
    )
}

export default AboutMe;
