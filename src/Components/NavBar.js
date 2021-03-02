import '../App.css';
import React, { useState, Component } from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';
import 'typeface-roboto';
import { Link} from 'react-router-dom';

class NavBar extends Component {

    // Component currently Not In Use

    render() {
        const {
            showDrawer,
            setShowDrawer
        } = this.props;

        return (
            <div>
                <Drawer
                    open={showDrawer}
                    anchor='right'
                    onClose={() => setShowDrawer(!showDrawer)}>
                    <List component="nav">
                        <div className="navbar-group-header">Investing</div>
                        <ListItem className="navbar-list-item">
                        <Link to="/finance" onClick={() => setShowDrawer(!showDrawer)} className="navbar-tab">Summary</Link>
                        </ListItem>
                        <ListItem className="navbar-list-item">
                        <Link to="/finance/portfolio" onClick={() => setShowDrawer(!showDrawer)} className="navbar-tab">Portfolio</Link>
                        </ListItem>
                        <ListItem className="navbar-list-item">
                        <Link to="/finance/company" onClick={() => setShowDrawer(!showDrawer)} className="navbar-tab">Research</Link>
                        </ListItem>
                        <ListItem className="navbar-list-item">
                            <Link to="/finance/watchlist" onClick={() => setShowDrawer(!showDrawer)} className="navbar-tab">Watch List</Link>
                        </ListItem>
                    </List>
                    <List component="nav">
                        <div className="navbar-group-header" >Budgeting</div>
                        <ListItem className="navbar-list-item">
                        <Link to="/budget" onClick={() => setShowDrawer(!showDrawer)} className="navbar-tab">Summary</Link>
                        </ListItem>
                        {/* <ListItem className="navbar-list-item">
                        <Link to="/budget/monthly" onClick={() => setShowDrawer(!showDrawer)} className="navbar-tab">Monthly Budget</Link>
                        </ListItem> */}
                        <ListItem className="navbar-list-item">
                        <Link to="/budget/expenses" onClick={() => setShowDrawer(!showDrawer)} className="navbar-tab">Expenses</Link>
                        </ListItem>
                        <ListItem className="navbar-list-item">
                            <Link to="/budget/goals" onClick={() => setShowDrawer(!showDrawer)} className="navbar-tab">Savings Goals</Link>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default NavBar;