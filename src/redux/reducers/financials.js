import TYPES from "../actionTypes";

const initialState = {
  user: {},
  researchCompany: {},
  watchList: [],
  portfolio: [],
  marketMovers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
    case TYPES.SET_RESEARCH_COMPANY: {
      return {
        ...state,
        researchCompany: action.payload
      };
    }
    case TYPES.ADD_COMPANY_WATCHLIST: {
      return {
        ...state,
        watchList: [...state.watchList, action.payload]
      };
    }
    case TYPES.REMOVE_COMPANY_WATCHLIST: {
      return {
        ...state,
        watchList: action.payload
      };
    }
    case TYPES.SET_WATCHLIST_FROM_DB: {
      return {
        ...state,
        watchList: action.payload
      };
    }
    case TYPES.SET_PORTFOLIO_FROM_DB: {
      return {
        ...state,
        portfolio: action.payload
      };
    }
    case TYPES.ADD_COMPANY_PORTFOLIO: {
        return {
          ...state,
          portfolio: [...state.portfolio, action.payload]
        };
      }
    case TYPES.SET_MARKET_MOVERS: {
      return {
        ...state,
        marketMovers: action.payload
      };
    }
    default:
      return state;
    }
}