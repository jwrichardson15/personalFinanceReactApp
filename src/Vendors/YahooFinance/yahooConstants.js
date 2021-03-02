export const urls = {
    getStockInfo: () => { return "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics"},
    getStockAnalysis: () => { return "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis"},
    getMarketMovers: () => { return "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers" }
}

export const shortWatchListHeaders = ['Ticker', 'Price', '% Change'];
export const watchListHeaders = ['Ticker', 'Market Price', 'Daily Change %', 'Daily Range', 'Market Cap'];
export const portfolioHeaders = ['Ticker', 'Share Quantity', 'Market Price', 'Daily Change $', 'Cost Basis', 'P/L'];
export const researchMetricHeaders = ['Earnings Growth', 'Current Price/Share', 'EBITDA', 'Debt/Equity', 'Profit Margin', 'Total Cash', 'Total Debt', 'Total Revenue', 'Revenue Growth', 'Revenue/Share'];
export const researchSummaryHeaders = ['Enterprise Value', 'EV/EBITDA', 'Beta', 'Book Value', '% Insiders', '% Institutions', 'Shares Outstanding', 'Float Shares', 'Shares Short', 'Short Ratio'];

export default {
    urls,
    shortWatchListHeaders,
    watchListHeaders,
    portfolioHeaders,
    researchSummaryHeaders,
    researchMetricHeaders
}