import Groq from 'groq-sdk';

const MODEL = 'llama-3.1-70b-versatile';

const KEY = process.env.GROQ_API_KEY;

export default class GroqLlamaPovider {
    _groq;

    constructor() {
        this._init();
    }

    _init() {
        try {
            this._groq = new Groq({ apiKey: KEY });
        } catch (err) {
            console.err('Cannot setup groq: ' + err);
        }

    }

    async ask(prompt) {
        const result = await this._groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0,
            model: MODEL,
        });

        return result.choices[0]?.message?.content;
    }
}