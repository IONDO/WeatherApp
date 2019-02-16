const express = require('express');

const axios = require('axios');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'whatever'});

  /* axios.get('/http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2d6806ccd5f57c6ddbe46da11e9da5b3')
    .then(response => {
      const {
        data
      } = response;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    }) */
});

module.exports = router;
