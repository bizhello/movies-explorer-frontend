import React from "react";

import FilterCheckbox from "./FilterCheckbox";

function SearchForm() {

    return(
        <>
            <div className="searchForm">
                <form className="searchForm__form">
                    <label className="searchForm__input-container">
                        <input
                            className="searchForm__name searchForm__films"
                            id="searchForm__films"
                            name="searchForm__films"
                            type="text"
                            placeholder="Фильм"
                            required/>
                        <button className="searchForm__button">Поиск</button>
                    </label>
                </form>
                <FilterCheckbox />
                <div className="line searchForm__line"></div>
            </div>

        </>
    )
}

export default SearchForm;