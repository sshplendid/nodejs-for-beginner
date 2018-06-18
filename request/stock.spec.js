const stock = require('./stock');


// test getHistoricalStockData
(async function() {
  const code = '084990';
  const market = 'KQ';
  const period1 = new Date('2018-01-01');
  const period2 = new Date();
  const interval = '1mo';
  var data = await stock.getHistoricalStockData(code, market, interval, period1, period2);
  console.assert(data.close.length > 0, 'stock.spec.js: Data is broken!');
})();
