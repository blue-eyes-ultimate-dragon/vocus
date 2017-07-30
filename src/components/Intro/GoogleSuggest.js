import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Row, Col, Button } from 'reactstrap';
import cx from 'classnames';
import s from './styles.scss';

class GoogleAutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: 'Sydney, NSW' };
    this.onChange = address => this.setState({ address });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.saveCoordinates(latLng))
      .then(() => {
        this.props.history.push('/locations/puush');
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: 'Please select where you live',
    };

    const defaultStyles = {
      root: {
        position: 'relative',
        paddingBottom: '0px',
      },
      input: {
        display: 'inline-block',
        width: '100%',
        padding: '10px',
      },
      autocompleteContainer: {
        position: 'relative',
        top: '100%',
        backgroundColor: 'white',
        border: '1px solid #555555',
        width: '100%',
      },
      autocompleteItem: {
        backgroundColor: '#ffffff',
        padding: '10px',
        color: '#555555',
        cursor: 'pointer',
        height: '100%',
      },
      autocompleteItemActive: {
        backgroundColor: '#fafafa',
      },
    };

    return (
      <form className={cx(s.increasedPosition, 'mt-3')} onSubmit={this.handleFormSubmit}>
        <Row>
          <Col md={11}>
            <PlacesAutocomplete styles={defaultStyles} inputProps={inputProps} />
          </Col>
          <Col md={1}>
            <Button className="mt-1" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default GoogleAutoComplete;
