const api = require('./stocks');
const express = require('express');
const router = express.Router();

router.get('/historical/:code', async (req, res) => {
  var p = req.query;
  // console.log(p);
  var data = await api.getHistoricalData(req.params.code, p.market, p.interval, Math.floor(new Date(p.period1 + ' 00:00:00').getTime()/1000), Math.floor(new Date(p.period2+ ' 00:00:00')/1000));

  res.send(data);
});


module.exports = router;
