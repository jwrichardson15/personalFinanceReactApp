import '../App.css';
import React from 'react';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import yahooConstants from '../Vendors/YahooFinance/yahooConstants.js';
import financeTestData from '../financeTestData.js';

class Portfolio extends React.Component {

    render() {
        const {
            portfolio
            } = this.props
        

        function createData(ticker, shareQuantity, marketPrice, dailyChange, costBasis, profitLoss) {
            return { ticker, shareQuantity, marketPrice, dailyChange, costBasis, profitLoss };
        }
        
        let rows = []
        if (portfolio && portfolio.length != 0) {
            portfolio.forEach((company) => {
                let rowData = createData(company.ticker, company.shares, company.marketPrice, company.dailyChange, company.costBasis, company.profitLoss)
                rows.push(rowData);
            });
        } else {
            rows = financeTestData.portfolioData
        }

        return (
            <div className="generalPage">
                <h2 className="pageHeader" style={{margin: '50px 50px'}}>Personal Portfolio</h2>
                <Grid container spacing={0} className="gridParent">
                    <Grid item xs={12} style={{margin: '0 100px 0 100px'}}>
                        <div className="generalGrid-container">
                            <TableContainer className="portfolio-table-container">
                                <Table aria-label="simple table">
                                    <TableHead>
                                    <TableRow style={{backgroundColor: '#20232a'}}>
                                        <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.portfolioHeaders[0]}</TableCell>
                                        <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.portfolioHeaders[1]}</TableCell>
                                        <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.portfolioHeaders[2]}</TableCell>
                                        <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.portfolioHeaders[3]}</TableCell>
                                        <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.portfolioHeaders[4]}</TableCell>
                                        <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.portfolioHeaders[5]}</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.ticker}>
                                        <TableCell align="right">{row.ticker}</TableCell>
                                        <TableCell align="right">{row.shareQuantity}</TableCell>
                                        <TableCell align="right">{row.marketPrice}</TableCell>
                                        <TableCell align="right">{row.dailyChange}</TableCell>
                                        <TableCell align="right">{row.costBasis}</TableCell>
                                        <TableCell align="right">{row.profitLoss}</TableCell>
                                        </StyledTableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                                </TableContainer>
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

export default Portfolio;