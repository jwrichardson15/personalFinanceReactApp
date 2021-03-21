import '../App.css';
import '../styles/CompanyFinancials.css';
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TicketInputSearch from './SharedComponents/TicketInputSearch.js';
import yahooConstants from '../Vendors/YahooFinance/yahooConstants.js';


class CompanyFinancials extends React.Component {

  constructor(props) {
    super(props);
    // TODO use this to create loading state or replace with a hook
    this.state = {loading: false};
  }

  render() {
    const {
      researchCompany
    } = this.props

  let ticker;
  let financialData;
  let keyStats;
  let priceInfo;
  let dayPositive = true

  if (Object.keys(researchCompany != 0)) {
    ticker = researchCompany.symbol;
    financialData = researchCompany.financialData
    keyStats = researchCompany.defaultKeyStatistics
    priceInfo = researchCompany.price

    if (researchCompany.price && researchCompany.price.regularMarketChange.raw < 0) {
      dayPositive = false
    }
  }

  return (
    <div className="generalPage">
    {researchCompany && Object.keys(researchCompany).length != 0 ?
    <div>
      <div style={{marginLeft: '5%', marginBottom: '50px', marginTop: '-20px'}}>
        <div style={{float: 'left', width:'77%'}}>
          <h2 className="pageHeader" style={{marginLeft: '26%'}}>{`${ticker} Financials`}</h2>
            <div style={{marginLeft: '57%', display: 'block', fontSize: '1.2em', fontWeight: 'bold'}}>
              <div style={{float: 'left'}}>{` $${priceInfo.regularMarketPrice.fmt}`}</div>
              {dayPositive ?
              <div style={{float: 'left', paddingLeft: '15px', color: 'green'}}>{priceInfo.regularMarketChangePercent.fmt}</div>
              :
              <div style={{float: 'left', paddingLeft: '15px', color: 'red'}}>{priceInfo.regularMarketChangePercent.fmt}</div>
              }
            </div>
        </div>
        <div style={{float: 'right', width: '20%', marginRight: '3%', minWidth: '275px'}}>
          <div style={{textAlign: 'center'}}>
          <TicketInputSearch {...this.props}/>
          </div>
        </div>
      </div>

      <div>
      <Grid container spacing={2} className="gridParent" style={{marginBottom: '5em'}}>
        <Grid item xs style={{margin: '0 3em 0 3em'}}>
          <div className="generalGrid-container">
            <TableContainer className="financialSummaryTable">
              <Table aria-label="simple table">
                <TableBody>
                    <TableRow style={{backgroundColor: '#292F33'}}>
                      <TableCell align="left" style={{color: '#ffffff', fontWeight: '500'}}>Price Targets</TableCell>
                      <TableCell align="right" style={{color: '#ffffff'}}></TableCell>
                      <TableCell align="left" style={{color: '#ffffff'}}></TableCell>
                      <TableCell align="right" style={{color: '#ffffff'}}></TableCell>
                    </TableRow>
                  <TableRow style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
                    <TableCell align="left">Recommendation</TableCell>
                    <TableCell align="right">{financialData.recommendationKey.toUpperCase()}</TableCell>
                    <TableCell align="left">Mean Target</TableCell>
                    <TableCell align="right">{financialData.targetMeanPrice.fmt}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">High Target</TableCell>
                    <TableCell align="right">{financialData.targetHighPrice.fmt}</TableCell>
                    <TableCell align="left">Low Target</TableCell>
                    <TableCell align="right">{financialData.targetLowPrice.fmt}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="gridParent">
          <Grid item xs style={{margin: '0 1.5em 0 3em'}}>
            <div className="generalGrid-container">
              <TableContainer className="financialSummaryTable">
                <Table aria-label="simple table">
                    <TableRow style={{backgroundColor: '#292F33'}}>
                        <TableCell align="left" style={{color: '#ffffff', fontWeight: '500'}}>Summary</TableCell>
                        <TableCell align="right" style={{color: '#ffffff'}}></TableCell>
                        <TableCell align="left" style={{color: '#ffffff'}}></TableCell>
                        <TableCell align="right" style={{color: '#ffffff'}}></TableCell>
                    </TableRow>
                  <TableBody>
                    <TableRow style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
                      <TableCell align="left">{yahooConstants.researchSummaryHeaders[0]}</TableCell>
                      <TableCell align="right">{keyStats.enterpriseValue.fmt}</TableCell>
                      <TableCell align="left">{yahooConstants.researchSummaryHeaders[1]}</TableCell>
                      <TableCell align="right">{keyStats.enterpriseToEbitda.fmt}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">{yahooConstants.researchSummaryHeaders[2]}</TableCell>
                      <TableCell align="right">{keyStats.beta.fmt}</TableCell>
                      <TableCell align="left">{yahooConstants.researchSummaryHeaders[3]}</TableCell>
                      <TableCell align="right">{keyStats.bookValue.fmt}</TableCell>
                    </TableRow>
                    <TableRow style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
                      <TableCell align="left">{yahooConstants.researchSummaryHeaders[4]}</TableCell>
                      <TableCell align="right">{keyStats.heldPercentInsiders.fmt}</TableCell>
                      <TableCell align="left">{yahooConstants.researchSummaryHeaders[5]}</TableCell>
                      <TableCell align="right">{keyStats.heldPercentInstitutions.fmt}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">{yahooConstants.researchSummaryHeaders[6]}</TableCell>
                      <TableCell align="right">{keyStats.sharesOutstanding.fmt}</TableCell>
                      <TableCell align="left">{yahooConstants.researchSummaryHeaders[7]}</TableCell>
                      <TableCell align="right">{keyStats.floatShares.fmt}</TableCell>
                    </TableRow>
                    <TableRow style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
                      <TableCell align="left">{yahooConstants.researchSummaryHeaders[8]}</TableCell>
                      <TableCell align="right">{keyStats.sharesShort.fmt}</TableCell>
                      <TableCell align="left">{yahooConstants.researchSummaryHeaders[9]}</TableCell>
                      <TableCell align="right">{keyStats.shortRatio.fmt}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>

        <Grid item xs style={{margin: '0 3em 0 1.5em'}}>
            <div className="generalGrid-container">
            <TableContainer className="financialSummaryTable">
              <Table aria-label="simple table">
                <TableBody>
                    <TableRow style={{backgroundColor: '#292F33'}}>
                      <TableCell align="left" style={{color: '#ffffff', fontWeight: '500'}}>Key Metrics</TableCell>
                      <TableCell align="right" style={{color: '#ffffff'}}></TableCell>
                      <TableCell align="left" style={{color: '#ffffff'}}></TableCell>
                      <TableCell align="right" style={{color: '#ffffff'}}></TableCell>
                    </TableRow>
                  <TableRow style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
                    <TableCell align="left">{yahooConstants.researchMetricHeaders[0]}</TableCell>
                    <TableCell align="right">{financialData.earningsGrowth.fmt}</TableCell>
                    <TableCell align="left">{yahooConstants.researchMetricHeaders[1]}</TableCell>
                    <TableCell align="right">{financialData.currentPrice.fmt}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">{yahooConstants.researchMetricHeaders[2]}</TableCell>
                    <TableCell align="right">{financialData.ebitda.fmt}</TableCell>
                    <TableCell align="left">{yahooConstants.researchMetricHeaders[3]}</TableCell>
                    <TableCell align="right">{financialData.debtToEquity.fmt}</TableCell>
                  </TableRow>
                  <TableRow style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
                    <TableCell align="left">{yahooConstants.researchMetricHeaders[4]}</TableCell>
                    <TableCell align="right">{financialData.profitMargins.fmt}</TableCell>
                    <TableCell align="left">{yahooConstants.researchMetricHeaders[5]}</TableCell>
                    <TableCell align="right">{financialData.totalCash.fmt}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">{yahooConstants.researchMetricHeaders[6]}</TableCell>
                    <TableCell align="right">{financialData.totalDebt.fmt}</TableCell>
                    <TableCell align="left">{yahooConstants.researchMetricHeaders[7]}</TableCell>
                    <TableCell align="right">{financialData.totalRevenue.fmt}</TableCell>
                  </TableRow>
                  <TableRow style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
                    <TableCell align="left">{yahooConstants.researchMetricHeaders[8]}</TableCell>
                    <TableCell align="right">{financialData.revenueGrowth.fmt}</TableCell>
                    <TableCell align="left">{yahooConstants.researchMetricHeaders[9]}</TableCell>
                    <TableCell align="right">{financialData.revenuePerShare.fmt}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      </Grid>
      </div>
    </div>

    :
    
      <div style={{marginTop: '50px'}}>
        <h2 className="pageHeader">Research A Company</h2>
        <div className="financials-companySearch-container">
          <div className="financials-companySearch">
            <div className="rightSideGrid-watchList-header">Search By Ticker</div>
            <TicketInputSearch {...this.props}/>
          </div>
          </div>
      </div>
    }
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

export default CompanyFinancials;