import '../../App.css';
import { Formik } from 'formik';
import React from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
        
class TicketInputSearch extends React.Component {

  //TODO add hook to manage submitting state

  render() {

    const {
      researchCompany
    } = this.props

    return (
      <div> 
        <Formik className="ticker-input" initialValues={{ tickerInput: '' }} 
          validate={values => validateTicker(values)} validateOnChange={false} validateOnBlur={false}
          onSubmit={(values, { setSubmitting }) => {
            // setSubmitting(true);
              this.props.searchCompany(values.tickerInput.toUpperCase())
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="generalGrid-container" style={{padding: '10px 0 10px 15px'}}>
                <TextField className="tickerInput" size="small" label="Ticker" variant="outlined" name="tickerInput"
                  value={values.tickerInput} onChange={handleChange}/>
                <Button 
                  className="tickerSearchBtn" 
                  variant="contained"
                  color="primary"
                  type="submit" 
                  // onClick={() => this.props.searchCompany(values.tickerInput.toUpperCase())}
                >
                  <SearchIcon style={{width: '1em', height: '1em'}} />
                </Button>
              </div>
              <div className="form-error" style={{paddingTop: '5px'}}>{errors.tickerInput}</div>
            </form>
          )}
        </Formik>
      </div>
    )
  }
}

function validateTicker(values) {
  const errors = {};

  if (!values.tickerInput) {
      errors.tickerInput = 'Required';
  } else if (
      !/^[a-zA-Z]{2,4}$/i.test(values.tickerInput)
  ) {
    errors.tickerInput = 'Invalid Ticker, Try Again';
  }

  return errors;
}

export default TicketInputSearch;