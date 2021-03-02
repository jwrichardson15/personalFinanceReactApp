import './App.css';
import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebaseSetup from './Firestore/firebaseSetup.js';

import { Button, Toolbar } from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
import 'typeface-roboto';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SummaryContainer from './Components/SummaryContainer.js';
import PortfolioContainer from './Components/PortfolioContainer.js';
import ResearchContainer from './Components/ResearchContainer.js';
import WatchListContainer from './Components/WatchListContainer.js';

function App( {signInWithGoogle, signOut, user} ) {

  return (
    <div className="App">
      {user ? 
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
                  {user.displayName}
                </div>
                <div className="toolbar-btn" style={{float: 'right', width: '80px'}}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => signOut()}
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
                onClick={() => signInWithGoogle()}
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

export default withFirebaseAuth({
  providers: firebaseSetup.providers,
  firebaseAppAuth: firebaseSetup.firebaseAppAuth,
})(App);


{/* <Router>
<div className='perm-nav-bar'>
  <div>
    <List component="nav">
    <div className="navbar-group-header">Investing</div>
      <ListItem className="navbar-list-item">
      <Link to="/finance" className="navbar-tab">Summary</Link>
      </ListItem>
      <ListItem className="navbar-list-item">
      <Link to="/finance/portfolio" className="navbar-tab">Portfolio</Link>
      </ListItem>
      <ListItem className="navbar-list-item">
      <Link to="/finance/company" className="navbar-tab">Research</Link>
      </ListItem>
      <ListItem className="navbar-list-item">
          <Link to="/finance/watchlist" className="navbar-tab">Watch List</Link>
      </ListItem>
    </List>
  </div>
  <List component="nav">
      <div className="navbar-group-header" >Budgeting</div>
      <ListItem className="navbar-list-item">
      <Link to="/budget" className="navbar-tab">Summary</Link>
      </ListItem>
      <ListItem className="navbar-list-item">
      <Link to="/budget/monthly" className="navbar-tab">Monthly Budget</Link>
      </ListItem>
      <ListItem className="navbar-list-item">
      <Link to="/budget/expenses" className="navbar-tab">Expenses</Link>
      </ListItem>
      <ListItem className="navbar-list-item">
          <Link to="/budget/goals" className="navbar-tab">Savings Goals</Link>
      </ListItem>
  </List>
</div>
<div className='perm-non-nav'>
    <NavBar showDrawer = {showDrawer} setShowDrawer = {setShowDrawer}/>
    <Switch>
      <Route path="/finance/portfolio" component={PortfolioContainer}/>
      <Route path="/finance/company" component={ResearchContainer}/>
      <Route path="/finance/watchlist" component={WatchListContainer}/>
      <Route path="/finance" component={SummaryContainer}/>

      <Route path="/budget/goals" component={PortfolioContainer}/>
      <Route path="/budget/monthly" component={ResearchContainer}/>
      <Route path="/budget/expenses" component={Expenses}/>
      <Route path="/budget" component={BudgetSummary}/>
    </Switch>
</div>
</Router> */}