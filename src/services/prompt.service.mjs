import { emotions_schema, personality_schema } from "./example.mjs";

const INSTRUCTIONS_EMOTIONS = {
    "instructions": "Give 4 dominant emotions per song",
    "return format": "Valid json",
    "schema": emotions_schema
}

const INSTRUCTIONS_PERSONALITY = {
    "instructions": "quantify my big 5 personality scores",
    "return format": "Valid json only. No explanation",
    "schema": personality_schema
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
        const prompt = JSON.stringify({
            songs,
            ...INSTRUCTIONS_EMOTIONS
        });

        console.log(prompt)
        return prompt;
    }

    getPersonalityFromMap(map) {
        const prompt = JSON.stringify({
            weights: map,
            ...INSTRUCTIONS_PERSONALITY
        });

        console.log(prompt)
        return prompt;
    }
}

const promptService = new PromptService();

export default promptService;

