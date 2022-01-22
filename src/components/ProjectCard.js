import React from "react"

const ProjectCard = (props) => {
    return (
        <div className="projectCard">
            <h2>{props.heading}</h2>
            <p className="meta">{props.meta}</p>
            
            {props.children}
        </div>
    )
}

export default ProjectCard