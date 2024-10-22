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
        }).catch(err => console.log(err));

        return result.json();
    }

    async post(path = '', body) {
        const result = await fetch(this._endpoint + '/' + path, {
            method: "POST", headers: { "Content-Type": "application/json" } , body: JSON.stringify(body)
        }).catch(err => { 
            throw err 
        });

        switch (result.status) {
            case 500:
                throw 'Internal Server Error';
            case 404:
                throw 'Backend is not running. Odds are you are running the client app standalone and did not set to use Mock server';
            default: {}
        }

        return result.json();
    }
}