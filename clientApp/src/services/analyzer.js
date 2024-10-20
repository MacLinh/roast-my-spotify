const POSITIVE = [
    "Love",
    "Happiness",
    "Joy",
    "Euphoria",
    "Hope",
    "Inspiration",
    "Gratitude",
    "Excitement"
]
const NEGATIVE = [
    "Sadness",
    "Anger",
    "Fear",
    "Anxiety",
    "Despair",
    "Loneliness",
    "Heartbreak",
    "Frustration"
]
class Analyzer {
    getEmotionOccurence(data) {
        const map = {}

        for (let song of data) {
            let emotions = song.emotions;
            for (let emotion of emotions) {
                if (!map[emotion.emotion]) {
                    map[emotion.emotion] = 0;
                }
                map[emotion.emotion]++;
            }
        }

        // convert to format for nivo radar
        const emotions = [];
        for (let emotion of Object.keys(map)) {
            emotions.push({ emotion, foo: map[emotion]})
        }

        return emotions.sort((a,b) => { 
            if (POSITIVE.includes(a.emotion)) {
                a = 1;
            } else if (NEGATIVE.includes(a.emotion)) {
                a = -1;
            } else {
                a = 0;
            }

            if (POSITIVE.includes(b.emotion)) {
                b = 1;
            } else if (NEGATIVE.includes(b.emotion)) {
                b = -1;
            } else {
                b = 0;
            }

            return b-a;

        });
    }
}

const analyzer = new Analyzer();

export default analyzer;