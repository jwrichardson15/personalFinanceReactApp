
// TODO Major cleanup for these api calls; create a general purpose function

export async function callYahooApi(url, ticker) {

    console.error(url)
    console.error(ticker)
    let stockInfo;

    var unirest = require("unirest");

    var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics");

    req.query({
        "symbol": ticker,
        "region": "US"
    });

    req.headers({
        "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "useQueryString": true
    });


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

export async function callYahooApiMarket(url, count) {

    console.error(url)
    let stockInfo;

    var unirest = require("unirest");

    var req = unirest("GET", url);

    req.query({
        "region": "US",
        "lang": "en-US",
        "start": "0",
        "count": count
    });

    req.headers({
        "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "useQueryString": true
    });


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


export default {
    callYahooApi,
    callYahooApiMarket
}