import React from "react";
import connect from "react-redux/es/connect/connect";
import operations from './redux/operations.js';

import { Button, Toolbar } from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
import 'typeface-roboto';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SummaryContainer from './Components/SummaryContainer.js';
import PortfolioContainer from './Components/PortfolioContainer.js';
import ResearchContainer from './Components/ResearchContainer.js';
import WatchListContainer from './Components/WatchListContainer.js';


class MainContainer extends React.Component {

    componentDidUpdate(prevProps) {
      //Store firestore user in redux if they have logged in
        if (this.props.user !== prevProps.user) {
            this.props.setUser(this.props.user)
        }
    }
    
    render() {
        return (
            <div className="App">
              {this.props.user ? 
              <div>
                <Router>
                  <Toolbar className="mainToolbar">
                    <div style={{width: '100%', display: 'block'}}>
                      <div style={{float: 'left', width:'82%'}}>
                        <div style={{marginLeft: '40%', paddingTop: '10px'}}>
                          <div style={{float: 'left', width:'150px'}}>
                          <Link to="/finance" className="navbar-tab">Summary</Link>
                          </div>
                          <div style={{float: 'left', width:'150px'}}>
                          <Link to="/finance/portfolio" className="navbar-tab">Portfolio</Link>
                          </div>
                          <div style={{float: 'left', width:'150px'}}>
                          <Link to="/finance/company" className="navbar-tab">Research</Link>
                          </div>
                          <div style={{float: 'left', width:'150px'}}>
                          <Link to="/finance/watchlist" className="navbar-tab">Watch List</Link>
                          </div>
                        </div>
                      </div>
                      <div style={{float: 'right', width: '18%', minWidth: '250px'}}>
                        <div className="navbar-tab" style={{float: 'left', paddingTop: '10px', color: '#d5dae0'}}>
                          {this.props.user.displayName}
                        </div>
                        <div className="toolbar-btn" style={{float: 'right', width: '80px'}}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>this.props.signOut()}
                          >
                            LOGOUT
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Toolbar>
                  <div className='perm-whole-page'>
                      <Switch>
                          <Route path="/finance/portfolio" component={PortfolioContainer}/>
                          <Route path="/finance/company" component={ResearchContainer}/>
                          <Route path="/finance/watchlist" component={WatchListContainer}/>
                          <Route path="/finance" component={SummaryContainer}/>
                      </Switch>
                  </div>
                </Router>
              </div>
              :
              <div>
                <Toolbar className="mainToolbar">
                    <div className="toolbar-button-parent">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.props.signInWithGoogle()}
                        >
                          LOGIN
                      </Button>
                    </div>
                </Toolbar>
                <div className='perm-whole-page'>
                  <div style={{textAlign: 'center'}}>
                    <h2 style={{marginTop: '5%'}}>Login to get started!</h2>
                    <AssessmentIcon 
                     style={{marginTop: '5%', width: '10em', height: '10em'}} 
                    />
                  </div>
                </div>
              </div>
              }
            </div>
            );
    }
}

const mapStateToProps = state => {
    return {
        storedUser: state.financials.user,
        portfolio: state.financials.portfolio,
        watchList: state.financials.watchList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUser: (user) => {
            dispatch(operations.setUserFromAuth(user))
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);