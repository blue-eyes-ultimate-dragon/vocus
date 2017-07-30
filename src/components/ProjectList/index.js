import React from 'react';
import { Media, Progress, Container, Row } from 'reactstrap';
import s from './styles.scss';


const ProjectItem = props => {

  return (

<Row>
  <Media>
    <Media left>
      <Media object src={props.project.image}/>
    </Media>
    <Media body>
      <Media heading>
        <h2>{props.project.name}</h2>
      </Media>
      {props.project.description}
    </Media>


  </Media>

      <div className={s.progress}>
        <div className="text-center">{props.project.progress}%</div>
        <Progress color="success" value={props.project.progress} />
      </div>

      <div className={s.mainSection}>
        <h4>Goal: ${props.project.goal.toLocaleString('en')} </h4>
      </div>

      <div className={s.mainSection}>
        <h4>Pledge: ${props.project.pledge.toLocaleString('en')}</h4>
      </div>

      <div className={s.mainSection}>
        <h4>Days: {props.project.day}</h4>
      </div>

  </Row>


  )};

const ProjectList = props => {

  let projects = [
    {
      name: "The central park",
      image: "https://s3-ap-southeast-2.amazonaws.com/webifycentral/images/proj1.jpg",
      progress: 50,
      goal:10000,
      pledge:5000,
      day:35,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Project name 1",
      image: "https://s3-ap-southeast-2.amazonaws.com/webifycentral/images/proj2.png",
      progress: 10,
      goal:100000,
      pledge:10000,
      day:250,
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras puru odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Doneclacinia congue felis in faucibus."

    },
    {
      name: "Project name 2",
      image: "https://s3-ap-southeast-2.amazonaws.com/webifycentral/images/proj3.jpg",
      progress: 15,
      goal:200000,
      pledge:25000,
      day:55,
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras puru odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Doneclacinia congue felis in faucibus."

    },
    {
      name: "Project name 2",
      image: "https://s3-ap-southeast-2.amazonaws.com/webifycentral/images/proj4.png",
      progress: 75,
      goal:17234,
      pledge:10000,
      day:10,
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras puru odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Doneclacinia congue felis in faucibus."

    }
  ]

  return (
    <Container>
      {projects.map(function(project, index){
        return <ProjectItem project={project}></ProjectItem>
      })}
    </Container>
  )






}




export default ProjectList;

