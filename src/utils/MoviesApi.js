class MoviesApi {
    constructor({url, credentials, headers}) {
        this._url = url;
        this._headers = headers;
    }

    _getResponseData(res)  {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
    getFilms() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: this._headers,
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }
}    

export const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        "content-type": "application/json"
    },
})
