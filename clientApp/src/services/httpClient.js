export class HttpClient {
    _endpoint;
    _header;

    constructor(endpoint) {
        this._endpoint = endpoint;
        //this._header = {'Content-Type': 'application/json'};
    }

    setHeader(header) {
        this._header = header;
    }

    async get(path = '') {
        const result = await fetch(this._endpoint + '/' + path, {
            method: "GET", headers: this._header 
        });

        return result.json();
    }

    async post(path = '', body) {
        const result = await fetch(this._endpoint + '/' + path, {
            method: "POST", headers: this._header , body: body
        });

        return result.json();
    }
}