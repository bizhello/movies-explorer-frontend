import React from 'react';

function NavTab() {
    return(
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="line techs__line"></div>
                <p className="techs__main-text">7 технологий</p>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили<br></br>в дипломном проекте.</p>
                <div className="techs__row">
                    <p className="techs__technology">HTML</p>
                    <p className="techs__technology">CSS</p>
                    <p className="techs__technology">JS</p>
                    <p className="techs__technology">React</p>
                    <p className="techs__technology">Git</p>
                    <p className="techs__technology">Express.js</p>
                    <p className="techs__technology">mongoDB</p>
                </div>
        </section>
    )
}

export default NavTab;
