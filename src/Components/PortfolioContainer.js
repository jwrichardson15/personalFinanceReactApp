import Portfolio from './Portfolio.js';
import React from "react";
import connect from "react-redux/es/connect/connect";
import operations from '../redux/operations.js';


class PortfolioContainer extends React.Component {

    componentDidMount() {
        this.props.getPortfolioFromDatabase();
    }

    componentDidUpdate(prevProps) {
        if (this.props.portfolio.length !== prevProps.portfolio.length) {
            this.props.getPortfolioFromDatabase();
        }
    }
    render() {
        return <Portfolio {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        portfolio: state.financials.portfolio
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
        getPortfolioFromDatabase: () => {
            dispatch(operations.setPortfolioFromDatabase());
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);