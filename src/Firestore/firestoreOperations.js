// import firebase from './Firestore.js';
import { firebaseApp, FieldValue } from './firebaseSetup.js';

const addToWatchList = (companyData, userEmail) => {
    let quoteData = companyData.quoteData[companyData.symbol]
    const db = firebaseApp.firestore();

    const docRef = db.collection(userEmail).doc("watchlist").update({
        [companyData.symbol] : {
            ticker: companyData.symbol,
            marketPrice: quoteData.regularMarketPrice.fmt,
            dailyChange: quoteData.regularMarketChangePercent.fmt,
            dailyRange: quoteData.regularMarketDayRange.fmt,
            marketCap: quoteData.marketCap.fmt
        }
    })
    
    return docRef
}

const getWatchList = (userEmail) => {   
    const db = firebaseApp.firestore();
    const docRef = db.collection(userEmail).doc('watchlist').get()

    return docRef;
}

const deleteFromWatchList = (ticker, userEmail) => {   
    const db = firebaseApp.firestore();
    const userRef = db.collection(userEmail).doc('watchlist').update({
        [ticker]: FieldValue.delete()

    }).then((data) => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

    return userRef
}

const getPortfolio = (userEmail) => {   
    const db = firebaseApp.firestore();
    const docRef = db.collection(userEmail).doc('portfolio').get()
    return docRef;
}


export default {
    addToWatchList,
    getWatchList,
    deleteFromWatchList,
    getPortfolio
}