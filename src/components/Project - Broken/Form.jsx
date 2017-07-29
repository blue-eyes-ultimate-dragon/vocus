import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Input, Button, FormFeedback, Alert } from 'reactstrap';
import cx from 'classnames';

class renderInput extends React.PureComponent {
  componentDidMount() {
  }

  render() {
    const {
      input,
      placeholder,
      type,
      meta: {
        touched,
        error,
      },
    } = this.props;

    const classes = cx({
      success: touched && !error,
      danger: touched && error,
    });

    return (
      <FormGroup color={classes}>
        <Input {...input} type={type} placeholder={placeholder} state={classes} />
        {touched && error && <FormFeedback>{error}</FormFeedback>}
      </FormGroup>
    );
  }
}

const Login = props => {
  const { handleSubmit, submitState, errors } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="name">Name</label>
        <Field name="name" component={renderInput} type="name" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="Suburb">Suburb</label>
        <Field name="suburb" component={renderInput} type="suburb" />
      </FormGroup>
      <Button color="primary">
        { submitState ? <span> <i className="fa fa-refresh fa-spin" /> </span> : 'Create' }
      </Button>

    </Form>
  );
};

const ProjectForm = reduxForm({
  form: 'Project', // a unique name for this form
})(Project);


export default ProjectForm;
