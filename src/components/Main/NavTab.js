import React from 'react';

function NavTab() {
    return(
        <section className="navTab">
            <h2 className="navTab__title">Технологии</h2>
            <div className="line"></div>
                <p className="navTab__main-text">7 технологий</p>
                <p className="navTab__text">На курсе веб-разработки мы освоили технологии, которые применили<br></br>в дипломном проекте.</p>
                <div className="navTab__row">
                    <p className="navTab__technology">HTML</p>
                    <p className="navTab__technology">CSS</p>
                    <p className="navTab__technology">JS</p>
                    <p className="navTab__technology">React</p>
                    <p className="navTab__technology">Git</p>
                    <p className="navTab__technology">Express.js</p>
                    <p className="navTab__technology">mongoDB</p>
                </div>
        </section>
    )
}

export default NavTab;
