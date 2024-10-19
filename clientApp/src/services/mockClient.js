export class MockClient {
    // map to hard coded responses
    // one response per path
    _dictionary = {
        get: {
            'empty': {},
        },
        post: {
            'empty': {},
            'analytics/emotions': emotionsApiResponse1
        },
        put: {}
    }

    constructor() {}  

    async get(path) {
        if (!path) {
            path = 'empty';
        }

        return Promise.resolve(this._dictionary.get[path]);
    }

    async post(path, ignore) {
        console.log(path)
        if (!path) {
            path = 'empty';
        }

        return Promise.resolve(this._dictionary.post[path]);
    }
}

const emotionsApiResponse1 = [
    {
      "title": "I'm Alive",
      "artist": "Celine Dion",
      "emotions": [
        {
          "emotion": "Hopeful",
          "intensity": 0.9
        },
        {
          "emotion": "Relaxing",
          "intensity": 0.7
        }
      ],
      "dominant_emotion": "Hopeful"
    },
    {
      "title": "Wicked Games",
      "artist": "The Weeknd",
      "emotions": [
        {
          "emotion": "Sad",
          "intensity": 0.8
        },
        {
          "emotion": "Nostalgic",
          "intensity": 0.6
        }
      ],
      "dominant_emotion": "Sad"
    },
    {
      "title": "Hood Pope",
      "artist": "A$AP Ferg",
      "emotions": [
        {
          "emotion": "Energizing",
          "intensity": 0.9
        },
        {
          "emotion": "Happy",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Energizing"
    },
    {
      "title": "Alive",
      "artist": "Krewella",
      "emotions": [
        {
          "emotion": "Energizing",
          "intensity": 0.8
        },
        {
          "emotion": "Happy",
          "intensity": 0.6
        }
      ],
      "dominant_emotion": "Energizing"
    },
    {
      "title": "Lego House",
      "artist": "Ed Sheeran",
      "emotions": [
        {
          "emotion": "Nostalgic",
          "intensity": 0.8
        },
        {
          "emotion": "Relaxing",
          "intensity": 0.6
        }
      ],
      "dominant_emotion": "Nostalgic"
    },
    {
      "title": "Get Lucky",
      "artist": "Naughty Boy",
      "emotions": [
        {
          "emotion": "Happy",
          "intensity": 0.9
        },
        {
          "emotion": "Energizing",
          "intensity": 0.8
        }
      ],
      "dominant_emotion": "Happy"
    }
  ]