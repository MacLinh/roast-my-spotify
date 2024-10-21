/* eslint-disable */ 

// TODO implement refresh token
// the following code will fail once 1 hr has elapsed

let redirect_uri = 'https://roast-my-spotify.vercel.app'; 

if (window.location.href.includes('localhost')) {
    redirect_uri = 'http://localhost:3000';
}

const ACCESS_TOKEN = "@roast-my-spotify-access";

const REFRESH_TOKEN = "@roast-my-spotify-refresh";

const CLIENT_ID = "e2cd35caa70a4d49877f92a7fbad0fd2"; 

class SpotifyService {
    _loggedIn;

    constructor() {
        this._loggedIn = new Promise(resolve => {
            this.checkLoginStatus().then(() => resolve());
        })
    }

    // TODO clean this up
    async checkLoginStatus() {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            try {
                const result = await fetch("https://api.spotify.com/v1/me", {
                    method: "GET", headers: { Authorization: `Bearer ${token}` }
                });

                // why does this not error by default ???
                if (result.status != 200) {
                    throw 'refresh';
                }

                console.log('spotify authenticated successfully', result);

                const profile = await result.json();

                console.log('spotify profile', profile)
            } catch (err) {
                console.log('spotify found a token but its expired', err);

                const refreshToken = localStorage.getItem(REFRESH_TOKEN);

                if (refreshToken) {
                    console.log('spotify found a refresh token');
                    try {
                        await this.refreshToken(refreshToken);
                    } catch (err) {
                        console.log('refresh failed');

                        localStorage.removeItem(REFRESH_TOKEN);
                        await this.login();
                    }
                } else {
                    console.log('spotify stale token, deleting');

                    localStorage.removeItem(ACCESS_TOKEN);
                    await this.login();
                }
            }
        } else {
            console.log('spotify no token found, fresh login')
            await this.login();
        }
    }

    async getToken() {
        await this._loggedIn;
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (!token) {
            throw 'logged in with no token in localstorage';
        }

        return token;
    }

    async login() {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        if (!code) {
            redirectToAuthCodeFlow(CLIENT_ID);
        } else {
            params.delete("code");
            await this.loginWithCode(code);   
        }
    }

    async getProfile() {
        // // if (!this._token) {
        // //     await this.login();
        // // } 

        // const result = await fetch("https://api.spotify.com/v1/me", {
        //     method: "GET", headers: { Authorization: `Bearer ${this._token}` }
        // });
    
        // return await result.json();
    } 

    async getTracks() {
        try {
            let token = await this.getToken();

            const result = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=20", {
                method: "GET", headers: { Authorization: `Bearer ${token}` }
            });

            console.log('Spotify: get tracks result ', result.status, result)

            const responseObject = await result.json();

            console.log('Spotify: get tracks json ', responseObject)

            return responseObject.items;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    /**
     * attempt function and login again once if it doesn't work
     * @param {*} fn 
     */
    async _retry(fn) {
        try {
            return await fn();
        } catch (err) {
            await this.login
        }
    }

    async refreshToken(refreshToken) {
        const url = "https://accounts.spotify.com/api/token";

        const payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
                client_id: CLIENT_ID
            }),
        }

        const result = await fetch(url, payload)
            .catch(err => { throw err });

        if (result.status != 200) {
            throw 'refresh failed';
        }

        const { access_token, refresh_token } = await result.json();

        if (!!access_token) {
            localStorage.setItem(ACCESS_TOKEN, access_token);
        }
        if (!!refresh_token) {
            localStorage.setItem(REFRESH_TOKEN, refresh_token);
        }
    }

    async loginWithCode(code) {
        const verifier = localStorage.getItem("verifier");

        const params = new URLSearchParams();
        params.append("client_id", CLIENT_ID);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", redirect_uri);
        params.append("code_verifier", verifier);

        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params
        }).catch(err => { console.log(err); });

        const { access_token, refresh_token } = await result.json();
        if (!!access_token) {
            localStorage.setItem(ACCESS_TOKEN, access_token);
        }
        if (!!refresh_token) {
            localStorage.setItem(REFRESH_TOKEN, refresh_token);
        }
    }
}


async function redirectToAuthCodeFlow() {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", CLIENT_ID);
    params.append("response_type", "code");
    params.append("redirect_uri", redirect_uri);
    params.append("scope", "user-read-private user-read-email user-top-read");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}



function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

const spotifyService = new SpotifyService();

export default spotifyService;