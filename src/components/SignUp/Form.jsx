import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Input, Button, FormFeedback, Alert } from 'reactstrap';
import cx from 'classnames';

class renderInput extends React.PureComponent {
  componentDidMount() {}

  render() {
    const { input, placeholder, type, meta: { touched, error } } = this.props;

    const classes = cx({
      success: touched && !error,
      danger: touched && error,
    });

    return (
      <FormGroup color={classes}>
        <Input {...input} type={type} placeholder={placeholder} state={classes} />
        {touched &&
          error &&
          <FormFeedback>
            {error}
          </FormFeedback>}
      </FormGroup>
    );
  }
}

const Login = props => {
  const { handleSubmit, submitState, errors } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <Field name="email" component={renderInput} type="email" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Field name="password" component={renderInput} type="password" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="dob">DOB</label>
        <Field name="dob" component={renderInput} type="date" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="adress">Address</label>
        <Field name="address" component={renderInput} type="adress" />
      </FormGroup>
      {errors &&
        errors.status === 401 &&
        <Alert color="danger">
          <span> Hm, that isn&apos;t be quite right. </span>
          <br />
          <span> Please double-check and try again. </span>
        </Alert>}
      <Button color="primary">
        {submitState
          ? <span>
            {' '}<i className="fa fa-refresh fa-spin" />{' '}
          </span>
          : 'Login'}
      </Button>
    </Form>
  );
};

const LoginForm = reduxForm({
  form: 'Login', // a unique name for this form
})(Login);

export default LoginForm;
