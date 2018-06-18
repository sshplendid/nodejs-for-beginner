// request/request.js

const req = require('async-request');

async function getStockHistoricalData(code, market, interval, period1, period2) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${code}.${market}`;
  // console.log(url);
  var res = await req(url, {
      method: 'GET', data: {
        formatted: true,
        crumb:'hPh88qG98Uf',
        lang:'en-US',
        region:'US',
        period1:Math.round(period1.getTime()/1000),
        period2:Math.round(period2.getTime()/1000),
        interval:interval, // [1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo]
        events:'div|split',
        corsDomain:'finance.yahoo.com',
      }, headers: {

      }
      // ,proxy: ''
      //, cookieJar : true
      // ,cookieJar: new tough.CookieJar()
  });
  // console.log(res.body);
  var data = JSON.parse(res.body).chart.result[0].indicators.quote[0];
  return data;
}

module.exports = {
  getHistoricalStockData: getStockHistoricalData
};
