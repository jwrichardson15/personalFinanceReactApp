import actions from './actions.js';
import { callYahooApi, callYahooApiMarket } from '../Vendors/YahooFinance/yahooApi.js';
import yahooConstants from '../Vendors/YahooFinance/yahooConstants.js';
import firestoreOperations from '../Firestore/firestoreOperations.js';

const getAndSetResearchCompany = ticker => {        
    return (dispatch, getState) => {
        callYahooApi(yahooConstants.urls.getStockInfo(), ticker).then((response) => {
            console.log('yahoo API response')
            console.log(response)
            dispatch(actions.setResearchCompany(response));
        })
    }
}

const addToWatchList = ticker => {
    return (dispatch, getState) => {
        callYahooApi(yahooConstants.urls.getStockInfo(), ticker).then((yahooResponse) => {
            firestoreOperations.addToWatchList(yahooResponse).then((storeResponse) =>{
                dispatch(setWatchListFromDatabase());
            });
        })
    }
}

const setWatchListFromDatabase = () => {
    return (dispatch, getState) => {

        let formattedWatchList = [];

        firestoreOperations.getWatchList().then((data) => {
            data.forEach((doc) => {
                formattedWatchList.push(doc.data())
            });
            dispatch(actions.setWatchlistFromDatabase(formattedWatchList));
        });
    }
}

const removeFromWatchList = ticker => {
    return (dispatch, getState) => {

        let updatedWatchList = [];
        let removedDocId = '';

        const response = firestoreOperations.getWatchList().then((data) => {
            data.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                let company = doc.data();
                if (company['ticker'] == ticker) {
                    removedDocId = doc.id
                } else {
                    updatedWatchList.push(doc.data())
                }

            });
  
            dispatch(actions.setWatchlistFromDatabase(updatedWatchList));

            firestoreOperations.deleteFromWatchList(removedDocId);
        })
    }
}

const setPortfolioFromDatabase = () => {
    return (dispatch, getState) => {

        let formattedPortfolio = [];

        firestoreOperations.getPortfolio().then( (data) => {
            data.forEach((doc) => {
                formattedPortfolio.push(doc.data())
            });
            dispatch(actions.setPortfolioFromDatabase(formattedPortfolio));
        });
    }
}

const getMarketMovers = count => {        
    return (dispatch, getState) => {
        callYahooApiMarket(yahooConstants.urls.getMarketMovers(), count).then((response) => {
            console.log('response')
            console.log(response)
            dispatch(actions.setMarketMovers(response));
        })
    }
}


export default {
    getAndSetResearchCompany,
    addToWatchList,
    setWatchListFromDatabase,
    removeFromWatchList,
    setPortfolioFromDatabase,
    getMarketMovers
}