import React from 'react';
import { Media } from 'reactstrap';
import s from './styles.scss';


const ProjectItem = props => {

  console.log(props.project.name);

  return (
  <Media>
    <Media left href="#">
      <Media object data-src={props.project.image}/>
    </Media>
    <Media body>
      <Media heading>
        {props.project.name}
      </Media>
      {props.project.description}
    </Media>
  </Media>)};

const ProjectList = props => {

  let projects = [
    {
      name: "Project name",
      image: "project-image.jpg",
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras puru odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Doneclacinia congue felis in faucibus."
    },
    {
      name: "Project name 1",
      image: "project-image-1.jpg",
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras puru odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Doneclacinia congue felis in faucibus."

    },
    {
      name: "Project name 2",
      image: "project-image-2.jpg",
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras puru odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Doneclacinia congue felis in faucibus."

    }
  ]

  return (
    <ul>
      {projects.map(function(project, index){
        return <ProjectItem project={project}></ProjectItem>
      })}
    </ul>
  )






}




export default ProjectList;

