const request = require('request');
const parser = require('xml2js').parseString;
const apiConfig = require('../config/api');
/*
const endpoint = `http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire`;
const params = {
  ServiceKey: 'pQlcWMUAUzc%2BZLuWkbvgKK61qPVujsKOGfntYmKv1oYbi58plI0djoWby96QnuHnus1lX81Q%2FfOERNVeCrKNZg%3D%3D',
};
var sggName =  encodeURIComponent('마포구');
const url = `http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire?ServiceKey=pQlcWMUAUzc%2BZLuWkbvgKK61qPVujsKOGfntYmKv1oYbi58plI0djoWby96QnuHnus1lX81Q%2FfOERNVeCrKNZg%3D%3D&ServiceKey=-&pageNo=1&numOfRows=10&sgId=20180613&sgTypecode=4&sggName=%EB%A7%88%ED%8F%AC%EA%B5%AC&sdName=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C&jdName=%EB%8D%94%EB%B6%88%EC%96%B4%EB%AF%BC%EC%A3%BC%EB%8B%B9`;
console.log(url);
function test() {
  request(url, function(err, res, body) {
    if(err) throw new Error('Oops...!');
    var result = parser(body, (err, res) => {
      console.dir(res.response.header);
      console.dir(res.response.body);
      res.response.body[0].items.forEach(o => console.log(o));
    });
  });
}

test();


var options = {
  endpoint: 'http://apis.data.go.kr/1192000/openapi/service/ManageExpItemService',
  function: '/getExpItemList',
  key: 'pQlcWMUAUzc%2BZLuWkbvgKK61qPVujsKOGfntYmKv1oYbi58plI0djoWby96QnuHnus1lX81Q%2FfOERNVeCrKNZg%3D%3D',
  params: {
    numOfRows: 10,
    pageNo: 1,
    baseDt: 201501,
    imxprtSeNm: '수입',
    itemNm: '연어'
  }
};
*/



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

sendRequest(options);
