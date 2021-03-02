import TYPES from "../actionTypes";

const initialState = {
    researchCompany: {},
    watchList: [],
    portfolio: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case TYPES.RESEARCH_COMPANY: {
        const { financials } = action.payload;
        return {
          ...state,
          researchCompany: {financials}
        };
      }
      case TYPES.ADD_COMPANY_WATCHLIST: {
        const { company } = action.payload;
        return {
          ...state,
          watchList: [...state.watchList, company]
        };
      }
      case TYPES.ADD_COMPANY_PORTFOLIO: {
          const { company } = action.payload;
          return {
            ...state,
            portfolio: [...state.portfolio, company]
          };
        }
      default:
        return state;
    }
}