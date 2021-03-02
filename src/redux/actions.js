import TYPES from "./actionTypes";

export const setResearchCompany = companyInfo => ({
  type: TYPES.SET_RESEARCH_COMPANY,
  payload: companyInfo
})

export const addCompanyToWatchlist = companyInfo => ({
    type: TYPES.ADD_COMPANY_WATCHLIST,
    payload: companyInfo
});

export const setWatchlistFromDatabase = companyInfo => ({
  type: TYPES.SET_WATCHLIST_FROM_DB,
  payload: companyInfo
});

export const setPortfolioFromDatabase = companyInfo => ({
  type: TYPES.SET_PORTFOLIO_FROM_DB,
  payload: companyInfo
});
  
export const removeCompanyFromWatchList = updatedWatchList => ({
    type: TYPES.REMOVE_COMPANY_WATCHLIST,
    payload: updatedWatchList
})

export const setMarketMovers = moversList => ({
  type: TYPES.SET_MARKET_MOVERS,
  payload: moversList
})

export default {
  setResearchCompany,
  addCompanyToWatchlist,
  setWatchlistFromDatabase,
  setPortfolioFromDatabase,
  removeCompanyFromWatchList,
  setMarketMovers
}