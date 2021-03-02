import InvestingSummary from './InvestingSummary.js';
import React from "react";
import connect from "react-redux/es/connect/connect";
import operations from '../redux/operations.js';


class SummaryContainer extends React.Component {

    componentDidMount() {
        this.props.getWatchListFromDatabase();
        this.props.getPortfolioFromDatabase();
    }

    render() {
        return <InvestingSummary {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        portfolio: state.financials.portfolio,
        watchList: state.financials.watchList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchCompany: (ticker) => {
            dispatch(operations.getAndSetResearchCompany(ticker))
        },
        getResearchCompany: (ticker) => {
            dispatch(operations.getResearchCompany(ticker))
        },
        getWatchListFromDatabase: () => {
            dispatch(operations.setWatchListFromDatabase());
        },
        getPortfolioFromDatabase: () => {
            dispatch(operations.setPortfolioFromDatabase());
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);