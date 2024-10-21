const POSITIVE_EMOTIONS = {
    "Love": true,
    "Happiness": true,
    "Joy": true,
    "Euphoria": true,
    "Hope": true,
    "Inspiration": true,
    "Gratitude": true,
    "Excitement": true,
    "Empowerment": true
}
const NEGATIVE_EMOTIONS = {
    "Sadness": true,
    "Anger": true,
    "Fear": true,
    "Anxiety": true,
    "Despair": true,
    "Loneliness": true,
    "Heartbreak": true,
    "Frustration": true,
    "Wistfulness": true,
    "Melancholy": true,
    "Longing": true
}

class Analyzer {
    getEmotionOccurence(data) {
        const map = {}

        for (let song of data) {
            let emotions = song.emotions;
            for (let emotion of emotions) {
                if (!map[emotion.emotion]) {
                    map[emotion.emotion] = 0;
                }
                map[emotion.emotion] += emotion.intensity;
            }
        }

        console.log(JSON.stringify(map));

        // convert to format for nivo radar
        const emotions = [];
        for (let emotion of Object.keys(map)) {
            emotions.push({ emotion, Weight: map[emotion]})
        }

        // group related emotions together
        // leading with positive emotions
        return emotions.sort((a, b) =>
            (POSITIVE_EMOTIONS[b.emotion] ? 1 : NEGATIVE_EMOTIONS[b.emotion] ? -1 : 0) -
            (POSITIVE_EMOTIONS[a.emotion] ? 1 : NEGATIVE_EMOTIONS[a.emotion] ? -1 : 0)
        );
    }

    getPersonalityScores(data) {
        console.log(data);

        const results = [];

        const scores = data["Big Five Personality Scores"];

        for (let score of Object.keys(scores)) {
            results.push({
                "big5": score,
                "Score": scores[score]
            })
        }

        return results;
    }
}

const analyzer = new Analyzer();

export default analyzer;