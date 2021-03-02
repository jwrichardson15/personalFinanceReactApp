import '../App.css';
import React from 'react';
import { Grid } from '@material-ui/core';
import Loader from "react-loader-spinner";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import yahooConstants from '../Vendors/YahooFinance/yahooConstants.js';
import TwitterWidget from './SharedComponents/TwitterWidget.js';
import LoadingSpinner from './SharedComponents/LoadingSpinner.js';
import MarketTicker from './SharedComponents/MarketTicker.js';

class InvestingSummary extends React.Component {

    // TODO display <LoadingSpinner/> when components are loading

    render() {
        const {
            watchList,
            portfolio
            } = this.props
        
        function createPortfolioData(ticker, shares, marketPrice, dailyChange, costBasis, profitLoss) {
            return { ticker, shares, marketPrice, dailyChange, costBasis, profitLoss };
        }

        function createWatchListData(ticker, marketPrice, dailyChange) {
        return { ticker, marketPrice, dailyChange };
        }
        
        let rows = []
        if (portfolio && portfolio.length != 0) {
            portfolio.forEach((company) => {
                let rowData = createPortfolioData(company.ticker, company.shares, company.marketPrice, company.dailyChange, company.costBasis, company.profitLoss)
                rows.push(rowData);
            });
        }

        let watchListRows = [];
        if (watchList && watchList.length != 0) {
            watchList.forEach((company) => {
            let rowData = createWatchListData(company.ticker, company.marketPrice, company.dailyChange, company.dailyRange, company.marketCap)
            watchListRows.push(rowData);
            });
        }

        return (
            <div className="generalPage">
                <h2 className="pageHeader" style={{margin: '50px 50px'}}>Investing Summary</h2>
                <Grid container spacing={1} className="gridParent">
                    <Grid item xs={3}>
                        <div className="generalGrid-container" style={{margin: '0 10px 0 20px'}}>
                            {watchList.length != 0 ?    
                                <TableContainer className="portfolio-table-container">
                                    <Table aria-label="simple table">
                                        <TableHead>
                                        <TableRow style={{backgroundColor: '#20232a'}}>
                                            <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.shortWatchListHeaders[0]}</TableCell>
                                            <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.shortWatchListHeaders[1]}</TableCell>
                                            <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.shortWatchListHeaders[2]}</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {watchListRows.map((row) => (
                                            <StyledTableRow key={row.ticker}>
                                            <TableCell align="right">{row.ticker}</TableCell>
                                            <TableCell align="right">{row.marketPrice}</TableCell>
                                            <TableCell align="right">{row.dailyChange}</TableCell>
                                            </StyledTableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            :
                                <div>Your watch list is empty!</div>
                            }
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="generalGrid-container" style={{margin: '0 10px 0 10px'}}>
                            <TableContainer className="portfolio-table-container">
                                <Table aria-label="simple table">
                                    <TableHead>
                                    <TableRow style={{backgroundColor: '#20232a'}}>
                                        <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.portfolioHeaders[0]}</TableCell>
                                        <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.portfolioHeaders[1]}</TableCell>
                                        <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.portfolioHeaders[2]}</TableCell>
                                        <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.portfolioHeaders[4]}</TableCell>
                                        <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.portfolioHeaders[5]}</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.ticker}>
                                        <TableCell align="right">{row.ticker}</TableCell>
                                        <TableCell align="right">{row.shares}</TableCell>
                                        <TableCell align="right">{row.marketPrice}</TableCell>
                                        <TableCell align="right">{row.costBasis}</TableCell>
                                        <TableCell align="right">{row.profitLoss}</TableCell>
                                        </StyledTableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                                </TableContainer>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div style={{margin: '0 20px 0 10px'}}>
                            <TwitterWidget/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
  }

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
      },
    },
  }))(TableRow);

export default InvestingSummary;