import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
const colors = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ]
import { Progress, InputGroup, InputGroupAddon, Col, Label, Form, FormGroup, Input, Button, FormFeedback, Alert } from 'reactstrap';


const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

const WizardFormThirdPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting, submitState } = props
  return (
    <form onSubmit={handleSubmit}>

      <div className="text-center">Almost there!</div>
      <Progress multi>
        <Progress bar animated color="success" value="25">The Idea</Progress>
        <Progress bar animated color="success" value="25">The Community</Progress>
        <Progress bar animated color="success" value="25">Marketing</Progress>
        <Progress bar animated color="info" value="25">Go!</Progress>
      </Progress>

      <p>
      </p>

      <label htmlFor="council">Online and Social Media</label>

      <InputGroup>
        <InputGroupAddon>Website </InputGroupAddon>
        <Input placeholder="https://vocus.com" />
      </InputGroup>
      <p>
      </p>
      <InputGroup>
        <InputGroupAddon>Facebook</InputGroupAddon>
        <Input placeholder="https://www.facebook.com/GovHackAU/" />
      </InputGroup>
      <p>
      </p>
      <InputGroup>
        <InputGroupAddon>Twitter  </InputGroupAddon>
        <Input placeholder="@GovHackAU" />
      </InputGroup>
      <p>
      </p>
      <InputGroup>
        <InputGroupAddon>Youtube  </InputGroupAddon>
        <Input placeholder="https://www.youtube.com/user/GovHackAustralia" />
      </InputGroup>

      <p>
      </p>

      <div>
        <Button color="primary" type="button" className="previous" onClick={previousPage}>Previous </Button>
        <Button color="primary" type="submit" disabled={pristine || submitting}>
          { submitState ? <span> <i className="fa fa-refresh fa-spin" /> </span> : 'Submit' }
        </Button>
      </div>
    </form>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  validate
})(WizardFormThirdPage)
