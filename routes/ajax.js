const express = require('express');

const axios = require('axios');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('ajax');
});

router.get('/:city', (req, res, next) => {
  const { city } = req.params;
  axios.get(`http://api.openweathermap.org/data/2.5/weather?APPID=2d6806ccd5f57c6ddbe46da11e9da5b3&q=${city}&units=metric`)
    .then((response) => {
      const { data } = response;
      console.log(data);
      res.render('data', { data });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
