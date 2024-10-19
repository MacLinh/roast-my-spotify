import express from 'express';
import llmService from '../services/llm.service.mjs';
import promptService from '../services/prompt.service.mjs';

const analyticsController = express.Router();

analyticsController.get('/', async (req, res) => {
  const result = await llmService.ask('what LLM model is this');
  res.send(result);
});

analyticsController.post('/emotions', async (req, res) => {
  const songs = req.body.list
  console.log('submitting songs:' + JSON.stringify(songs));

  if(!songs || !songs.length) {
    res.status(400).send({"message": "empty request"});
    return;
  }

  const prompt = promptService.getMultipleSongEmotions(songs);

  const result = await llmService.ask(prompt);

  console.log('llama says: ' + result);
  res.send(result);
});


export default analyticsController;