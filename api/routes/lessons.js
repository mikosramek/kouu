const express = require('express');
const router = express.Router();

const wordController = require('../database-controller/word-controller');

router.get('/', (req, res) => {
  wordController.getLessons().then(data => {
    return res.status(200).send(data);
  }).catch(e => {
    return res.status(503).send({error: e});
  })
})

router.get('/:lesson_id', (req, res) => {
  const { lesson_id } = req.params;
  wordController.getWords(lesson_id).then(data => {
    return res.status(200).send(data);
  }).catch(e => {
    return res.status(503).send({error:e});
  })
})


module.exports = router;