import React from "react";

function FilterCheckbox(props) {

    function clikCheckBox() {
        props.setCheckShortFilms(!props.checkShortFilms);
    }

    return (
        <>
            <div className="filterCheckbox">
                <label className="filterCheckbox__input-container">
                    <input
                        className="filterCheckbox__input"
                        id="filterCheckbox__films"
                        name="filterCheckbox__films"
                        type="checkbox"
                        onClick={clikCheckBox}
                        defaultChecked={props.checkShortFilms}
                    />
                    <div className="filterCheckbox__div"></div>
                </label>
                <p className="filterCheckbox__text">Короткометражки</p>
            </div>
            
        </>
    )
}

export default FilterCheckbox;