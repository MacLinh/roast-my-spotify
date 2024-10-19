import GroqLlamaProvider from "../providers/groqLlama.provider.mjs";

/**
 * Wrapper class for a general langauge model
 */
class LLMService {
    _llm;

    constructor(model) {
        this._llm = model;
    }

    async ask(prompt) {
        return await this._llm.ask(prompt);
    }
}

const llmService = new LLMService(new GroqLlamaProvider());

export default llmService;