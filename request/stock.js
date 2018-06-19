// request/request.js

const req = require('async-request');

async function getStockHistoricalData(code, market, interval, period1, period2) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${code}.${market}?formatted=true&crumb=hPh88qG98Uf&lang=en-US&region=US&period1=${period1}&period2=${period2}&interval=${interval}&events=div|split&corsDomain=finance.yahoo.com`;
  if(!code || !market || !interval || !period1 || !period2) {
    console.error(`Broken parameters! => ${url}`);
    return {status:500, message:`Broken parameters! => ${url}`};
  }

  var res = await req(url, {
      method: 'GET'
      , headers: {}
  });


  var data = JSON.parse(res.body).chart.result[0].indicators.quote[0];
  return {status:200, data:JSON.parse(res.body)};
}

module.exports = {
  getHistoricalStockData: getStockHistoricalData
};
