// import firebase from './Firestore.js';
import { firebaseApp } from './firebaseSetup.js';


const addToWatchList = companyData => {   
    let quoteData = companyData.quoteData[companyData.symbol]

    const db = firebaseApp.firestore();
    const userRef = db.collection('watchlist').add({
        ticker: companyData.symbol,
        marketPrice: quoteData.regularMarketPrice.fmt,
        dailyChange: quoteData.regularMarketChangePercent.fmt,
        dailyRange: quoteData.regularMarketDayRange.fmt,
        marketCap: quoteData.marketCap.fmt
    })
    
    return userRef
}

// const getWatchList = companyData => {   
//     let formattedWatchList = [];

//     const db = firebase.firestore();
//     const response = db.collection("watchlist").get().then((data) => {
//         data.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//             formattedWatchList.push(doc.data())
//         });
//         return formattedWatchList
//     })
// }

const getWatchList = () => {   
    const db = firebaseApp.firestore();
    const userRef = db.collection("watchlist").get();
    return userRef;
}

const deleteFromWatchList = (removedDocId) => {   
    const db = firebaseApp.firestore();
    const userRef = db.collection("watchlist").doc(removedDocId).delete().then((data) => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

    return userRef
}

const getPortfolio = () => {   
    const db = firebaseApp.firestore();
    const userRef = db.collection("portfolio").get();
    return userRef;
}

// const addToFirestore = (type, body) => {

//     // let payload = new Map();
//     // body.forEach(field => {
//     //         payload[field] = field
//     // });

//     const db = firebaseApp.firestore();
//     db.settings({
//     timestampsInSnapshots: true
//     });
//     const userRef = db.collection(type).add({
//         //TODO add map here
//     })
// }



export default {
    addToWatchList,
    getWatchList,
    deleteFromWatchList,
    getPortfolio
}