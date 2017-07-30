import React from 'react';
import { Container, Row, Col, Button,  Nav, NavItem, NavLink } from 'reactstrap';
import Lightbox from 'react-images';


import s from './styles.scss';
import moment from 'moment';


export default class Sample extends React.Component {

  render() {
    return (
      <Lightbox
        images={[{ src: 'https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200' }]}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }
}

