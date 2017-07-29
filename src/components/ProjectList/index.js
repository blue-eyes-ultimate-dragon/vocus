import React from 'react';
import { Media } from 'reactstrap';
import s from './styles.scss';


const ProjectItem = props => (
  <Media>
    <Media left href="#">
      <Media object data-src="holder.js/64x64"/>
    </Media>
    <Media body>
      <Media heading>
        Media heading
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
      odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
      lacinia congue felis in faucibus.
    </Media>
  </Media>);

const ProjectList = props => {

  let projects = [
    {
      name: "Project name",
      image: "project-image.jpg"
    },
    {
      name: "Project name 1",
      image: "project-image-1.jpg"
    },
    {
      name: "Project name 2",
      image: "project-image-2.jpg"
    }
  ]

  return (
    <ul>
      {projects.map(function(project, index){
        return <ProjectItem></ProjectItem>
      })}
    </ul>
  )






}




export default ProjectList;

