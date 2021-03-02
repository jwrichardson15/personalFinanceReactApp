import WatchList from './WatchList.js';
import React from "react";
import connect from "react-redux/es/connect/connect";
import operations from '../redux/operations.js';


class WatchListContainer extends React.Component {

    componentDidMount() {
        this.props.getWatchListFromDatabase();
    }

    componentDidUpdate(prevProps) {
        if (this.props.watchList.length !== prevProps.watchList.length) {
            this.props.getWatchListFromDatabase();
        }
    }

    render() {
        return <WatchList {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        watchList: state.financials.watchList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchCompany: (ticker) => {
            dispatch(operations.addToWatchList(ticker))
        },
        removeFromWatchList: (ticker) => {
            dispatch(operations.removeFromWatchList(ticker))
        },
        getWatchListFromDatabase: () => {
            dispatch(operations.setWatchListFromDatabase());
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(WatchListContainer);