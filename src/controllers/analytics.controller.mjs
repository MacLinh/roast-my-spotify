import express from 'express';
import llmService from '../services/llm.service.mjs';

const analyticsController = express.Router();

analyticsController.get('/', async (req, res) => {
    const result = await llmService.ask('what is 1 + 1');
    res.send(result);
  })

export default analyticsController;