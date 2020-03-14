import React, {Component} from "react";
import './section_projects.scss';
import '../../projects';
import { NavLink} from "react-router-dom";

class SectionProjects extends Component {
    state = {
        projects: [],
    };

    componentDidMount() {
        fetch('http://localhost:5000/projects')
            .then((response) => {
                return response.json();
            })
            .then((projects) => {
                this.setState({
                    projects,
                })
            })
    };

    render() {
        const {projects} = this.state;
        return (
            <div className='section-projects'>
                <div className='container'>
                    <h2 className='title'>Project list</h2>
                    <ul>
                        {projects.map(project => {
                            return (
                                <li key={project.id}><NavLink exact to={`/project/${project.id}`} className='project-box'>
                                    <div className='project-name'>
                                        <p>Project name:</p>
                                        <h3>{project.projectName} - {project.showName}</h3>
                                    </div>
                                    <div className='project-number'>
                                        <p>Project number:</p>
                                        <h3>{project.id}</h3>
                                    </div>
                                </NavLink></li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SectionProjects;