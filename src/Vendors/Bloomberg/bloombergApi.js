const bloombergInfo = (company) => {

var unirest = require("unirest");

var req = unirest("GET", "https://bloomberg-market-and-financial-news.p.rapidapi.com/stock/get-statistics");

req.query({
	"id": "aapl:us"
});

req.headers({
	"x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
	"x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

}

export default bloombergInfo;