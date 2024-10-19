const EMOTIONS = ['happy', 'sad', 'nostalgic', 'hopeful', 'relaxing', 'energizing']

const INSTRUCTIONS = {
    "instructions": "Map each song to emotions. Include weights. Maximum of 2 emotions per song.",
    "return format": "valid json array",
    "example return": '[{"song":"Wicked Games by The Weeknd","emotions":[{"emotion":"sad","weight":0.6},{"emotion":"relaxing","weight":0.4}]},{"song":"Alive by Krewella","emotions":[{"emotion":"energizing","weight":0.8},{"emotion":"happy","weight":0.2}]},{"song":"Lego House by Ed Sheeran","emotions":[{"emotion":"nostalgic","weight":0.7},{"emotion":"relaxing","weight":0.3}]}]'
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
        return JSON.stringify({
            songs: songs,
            emotions: EMOTIONS,
            ...INSTRUCTIONS
        });
    }
}

const promptService = new PromptService();

export default promptService;

