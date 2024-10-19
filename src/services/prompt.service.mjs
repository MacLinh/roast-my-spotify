import example from "./example.mjs";

const EMOTIONS = ['happy', 'sad', 'nostalgic', 'hopeful', 'relaxing', 'energizing']

const INSTRUCTIONS = {
    "instructions": "Map each song to emotions. Include weights. Maximum of 2 emotions per song.",
    "return format": "Valid json array only",
    "example return": JSON.stringify(example)
}

class PromptService {
    constructor() { }

    /**
     * ask model for emotions in one song
     * @param song song name
     */
    getSingleSongEmotions(song) {
        throw 'not implemented';
    }

    /**
     * ask model to analyse emotions in a list of songs
     * @param songs array of songs
     */
    getMultipleSongEmotions(songs) {
        // this model understands json
        console.log(JSON.stringify({
            songs: songs,
            emotions: EMOTIONS,
            ...INSTRUCTIONS
        }))
        return JSON.stringify({
            songs: songs,
            emotions: EMOTIONS,
            ...INSTRUCTIONS
        });
    }
}

const promptService = new PromptService();

export default promptService;

