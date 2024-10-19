import express from 'express';

const analyticsController = express.Router();

analyticsController.get('/', async (req, res) => {
    const result = await Promise.resolve({'foo': 'bar'});
    res.send(result);
  })

export default analyticsController;