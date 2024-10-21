import { emotions_example, personality_example } from "./example.mjs";

const EMOTIONS_IN_MUSIC = [
    {
        "category": "Positive Emotions",
        "emotions": [
            "Love",
            "Happiness",
            "Joy",
            "Euphoria",
            "Hope",
            "Inspiration",
            "Gratitude",
            "Excitement"
        ]
    },
    {
        "category": "Negative Emotions",
        "emotions": [
            "Sadness",
            "Anger",
            "Fear",
            "Anxiety",
            "Despair",
            "Loneliness",
            "Heartbreak",
            "Frustration"
        ]
    },
    {
        "category": "Complex Emotions",
        "emotions": [
            "Nostalgia",
            "Longing",
            "Melancholy",
            "Bittersweetness",
            "Empowerment",
            "Liberation",
            "Sentimentality",
            "Wistfulness"
        ]
    }
];

const EMOTIONS = [
    ...EMOTIONS_IN_MUSIC[0].emotions,
    ...EMOTIONS_IN_MUSIC[1].emotions,
    ...EMOTIONS_IN_MUSIC[2].emotions
]

const INSTRUCTIONS_EMOTIONS = {
    "instructions": "Map each song to emotions. Include weights. 4 emotions per song",
    "return format": "Valid json array only",
    "example return": JSON.stringify(emotions_example)
}

const INSTRUCTIONS_PERSONALITY = {
    "instructions": "quantify my big 5 personalit scores",
    "return format": "Valid json only. No explanation",
    "example return": JSON.stringify(personality_example)
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
            songs: songs,
            emotions: EMOTIONS,
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

