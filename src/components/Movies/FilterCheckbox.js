import React from "react";

function FilterCheckbox() {

    return (
        <>
            <div className="filterCheckbox">
                <label className="filterCheckbox__input-container">
                    <input
                        className="filterCheckbox__input"
                        id="filterCheckbox__films"
                        name="filterCheckbox__films"
                        type="checkbox"
                    />
                    <div className="filterCheckbox__div"></div>
                </label>
                <p className="filterCheckbox__text">Короткометражки</p>
            </div>
            
        </>
    )
}

export default FilterCheckbox;