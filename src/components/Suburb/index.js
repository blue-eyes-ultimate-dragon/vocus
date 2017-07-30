import React, { Component } from 'react';
import { Row, Col, Button, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProjectList from 'src/components/ProjectList';
import projects from './projects';
import DotDotDot from 'react-dotdotdot';
import cx from 'classnames';
import axios from 'axios';
import workforce from './workforce.json';
import population from './population.json';
import travelTime from './transport.json';

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
      zoom: 12,
      center: this.props.coordinates,
    });

    const svgMarkup =
      '<svg width="24" height="24" ' +
      'xmlns="http://www.w3.org/2000/svg">' +
      '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
      'height="22" /><text x="12" y="18" font-size="12pt" ' +
      'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
      'fill="white">H</text></svg>';

    // Create an icon, an object holding the latitude and longitude, and a marker:
    const renderedProjects = projects.filter(val => val.LGA === this.state.council);

    const renderedMarkers = renderedProjects.map(val => {
      const icon = new H.map.Icon(svgMarkup);
      const marker = new H.map.Marker(val.coordinates, { icon });
      map.addObject(marker);
    });

    // Add the marker to the map and center the map at the location of the marker:
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ coordinates: nextProps.coordinates });
  }

  render() {
    const suburbWorkForce = workforce.find(val => val.LGA === this.state.council);
    const suburbPopulation = population.find(val => val.LGA === this.state.council);
    const renderedProjects = projects.filter(val => val.LGA === this.state.council);
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
          <Col md={{ size: 8 }}>
            <h3> Projects </h3>
            {(renderedProjects.length &&
              renderedProjects.map(val =>
                (<Row className="mt-2">
                  <Col md={6}>
                    <img className={s.img} src={val.image} />
                  </Col>
                  <Col md={6}>
                    <h3>
                      {val.name}
                    </h3>
                    <DotDotDot clamp={4}>
                      {val.description}
                    </DotDotDot>
                  </Col>
                </Row>),
              )) ||
              <p>No projects found</p>}
          </Col>
          <Col md={{ size: 4 }}>
            <h4>
              {' '}LGA / Council: {this.state.council}{' '}
            </h4>
            {Object.keys(travelTime).map(val => {
              if (this.state.council && this.state.council.includes(val)) {
                return (
                  <h6>
                    Average Travel Time to Work: {travelTime[val]}
                    {' minutes'}
                  </h6>
                );
              }
            })}
            <h4> Predicted Population </h4>
            <Table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Population</th>
                </tr>
              </thead>
              <tbody>
                {suburbPopulation &&
                  Object.keys(suburbPopulation)
                    .filter(val => val !== 'LGA' && val !== 'GSC District')
                    .map(val =>
                      (<tr>
                        <th scope="row">
                          {val}
                        </th>
                        <td>
                          {suburbPopulation[val]}
                        </td>
                      </tr>),
                    )}
              </tbody>
            </Table>
            <h4> Predicted Workforce (LGA) </h4>
            <Table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Employment</th>
                </tr>
              </thead>
              <tbody>
                {suburbWorkForce &&
                  Object.keys(suburbWorkForce)
                    .filter(val => val !== 'LGA' && val !== 'GSC District')
                    .map(val =>
                      (<tr>
                        <th scope="row">
                          {val}
                        </th>
                        <td>
                          {suburbWorkForce[val]}
                        </td>
                      </tr>),
                    )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Suburb;
