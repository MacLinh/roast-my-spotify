const emotions_schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Song Emotions",
    "description": "A list of songs with their associated emotions",
    "type": "array",
    "items": {
        "$ref": "#/definitions/Song"
    },
    "definitions": {
        "Song": {
            "type": "object",
            "required": ["title", "artist", "emotions", "dominant_emotion"],
            "properties": {
                "title": {
                    "type": "string",
                    "description": "Song title"
                },
                "artist": {
                    "type": "string",
                    "description": "Song artist"
                },
                "emotions": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Emotion"
                    },
                    "minItems": 1
                },
                "dominant_emotion": {
                    "type": "string",
                    "description": "Dominant emotion of the song"
                }
            }
        },
        "Emotion": {
            "type": "object",
            "required": ["emotion", "intensity"],
            "properties": {
                "emotion": {
                    "type": "string",
                    "enum": ["Love", "Happiness", "Joy", "Euphoria", "Hope",
                        "Inspiration", "Gratitude", "Excitement", "Sadness", "Anger",
                        "Fear", "Anxiety", "Despair", "Loneliness", "Heartbreak",
                        "Frustration", "Nostalgia", "Longing", "Melancholy",
                        "Bittersweetness", "Empowerment", "Liberation",
                        "Sentimentality", "Wistfulness"]
                },
                "intensity": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                }
            }
        }
    }
}

const personality_schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Big Five Personality Assessment",
    "description": "A Big Five personality assessment result",
    "type": "object",
    "required": [
        "Big Five Personality Scores",
        "Facets"
    ],
    "properties": {
        "Big Five Personality Scores": {
            "type": "object",
            "required": [
                "Openness to Experience",
                "Conscientiousness",
                "Extraversion",
                "Agreeableness",
                "Neuroticism"
            ],
            "properties": {
                "Openness to Experience": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                },
                "Conscientiousness": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                },
                "Extraversion": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                },
                "Agreeableness": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                },
                "Neuroticism": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                }
            }
        }
    }
}

const facets = {
    "Facets": {
        "type": "object",
        "required": [
            "Openness",
            "Conscientiousness",
            "Extraversion",
            "Agreeableness",
            "Neuroticism"
        ],
        "properties": {
            "Openness": {
                "type": "object",
                "required": [
                    "Imagination",
                    "Curiosity",
                    "Artistic Appreciation",
                    "Open-Mindedness"
                ],
                "properties": {
                    "Imagination": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Curiosity": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Artistic Appreciation": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Open-Mindedness": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    }
                }
            },
            "Conscientiousness": {
                "type": "object",
                "required": [
                    "Organization",
                    "Self-Discipline",
                    "Goal-Oriented",
                    "Responsibility"
                ],
                "properties": {
                    "Organization": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Self-Discipline": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Goal-Oriented": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Responsibility": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    }
                }
            },
            "Extraversion": {
                "type": "object",
                "required": [
                    "Sociability",
                    "Enthusiasm",
                    "Energy",
                    "Assertiveness"
                ],
                "properties": {
                    "Sociability": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Enthusiasm": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Energy": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Assertiveness": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    }
                }
            },
            "Agreeableness": {
                "type": "object",
                "required": [
                    "Cooperation",
                    "Empathy",
                    "Kindness",
                    "Trust"
                ],
                "properties": {
                    "Cooperation": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Empathy": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Kindness": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Trust": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    }
                }
            },
            "Neuroticism": {
                "type": "object",
                "required": [
                    "Emotional Stability",
                    "Anxiety",
                    "Anger",
                    "Vulnerability"
                ],
                "properties": {
                    "Emotional Stability": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Anxiety": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Anger": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    },
                    "Vulnerability": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1
                    }
                }
            }
        }
    }
}

export { emotions_schema, personality_schema };