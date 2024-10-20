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

        return await new Promise(resolve => setTimeout(resolve, 3000, this._dictionary.get[path]));
    }

    async post(path, ignore) {
        console.log(path)
        if (!path) {
            path = 'empty';
        }

        return await new Promise(resolve => setTimeout(resolve, 3000, this._dictionary.post[path]));
    }
}

const emotionsApiResponse1 = [
    {
      "title": "Beautiful U R",
      "artist": "Deborah Cox",
      "emotions": [
        {
          "emotion": "Love",
          "intensity": 0.8
        },
        {
          "emotion": "Happiness",
          "intensity": 0.7
        },
        {
          "emotion": "Joy",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Love"
    },
    {
      "title": "Somebody Loves You - Paul Thomas Remix",
      "artist": "Aly & Fila",
      "emotions": [
        {
          "emotion": "Hope",
          "intensity": 0.9
        },
        {
          "emotion": "Love",
          "intensity": 0.8
        },
        {
          "emotion": "Happiness",
          "intensity": 0.3
        }
      ],
      "dominant_emotion": "Hope"
    },
    {
      "title": "Fell In Me",
      "artist": "JohnnyDice",
      "emotions": [
        {
          "emotion": "Sadness",
          "intensity": 0.8
        },
        {
          "emotion": "Loneliness",
          "intensity": 0.6
        },
        {
          "emotion": "Nostalgia",
          "intensity": 0.4
        }
      ],
      "dominant_emotion": "Sadness"
    },
    {
      "title": "Spiral City",
      "artist": "CARR",
      "emotions": [
        {
          "emotion": "Euphoria",
          "intensity": 0.7
        },
        {
          "emotion": "Excitement",
          "intensity": 0.6
        },
        {
          "emotion": "Inspiration",
          "intensity": 0.3
        }
      ],
      "dominant_emotion": "Euphoria"
    },
    {
      "title": "Remember Us (feat. Skylar Capri)",
      "artist": "Far Out",
      "emotions": [
        {
          "emotion": "Nostalgia",
          "intensity": 0.8
        },
        {
          "emotion": "Longing",
          "intensity": 0.7
        },
        {
          "emotion": "Melancholy",
          "intensity": 0.4
        }
      ],
      "dominant_emotion": "Nostalgia"
    },
    {
      "title": "Escape To A Better Future",
      "artist": "Tempo Giusto",
      "emotions": [
        {
          "emotion": "Hope",
          "intensity": 0.9
        },
        {
          "emotion": "Inspiration",
          "intensity": 0.8
        },
        {
          "emotion": "Gratitude",
          "intensity": 0.2
        }
      ],
      "dominant_emotion": "Hope"
    },
    {
      "title": "Alive",
      "artist": "Krewella",
      "emotions": [
        {
          "emotion": "Euphoria",
          "intensity": 0.8
        },
        {
          "emotion": "Excitement",
          "intensity": 0.7
        },
        {
          "emotion": "Empowerment",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Euphoria"
    },
    {
      "title": "So Out Of Reach - Orbion Edit",
      "artist": "Space RockerZ",
      "emotions": [
        {
          "emotion": "Longing",
          "intensity": 0.7
        },
        {
          "emotion": "Melancholy",
          "intensity": 0.6
        },
        {
          "emotion": "Nostalgia",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Longing"
    },
    {
      "title": "California",
      "artist": "Gareth Emery",
      "emotions": [
        {
          "emotion": "Happiness",
          "intensity": 0.8
        },
        {
          "emotion": "Inspiration",
          "intensity": 0.6
        },
        {
          "emotion": "Excitement",
          "intensity": 0.4
        }
      ],
      "dominant_emotion": "Happiness"
    },
    {
      "title": "Can't Breathe",
      "artist": "Fefe Dobson",
      "emotions": [
        {
          "emotion": "Frustration",
          "intensity": 0.8
        },
        {
          "emotion": "Despair",
          "intensity": 0.6
        },
        {
          "emotion": "Anger",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Frustration"
    },
    {
      "title": "I'm with You",
      "artist": "Avril Lavigne",
      "emotions": [
        {
          "emotion": "Love",
          "intensity": 0.8
        },
        {
          "emotion": "Nostalgia",
          "intensity": 0.6
        },
        {
          "emotion": "Longing",
          "intensity": 0.4
        }
      ],
      "dominant_emotion": "Love"
    },
    {
      "title": "Take It On the Run",
      "artist": "REO Speedwagon",
      "emotions": [
        {
          "emotion": "Excitement",
          "intensity": 0.8
        },
        {
          "emotion": "Happiness",
          "intensity": 0.6
        },
        {
          "emotion": "Empowerment",
          "intensity": 0.4
        }
      ],
      "dominant_emotion": "Excitement"
    },
    {
      "title": "Haru Ka Tooku (From A Place Further than the Universe)",
      "artist": "Athena Nightingale",
      "emotions": [
        {
          "emotion": "Nostalgia",
          "intensity": 0.8
        },
        {
          "emotion": "Longing",
          "intensity": 0.7
        },
        {
          "emotion": "Melancholy",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Nostalgia"
    },
    {
      "title": "Silhouettes & Outlines",
      "artist": "Giuseppe Ottaviani",
      "emotions": [
        {
          "emotion": "Euphoria",
          "intensity": 0.8
        },
        {
          "emotion": "Excitement",
          "intensity": 0.6
        },
        {
          "emotion": "Inspiration",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Euphoria"
    },
    {
      "title": "Slow Motion (feat. Rikki)",
      "artist": "Far Out",
      "emotions": [
        {
          "emotion": "Nostalgia",
          "intensity": 0.8
        },
        {
          "emotion": "Longing",
          "intensity": 0.7
        },
        {
          "emotion": "Melancholy",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Nostalgia"
    },
    {
      "title": "Desert King",
      "artist": "LGHTNNG",
      "emotions": [
        {
          "emotion": "Euphoria",
          "intensity": 0.8
        },
        {
          "emotion": "Excitement",
          "intensity": 0.6
        },
        {
          "emotion": "Inspiration",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Euphoria"
    },
    {
      "title": "My Kind",
      "artist": "Hilary Duff",
      "emotions": [
        {
          "emotion": "Happiness",
          "intensity": 0.7
        },
        {
          "emotion": "Inspiration",
          "intensity": 0.6
        },
        {
          "emotion": "Joy",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Happiness"
    },
    {
      "title": "Ghetto Love",
      "artist": "Karl Wolf",
      "emotions": [
        {
          "emotion": "Love",
          "intensity": 0.8
        },
        {
          "emotion": "Happiness",
          "intensity": 0.6
        },
        {
          "emotion": "Joy",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Love"
    },
    {
      "title": "Crépuscule",
      "artist": "Cœur De Pirate",
      "emotions": [
        {
          "emotion": "Nostalgia",
          "intensity": 0.8
        },
        {
          "emotion": "Melancholy",
          "intensity": 0.7
        },
        {
          "emotion": "Longing",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Nostalgia"
    },
    {
      "title": "Alejandro",
      "artist": "Lady Gaga",
      "emotions": [
        {
          "emotion": "Love",
          "intensity": 0.8
        },
        {
          "emotion": "Heartbreak",
          "intensity": 0.6
        },
        {
          "emotion": "Longing",
          "intensity": 0.5
        }
      ],
      "dominant_emotion": "Love"
    }
  ]