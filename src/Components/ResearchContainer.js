import CompanyFinancials from './CompanyFinancials.js';
import React from "react";
import connect from "react-redux/es/connect/connect";
import operations from '../redux/operations.js';


class ResearchContainer extends React.Component {

    render() {
        return <CompanyFinancials {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        researchCompany: state.financials.researchCompany
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchCompany: (ticker) => {
            dispatch(operations.getAndSetResearchCompany(ticker))
        },
        getResearchCompany: (ticker) => {
            dispatch(operations.getResearchCompany(ticker))
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(ResearchContainer);