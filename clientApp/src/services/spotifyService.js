/* eslint-disable */ 

// TODO implement refresh token
// the following code will fail once 1 hr has elapsed
class SpotifyService {
    _token= undefined;

    constructor() {}

    getToken() {
        if(this._token) {
            return _token;
        }

        throw 'initialize the service first';
    }

    async login() {
        const clientId = "e2cd35caa70a4d49877f92a7fbad0fd2"; 

        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        if (!code) {
            redirectToAuthCodeFlow(clientId);
        } else {
            params.delete("code");
            const accessToken = await getAccessToken(clientId, code);
            this._token = accessToken;
            console.log(this);
            console.log(accessToken + ' : ' + this._token);
        }
    }

    async getProfile() {
        if (!this._token) {
            await this.login();
        } 

        const result = await fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${this._token}` }
        });
    
        return await result.json();
    } 

    async getTracks() {
        if (!this._token) {
            await this.login();
        } 

        const result = await fetch("https://api.spotify.com/v1/me/top/tracks/", {
            method: "GET", headers: { Authorization: `Bearer ${this._token}` }
        });
    
        return await result.json();
    }
}


async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/spotify");
    params.append("scope", "user-read-private user-read-email user-top-read");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

async function getAccessToken(clientId, code) {
    let token = localStorage.getItem('fooSpotify');

    if (token) {
        return token;
    }

    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/spotify");
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    }).catch(err => { throw err; });

    const { access_token } = await result.json();

    if (!!access_token) {
        localStorage.setItem('fooSpotify', access_token);
    }

    return access_token;
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


function populateUI(profile) {
    // TODO: Update UI with profile data
}

const spotifyService = new SpotifyService();

export default spotifyService;