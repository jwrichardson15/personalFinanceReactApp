export const bloombergUrls = {
    getStock: (term,searchType) => { return ADMIN_URL + '/search/user/attributes?term='+term+'&active=true&searchType='+searchType},
    
}


export const watchListHeaders = ['Ticker', 'Current P/E', 'Earnings/Share', 'Market Cap (M)', 'Next Earnings Annc', 'Average Volume (30 day)'];

export default {
    bloombergUrls,
    watchListHeaders
}