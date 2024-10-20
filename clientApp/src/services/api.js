import { HttpClient } from "./httpClient";
import { MockClient } from "./mockClient";

/**
 * Wrapper class for HttpClient
 */
class Api {
    _http;

    constructor(useServer = true) {
        if (useServer) {
            this._http = new HttpClient('/api');
        } else {
            this._http = new MockClient();
        }
    }

    async get(path) {
        return await this._http.get(path);
    }

    async post(path, body) {
        return await this._http.post(path, body);
    }


}

const api = new Api(true);

export default api;