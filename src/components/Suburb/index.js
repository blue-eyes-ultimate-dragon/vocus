import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProjectList from 'src/components/ProjectList';
import cx from 'classnames';
import axios from 'axios';
import employment from './workforce.json';
import s from './styles.scss';

class Suburb extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      coordinates: {
        lat: 0,
        lng: 0,
      },
      suburb: {},
      council: null,
    };
  }

  async componentDidMount() {
    const mapItRequest = await axios.get(
      `http://mapit.openlocal.org.au/point/4326/${this.props.coordinates.lng},${this.props
        .coordinates.lat}`,
    );
    let LGA = Object.keys(mapItRequest.data).find(val => mapItRequest.data[val].type === 'LGS');
    LGA = mapItRequest.data[LGA];
    const coords = await axios.get(
      `https://reverse.geocoder.cit.api.here.com/6.2/reversegeocode.json?prox=${this.props
        .coordinates.lat}%2C${this.props.coordinates
        .lng}%2C250&mode=retrieveAddresses&maxresults=1&gen=8&app_id=9OXb8Vl3T9qXYKDgNTzT&app_code=vp0x0jZHUKP-mgX0GZKobA`,
    );
    try {
      this.setState({
        council: LGA.name,
        suburb: coords.data.Response.View[0].Result[0].Location.Address,
      });
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
    const suburbEmployment = employment.find(val => val.LGA === this.state.council);
    console.log(suburbEmployment);
    return (
      <Container className={s.background}>
        <Row>
          <Col className="my-3 text-center" md={{ size: 12 }}>
            <h1>
              {' '}{this.state.suburb.District} {this.state.suburb.State}{' '}
              {this.state.suburb.PostalCode}{' '}
            </h1>
            <div style={{ width: '100%', height: '480px' }} id="mapContainer" />
          </Col>
          <Col md={{ size: 6 }}>
            <ProjectList />
          </Col>
          <Col md={{ size: 6 }}>
            <p>
              {' '}LGA / Council: {this.state.council}{' '}
            </p>
            {suburbEmployment &&
              Object.keys(suburbEmployment)
                .filter(val => {
                  console.log(val);
                  return val !== 'LGA' && val !== 'GSC District';
                })
                .map(val =>
                  (<p>
                    {' '}Predicted Employment in {val} for LGA: {suburbEmployment[val]}
                  </p>),
                )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Suburb;
