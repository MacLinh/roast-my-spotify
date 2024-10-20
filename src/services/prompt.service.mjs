import example from "./example.mjs";

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

const INSTRUCTIONS = {
    "instructions": "Map each song to emotions. Include weights. 3 emotions per song.",
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

