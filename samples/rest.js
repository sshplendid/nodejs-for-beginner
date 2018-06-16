const request = require('request');
const parser = require('xml2js').parseString;
const apiConfig = require('../config/api');

// dart 기업정보 request sample
const apiKey = apiConfig.getDartApiKey();
var options = {
  auth: apiKey,
  crpCd: `005930`,
  endPoint: `http://dart.fss.or.kr/api/company.json`,
  makeTarget: function() { return this.endPoint + '?auth=' + this.auth + '&crp_cd=' + this.crpCd; }
};

function sendRequest(options) {
  const url = options.makeTarget();
  console.log(`url => ${url}`);
  request(url, function(err, res, body) {
    if(err) throw new Error('failed to request API...!');
    var result = JSON.parse(body);
    console.log(result);
  });
}


// yahoo stock
const url = `https://query1.finance.yahoo.com/v8/finance/chart/005930.KS?formatted=true&crumb=hPh88qG98Uf&lang=en-US&region=US&period1=1371222000&period2=1528988400&interval=1mo&events=div%7Csplit&corsDomain=finance.yahoo.com`;

function getHistoricalStockData(options) {
  const url = options.makeTarget();
  console.log(`url => ${url}`);
    request(url, (err, res, body) => {
    console.log(JSON.parse(body).chart.result[0].indicators.quote);
    var result = JSON.parse(body).chart.result[0].indicators.quote;
  });
}

// use async-request
const aReq = require('async-request');
const ur1 = `https://query1.finance.yahoo.com/v8/finance/chart/005930.KS`;
async function getResponse(url, params) {
  var res = await aReq(url, {
      method: 'GET', data: {
        formatted: true,
        crumb:'hPh88qG98Uf',
        lang:'en-US',
        region:'US',
        period1:'1371222000',
        period2:'1528988400',
        interval:'1mo', // 1mo 1wk 1d
        events:'div|split',
        corsDomain:'finance.yahoo.com',
      }, headers: {

      }
      // ,proxy: ''
      //, cookieJar : true
      // ,cookieJar: new tough.CookieJar()
  });
  var data = JSON.parse(res.body).chart.result[0].indicators.quote[0];
  console.log(data);
}

// sendRequest(options);
// getHistoricalStockData({makeTarget: () => url});
var result =  getResponse(ur1);
// console.log(JSON.parse(result));
