import '../App.css';
import React from 'react';
import { Button } from '@material-ui/core';
import StorageIcon from '@material-ui/icons/Storage';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import yahooConstants from '../Vendors/YahooFinance/yahooConstants.js';
import TicketInputSearch from './SharedComponents/TicketInputSearch.js';

const styles = {
  addToWatchList: {
    backgroundColor: 'rgba(0, 0, 0, 0.72)'
  }
}

function createData(ticker, currentPrice, dailyChange, dailyRange, marketCap) {
  // Formmatting api response for table
  currentPrice = `$${currentPrice}`
  marketCap = `$${marketCap}`
  return { ticker, currentPrice, dailyChange, dailyRange, marketCap };
}

class WatchList extends React.Component {

  render() {
    const {
      watchList
    } = this.props

    let rows = [];
    if (watchList && watchList.length != 0) {
      watchList.forEach((company) => {
          let rowData = createData(company.ticker, company.marketPrice, company.dailyChange, company.dailyRange, company.marketCap)
          rows.push(rowData);
        });
    }

  return (
    <div className="generalPage" style={{display: 'block'}}>
      <h2 className="pageHeader" style={{margin: '50px 50px'}}>Watch List</h2>
      <div style={{float:'left', width: '78%'}}>
        {watchList.length != 0 ?
          <div className="generalGrid-container" style={{margin: '0 20px 0 60px'}}>
            <TableContainer className="workout-table-container">
            <Table aria-label="simple table" style={{borderRadius: '5px'}}>
              <TableHead>
                <TableRow style={{backgroundColor: '#20232a'}}>
                  <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.watchListHeaders[0]}</TableCell>
                  <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.watchListHeaders[1]}</TableCell>
                  <TableCell style={{color: '#ffffff'}}  align="right">{yahooConstants.watchListHeaders[2]}</TableCell>
                  <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.watchListHeaders[3]}</TableCell>
                  <TableCell style={{color: '#ffffff'}} align="right">{yahooConstants.watchListHeaders[4]}</TableCell>
                  <TableCell style={{color: '#ffffff'}} align="right">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow key={row.ticker}>
                    <TableCell align="right">{row.ticker}</TableCell>
                    <TableCell align="right">{row.currentPrice}</TableCell>
                    <TableCell align="right" style={row.dailyChange.includes("-") ? {color: 'red'} : {color: 'green'}}>{row.dailyChange}</TableCell>
                    <TableCell align="right">{row.dailyRange}</TableCell>
                    <TableCell align="right">{row.marketCap}</TableCell>
                    <TableCell align="right">
                      <Button className="watchList-remove-btn" type="submit" 
                        onClick={() => this.props.removeFromWatchList(row.ticker.toUpperCase())}
                      > X
                      </Button>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
              </Table>
            </TableContainer>
          </div>
          :
          <div>
            <h2 style={{textAlign: 'center', marginLeft: '200px'}}>Start a Watch List</h2>
            <div style={{margin: '200px 0 0 200px'}}>
              <div style={{textAlign: 'center'}}>
              <StorageIcon style={{height: '150px', width: '150px'}}/>
              </div>
              <div style={{textAlign: 'center', marginTop: '50px'}}>
                Your Watch List is empty! Start searching companies by ticker to build one.
              </div>
            </div>
          </div>
        }
      </div>

      <div style={{float:'left', width: '22%'}}>
          <div className="companySearch-research">
            <div className="rightSideGrid-watchList-header">
              Add To List
            </div>
            <div>            
              <TicketInputSearch {...this.props}/>
            </div>
          </div>
        </div>
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

function validateTicker(values) {
  console.error('VALIDATE')
  console.error(values)

  const errors = {};
          if (!values.tickerInput) {
            errors.tickerInput = 'Required';
          } else if (
            !/^[a-zA-Z]{2,4}$/i.test(values.tickerInput)
          ) {
            errors.tickerInput = 'Invalid Ticker, Try Again';
          }
          console.error(errors)

          return errors;
}

export default withStyles(styles)(WatchList);