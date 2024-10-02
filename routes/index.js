var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

require ('dotenv').config();

module.exports = router;

const API_KEY = process.env.API_KEY

router.get('/movies', (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7d49be1df05395aaa24891e22721dc77`)
  .then(response => response.json())
  .then(data => {
    res.json({ movies: data.results})
  });
});


module.exports = router;