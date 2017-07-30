import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderInput from './renderInput'
import { Progress, InputGroup, InputGroupAddon, Col, Label, Form, FormGroup, Input, Button, FormFeedback, Alert } from 'reactstrap';


const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const WizardFormSecondPage = (props) => {
  const { handleSubmit, previousPage, submitState } = props
  return (
    <form onSubmit={handleSubmit}>

      <div className="text-center">What are you waiting for?</div>
      <Progress multi>
        <Progress bar animated color="success" value="25">The Idea</Progress>
        <Progress bar animated color="success" value="25">The Community</Progress>
        <Progress bar animated color="info" value="25">Marketing</Progress>
        <Progress bar animated color="info" value="25">Go!</Progress>
      </Progress>

      <p>
      </p>


      <FormGroup>

      <label htmlFor="council">Local Council Name</label>
      <Field name="council" component={renderInput} type="text" placeholder="Who are you going to help?" />

      </FormGroup>

      <FormGroup>

        <label htmlFor="sponsor">Council Member </label>
        <Field name="sponsor" component={renderInput} type="text" placeholder="Council Member Name and Contact" />

      </FormGroup>



      <div>
        <Button color="primary" type="button" className="previous" onClick={previousPage}>Previous </Button>
        <Button color="primary" type="submit">
          { submitState ? <span> <i className="fa fa-refresh fa-spin" /> </span> : 'Next' }
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard',  //Form name is same
  destroyOnUnmount: false,
  validate
})(WizardFormSecondPage)
