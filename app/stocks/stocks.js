const api = require('../../request/stock');

module.exports = {
  getHistoricalData: async function(code, market, interval, period1, period2) {
    return await api.getHistoricalStockData(code, market, interval, period1, period2);
  }
};
