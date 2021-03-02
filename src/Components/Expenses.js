import '../App.css';
import { Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import budgetConstants from '../budgetConstants.js';

const styles = {
  addToWatchList: {
    backgroundColor: 'rgba(0, 0, 0, 0.72)'
  }
}

function createData(ticker, shareCount, currentPrice, costBasis, profitLoss) {
  return { ticker, shareCount, currentPrice, costBasis, profitLoss };
}

const Expenses = (props) => {

  const {
    classes,
  } = props;

  const rows = [
    createData('Jan 07, 21', 'Nissan', 'Car', '$250.24'),
    createData('Jan 09, 21', 'Whole Foods', 'Groceries', '$250.24'),
    createData('Jan 11, 21', 'Amazon', 'Shopping', '$250.24'),
  ];

  return (
    <div className="generalPage" style={{display: 'block'}}>
      <div style={{marginLeft: '10%', width: '75%'}}>
          <h2 className="pageHeader">Expenses</h2>
          <TableContainer className="workout-table-container">
          <Table aria-label="simple table" style={{borderRadius: '5px'}}>
              <TableRow style={{backgroundColor: '#20232a'}}>
                <TableCell  style={{color: '#ffffff', width: '250px', textAlign: 'center'}} align="right">{budgetConstants.expensesHeaders[0]}</TableCell>
                <TableCell  style={{color: '#ffffff', width: '250px', textAlign: 'center'}} align="right">{budgetConstants.expensesHeaders[1]}</TableCell>
                <TableCell style={{color: '#ffffff', width: '250px', textAlign: 'center'}}  align="right">{budgetConstants.expensesHeaders[2]}</TableCell>
                <TableCell style={{color: '#ffffff', width: '250px', textAlign: 'center'}} align="right">{budgetConstants.expensesHeaders[3]}</TableCell>
              </TableRow>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <TableCell align="right" style={{textAlign: 'center'}}>{row.ticker}</TableCell>
                  <TableCell align="right" style={{textAlign: 'center'}}>{row.shareCount}</TableCell>
                  <TableCell align="right" style={{textAlign: 'center'}}>{row.currentPrice}</TableCell>
                  <TableCell align="right" style={{textAlign: 'center'}}>{row.costBasis}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            </Table>
          </TableContainer>
      </div>
    </div>
    );
  }

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export default withStyles(styles)(Expenses);