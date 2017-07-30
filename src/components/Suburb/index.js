import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import s from './styles.scss';
import cx from 'classnames';
import axios from 'axios';

class Suburb extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      coordinates: {
        lat: 0,
        lng: 0,
      },
      suburb: {},
    };
  }

  async componentDidMount() {
    const coords = await axios.get(
      `https://reverse.geocoder.cit.api.here.com/6.2/reversegeocode.json?prox=${this.props
        .coordinates.lat}%2C${this.props.coordinates
        .lng}%2C250&mode=retrieveAddresses&maxresults=1&gen=8&app_id=9OXb8Vl3T9qXYKDgNTzT&app_code=vp0x0jZHUKP-mgX0GZKobA`,
    );
    try {
      this.setState({ suburb: coords.data.Response.View[0].Result[0].Location.Address });
    } catch (e) {
      console.log(e);
    }
    // this.setState({suburb: })
    const platform = new H.service.Platform({
      app_id: '9OXb8Vl3T9qXYKDgNTzT',
      app_code: 'vp0x0jZHUKP-mgX0GZKobA',
    });

    // Obtain the default map types from the platform object
    const maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    const map = new H.Map(document.getElementById('mapContainer'), maptypes.normal.map, {
      zoom: 14,
      center: this.props.coordinates,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ coordinates: nextProps.coordinates });
  }

  render() {
    return (
      <Container className={s.background}>
        <Row>
          <Col className="my-3" md={{ size: 6, offset: 3 }}>
            <h1>
              {' '}{this.state.suburb.District} {this.state.suburb.State}{' '}
              {this.state.suburb.PostalCode}{' '}
            </h1>
          </Col>
          <Col md={{ size: 6 }}>Sorry there are no projects in this suburb</Col>
          <Col md={{ size: 6 }}>
            <div style={{ width: '100%', height: '480px' }} id="mapContainer" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Suburb;
