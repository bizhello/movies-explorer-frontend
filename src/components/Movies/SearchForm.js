import React from "react";

import FilterCheckbox from "./FilterCheckbox";
import { useInput } from "./../../utils/validation"


function SearchForm(props) {

    const search = useInput('', {isEmpty: true});

    const handleClick = (e) => {
        e.preventDefault();
        props.searchFilms(search.value);
    }
    
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
                            value={search.value}
                            onChange={e => search.onChange(e)}
                            onBlur={e => search.onBlur(e)}
                            required
                            />
                        <button disabled={!search.inputValid} onClick={handleClick} className="searchForm__button" type="submit">Поиск</button>
                    </label>
                    {props.completeDataFilms && props.noFound && <div style={{color:'red'}}>Ничего не найдено</div>}
                    {(search.isDirty && search.isEmpty) && <div style={{color:'red'}}>Нужно ввести ключевое слово</div>}
                </form>
                <FilterCheckbox setCheckShortFilms={props.setCheckShortFilms} checkShortFilms={props.checkShortFilms}/>
                <div className="line searchForm__line"></div>
            </div>

        </>
    )
}

export default SearchForm;