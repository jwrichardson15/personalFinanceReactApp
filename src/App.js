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
import MainContainer from './MainContainer.js';

function App( {signInWithGoogle, signOut, user} ) {

  return (
    <MainContainer user={user} signOut={signOut} signInWithGoogle={signInWithGoogle}/>
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