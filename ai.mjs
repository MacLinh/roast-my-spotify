import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function main() {
    try {
        const chatCompletion = await getGroqChatCompletion();
        // Print the completion returned by the LLM.
        console.log(chatCompletion.choices[0]?.message?.content || "")
        console.log(JSON.stringify(chatCompletion));
    } catch (err) {
        console.log(err);
    }
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Of sad, happy what best describes alive by krewella. Answer with one word no punctuation",
      },
    ],
    model: "llama-3.1-70b-versatile",
  });
}

main();