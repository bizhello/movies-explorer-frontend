import React from "react";

function Preloader(props) {
    return(
        <div className="preloader">
            <button className="preloader__button" onClick={props.click} type="button">Ещё</button>
        </div>
    )
}

export default Preloader;
