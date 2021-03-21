import actions from './actions.js';
import { getYahooStockStats, getYahooMarketMovers } from '../Vendors/YahooFinance/yahooApi.js';
import firestoreOperations from '../Firestore/firestoreOperations.js';
import each from 'lodash/each';

const setUserFromAuth = user => {
    return(dispatch, getState) => {
        dispatch(actions.setUser(user));
    }
}

const getAndSetResearchCompany = ticker => {        
    return (dispatch, getState) => {
        getYahooStockStats(ticker).then((response) => {
            dispatch(actions.setResearchCompany(response));
        })
    }
}

const addToWatchList = ticker => {
    return (dispatch, getState) => {
        getYahooStockStats(ticker).then((yahooResponse) => {
            let user = getState().financials.user
            if (user){
                firestoreOperations.addToWatchList(yahooResponse, user.email).then((storeResponse) =>{
                    dispatch(setWatchListFromDatabase());
                });
            } else {
                console.error("Error loading user info from store")
            }
        })
    }
}

const setWatchListFromDatabase = () => {
    return (dispatch, getState) => {

        let formattedWatchList = [];
        let user = getState().financials.user

        if(user){
            firestoreOperations.getWatchList(user.email).then((doc) => {
                if (doc.exists) {
                    let data = doc.data()

                    each(Object.keys(data), (key, index) => {
                        formattedWatchList.push(data[key]);
                    });

                    dispatch(actions.setWatchlistFromDatabase(formattedWatchList));
                }
            });
        }
    }
}

const removeFromWatchList = ticker => {
    return (dispatch, getState) => {

        let updatedWatchList = [];
        let user = getState().financials.user

        if (user) {    
            const response = firestoreOperations.getWatchList(user.email).then((doc) => {
                if (doc.exists) {
                    let data = doc.data()

                    each(Object.keys(data), (key, index) => {
                        if (key != ticker) {
                            updatedWatchList.push(data[key]);
                        }
                    });

                    dispatch(actions.setWatchlistFromDatabase(updatedWatchList));
                }

                firestoreOperations.deleteFromWatchList(ticker, user.email);
            })
        } else {
            console.error("Error loading user info from store")
        } 
    }
}

const setPortfolioFromDatabase = () => {
    return (dispatch, getState) => {

        let formattedPortfolio = [];

        let user = getState().financials.user
        if (user) {    
            firestoreOperations.getPortfolio(user.email).then((doc) => {
                if (doc.exists) {
                    let data = doc.data()

                    each(Object.keys(data), (key, index) => {
                        formattedPortfolio.push(data[key]);
                    });

                    dispatch(actions.setPortfolioFromDatabase(formattedPortfolio));
                }
            });
        }
    }
}

const getMarketMovers = count => {        
    return (dispatch, getState) => {
        getYahooMarketMovers(count).then((response) => {
            dispatch(actions.setMarketMovers(response));
        })
    }
}


export default {
    setUserFromAuth,
    getAndSetResearchCompany,
    addToWatchList,
    setWatchListFromDatabase,
    removeFromWatchList,
    setPortfolioFromDatabase,
    getMarketMovers
}