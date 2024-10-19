export class MockClient {
    // map to hard coded responses
    // one response per path
    _dictionary = {
        get: {
            'empty': {},
        },
        post: {

        },
        put: {}
    }

    constructor() {}  

    async get(path) {
        if (!path) {
            path = 'empty';
        }

        return Promise.resolve(this._dictionary.get[path]);
    }
}