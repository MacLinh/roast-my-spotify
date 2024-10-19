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
            method: "POST", headers: { "Content-Type": "application/json" } , body: JSON.stringify(body)
        });

        return result.json();
    }
}