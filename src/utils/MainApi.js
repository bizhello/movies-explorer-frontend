class MainApi {
    constructor({url, credentials, headers}) {
        this._url = url;
        this._credentials = credentials;
        this._headers = headers;
    }

    _getResponseData(res)  {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            credentials: this._credentials,
            headers: this._headers,
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }
    editUserInfo(email, name) {
        return  fetch(`${this._url}users/me`, {
            method: 'PATCH',
            credentials: this._credentials,
            headers: this._headers,
            body: JSON.stringify({
                email: email,
                name: name,
            })
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }
    getInitialMovies() {
        return fetch(`${this._url}movies`, {
            method: 'GET',
            credentials: this._credentials,
            headers: this._headers
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }

    createMovies(country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId) {
        return fetch(`${this._url}movies`, {
            method: 'POST',
            credentials: this._credentials,
            headers: this._headers,
            body: JSON.stringify({
                country: `${country}`,
                director: `${director}`,
                duration: `${duration}`,
                year: `${year}`,
                description: `${description}`,
                image: `${image}`,
                trailerLink: `${trailerLink}`,
                thumbnail: `${thumbnail}`,
                nameRU: `${nameRU}`,
                nameEN: `${nameEN}`,
                movieId: `${movieId}`,
            })
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }
    deleteCard(movieId) {
        return fetch(`${this._url}movies/${movieId}`, {
            method: 'DELETE',
            credentials: this._credentials,
            headers: this._headers
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }
    // changePhotoProfile(avatar) {
    //     return fetch(`${this._url}users/me/avatar`, {
    //         method: 'PATCH',
    //         headers: this._headers,body: JSON.stringify({
    //             avatar: `${avatar}`
    //         })
    //     })
    //         .then(res => {
    //             return this._getResponseData(res);
    //         });
    // }
    // changeLikeCardStatus(cardId, isLiked) {
    //     return fetch(`${this._url}cards/${cardId}/likes`, {
    //             method: isLiked ? 'PUT' : 'DELETE',
    //         headers: this._headers
    //     })
    //         .then(res => {
    //             return this._getResponseData(res);
    //         });
    // }
}

export const mainApi = new MainApi({
    url: 'https://api.bizhello.nomoredomains.icu/',
    credentials: 'include',
    headers: {
        "content-type": "application/json"
    },
})