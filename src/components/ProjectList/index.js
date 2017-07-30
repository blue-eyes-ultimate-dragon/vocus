import React from 'react';
import { Media } from 'reactstrap';
import s from './styles.scss';


const ProjectItem = props => {

  console.log(props.project.name);

  return (
  <Media>
    <Media left href="#">
      <Media object src={props.project.image}/>
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
      name: "The central park",
      image: "https://s3-ap-southeast-2.amazonaws.com/webifycentral/images/proj1.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Project name 1",
      image: "https://s3-ap-southeast-2.amazonaws.com/webifycentral/images/proj2.png",
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras puru odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Doneclacinia congue felis in faucibus."

    },
    {
      name: "Project name 2",
      image: "https://s3-ap-southeast-2.amazonaws.com/webifycentral/images/proj3.jpg",
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras puru odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Doneclacinia congue felis in faucibus."

    },
    {
      name: "Project name 2",
      image: "https://s3-ap-southeast-2.amazonaws.com/webifycentral/images/proj4.png",
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

