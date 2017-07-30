import React from 'react';
import { Media, Progress, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import s from './styles.scss';

import list from './../../list.json';

const ProjectItem = props =>
  (<Row className={s.item}>
    <Media>
      <Media left>
        <Media object src={props.project.image} />
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
      <Progress color="success" value={props.project.progress} />
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

  </Row>);

const Detail = props => {
  const project = list[0];

  return (
    <Container className={s.projectList}>
      <ProjectItem project={project}></ProjectItem>
    </Container>
  );
};



export default Detail;
