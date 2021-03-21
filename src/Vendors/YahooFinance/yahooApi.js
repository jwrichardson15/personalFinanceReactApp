import yahooConstants from './yahooConstants.js';

const headers = { 
    "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "useQueryString": true
};

const sendYahooRequest = (query, url) => {
    let stockInfo;
    var unirest = require("unirest");
    var req = unirest("GET", url);

    req.query(query);
    req.headers(headers);


    return new Promise(function(resolve, reject) {
        req.end(function (res) {
            if (!res.error) {
                console.log('Yahoo Response')
                console.log(res);
        
                stockInfo = res.body;
                resolve(res.body);
            } else {
                reject();
            }
        });
    })
}

export async function getYahooStockStats(ticker) {

    let stockStatsQuery = {
        "symbol": ticker,
        "region": "US"
    }

    return sendYahooRequest(stockStatsQuery, yahooConstants.urls.getStockInfo())
}

export async function getYahooMarketMovers(count) {

    let stockStatsQuery = {
        "region": "US",
        "lang": "en-US",
        "start": "0",
        "count": count
    }

    return sendYahooRequest(stockStatsQuery, yahooConstants.urls.getMarketMovers())
}


export default {
    getYahooStockStats,
    getYahooMarketMovers
}