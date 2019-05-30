 import React from 'react'

 const ProjectDetails = (props) => {
 	const id = props.match.params.id;
 	return (
 		<div className="container section project-details">
 			<div className="card z-depth-0">
 				<div className="card-content">
 					<span className = " card-title"> Project Title - {id}</span>
 					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
 				</div>
 				<div className="card-action gret lighten-4 grey-text">
 					<div>Posted by Kai </div>
 					<div>3rd Sept, 3pm </div>
 				</div>
 			</div>
 		</div>
 	)
 }

 export default ProjectDetails