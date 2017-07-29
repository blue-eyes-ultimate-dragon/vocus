import React from 'react'
import cx from 'classnames';
import { FormGroup, Input, FormFeedback } from 'reactstrap';


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

export default renderInput

