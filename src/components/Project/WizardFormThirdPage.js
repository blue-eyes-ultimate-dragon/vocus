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
  const { handleSubmit, pristine, previousPage, submitting } = props
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

      <div>
        <label>Favorite Color</label>
        <Field name="favoriteColor" component={renderColorSelector}/>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox"/>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes"/>
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  validate
})(WizardFormThirdPage)
