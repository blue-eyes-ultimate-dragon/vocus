import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Label, Form, FormGroup, Input,  Media, Progress, Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import s from './styles.scss';

import list from './../Suburb/projects';

const ProjectItem = props => {



  return (<Row className={s.item}>
    <Media>
      <Media left>
        <Media object src={props.project.image} className={s.img}/>
      </Media>
      <Media body className={s.listContent}>
        <Media heading>
          <h2>
            {props.project.name}
          </h2>
        </Media>
        {props.project.description}
      </Media>
    </Media>

    <div className={s.progress}>
      <div className="text-center">
        {props.project.progress}%
      </div>
      <Progress color="success" value={props.project.progress}/>
    </div>

    <div className={s.mainSection}>
      <h4>
        Goal: ${props.project.goal.toLocaleString('en')}{' '}
      </h4>
    </div>

    <div className={s.mainSection}>
      <h4>
        Pledge: ${props.project.pledge.toLocaleString('en')}
      </h4>
    </div>

    <div className={s.mainSection}>
      <h4>
        Days: {props.project.day}
      </h4>
    </div>






  </Row>)

};

class Detail extends React.Component {



  constructor(props, context) {
    super(props, context);
    this.state = {
      modal: false
    };

    console.log('>>>>>>>>>> '+props.match.params.projectId);

    this.project = list.find((item) =>  item.id === props.match.params.projectId);
    this.toggle = this.toggle.bind(this);

  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container className={s.projectList}>
        <ProjectItem project={this.project}></ProjectItem>


        <Button color="danger" onClick={this.toggle}>Pledge to this project</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Pledge amount for "{this.project.name}"</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="pledgeAmount">Pledge amount ($)</Label>
                <Input type="number" name="pledgeAmount" id="pledgeAmount" placeholder="Enter your amount here" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Pledge</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>


      </Container>
    );
  }



};



export default Detail;
