
# Roast my Spotify

   ## **[Live here](https://roast-my-spotify.vercel.app/)**

**Work in progress...**

The link will display an error until this app gets approved by the Spotify team ([see this link](https://developer.spotify.com/documentation/web-api/concepts/quota-modes)).

TLDR: Until the app gets approved (which can take up to 6 weeks) only registered users can use the app (Spotify blocks all api calls). Contact me if you would like your Spotify account to be added as a tester.



## To build client app

In clientApp directory

Install dependencies

    npm i

build

    npm run build




## To run server

In root directory

Install dependencies

    npm i

Set groq api key (you will need a groq account https://console.groq.com/keys)

    export GROQ_API_KEY="your-api-key"

Start the development server

    npm start

*Make sure client app is already built as this will serve it's static files


## To run front end only

When implementing UI features it may be useful to host the client app only to take advantage of React hot loading.

In clientApp directory

Set [this line](https://github.com/MacLinh/roast-my-spotify/blob/master/clientApp/src/services/api.js#L29) to `false` 

    npm start
Will need to build static files to integrate with the backend

    npm run build

## Deployment

Pushing to master will automatically trigger a vercel job to deploy to production link. Currently it will not build the client app so make sure to build the client app's static files and push the build directory if any UI changes are involved.
