const emotions_example = [
    {
        "title": "Somebody Loves You",
        "artist": "Aly & Fila",
        "emotions": [
            {
                "emotion": "Energizing",
                "intensity": 0.9
            },
            {
                "emotion": "Happy",
                "intensity": 0.8
            },
            {
                "emotion": "Hopeful",
                "intensity": 0.3
            }
        ],
        "dominant_emotion": "Energizing"
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
        "title": "I Need a Doctor",
        "artist": "Dr. Dre, Eminem, Skylar Grey",
        "emotions": [
            {
                "emotion": "Energizing",
                "intensity": 0.7
            },
            {
                "emotion": "Hopeful",
                "intensity": 0.5
            }
        ],
        "dominant_emotion": "Energizing"
    },
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
        "title": "Fell In Me",
        "artist": "JohnnyDice",
        "emotions": [
            {
                "emotion": "Sad",
                "intensity": 0.8
            },
            {
                "emotion": "Nostalgic",
                "intensity": 0.4
            }
        ],
        "dominant_emotion": "Sad"
    },
    {
        "title": "Into the West",
        "artist": "Annie Lennox",
        "emotions": [
            {
                "emotion": "Hopeful",
                "intensity": 0.7
            },
            {
                "emotion": "Relaxing",
                "intensity": 0.6
            }
        ],
        "dominant_emotion": "Hopeful"
    }
]

const personality_example = {
    "Big Five Personality Scores": {
        "Openness to Experience": 0.834,
        "Conscientiousness": 0.685,
        "Extraversion": 0.819,
        "Agreeableness": 0.857,
        "Neuroticism": 0.448
    },
    "Facets": {
        "Openness": {
            "Imagination": 0.912,
            "Curiosity": 0.851,
            "Artistic Appreciation": 0.815,
            "Open-Mindedness": 0.802
        },
        "Conscientiousness": {
            "Organization": 0.742,
            "Self-Discipline": 0.719,
            "Goal-Oriented": 0.695,
            "Responsibility": 0.651
        },
        "Extraversion": {
            "Sociability": 0.885,
            "Enthusiasm": 0.842,
            "Energy": 0.821,
            "Assertiveness": 0.785
        },
        "Agreeableness": {
            "Cooperation": 0.915,
            "Empathy": 0.892,
            "Kindness": 0.863,
            "Trust": 0.829
        },
        "Neuroticism": {
            "Emotional Stability": 0.552,
            "Anxiety": 0.421,
            "Anger": 0.395,
            "Vulnerability": 0.462
        }
    }
}

export { emotions_example, personality_example };