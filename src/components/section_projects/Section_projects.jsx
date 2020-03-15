import React, {Component} from "react";
import './section_projects.scss';
import '../../projects';
import { NavLink} from "react-router-dom";
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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

    handleDelete = (projectId) => {
        fetch(`http://localhost:5000/projects/${projectId}`, {
            method: 'DELETE'
        }).then(resp => {
            if (resp.ok) {
                this.componentDidMount();
            }
            throw new Error('Network error during delete');
        }).catch(err => console.error(err));
    };

    render() {
        const {projects} = this.state;
        const deleteIcon = <FontAwesomeIcon icon={faTimes}/>;
        return (
            <div className='section-projects'>
                <div className='container'>
                    <h2 className='title'>Project list</h2>
                    <ul>
                        {projects.map(project => {
                            return (
                                <li key={project.id} className='project-box'><NavLink exact to={`/project/${project.id}`} className={'project-box-nav'}>
                                    <div className='project-name'>
                                        <p>Project name:</p>
                                        <h3>{project.projectName} - {project.showName}</h3>
                                    </div>
                                    <div className='project-number'>
                                        <p>Project number:</p>
                                        <h3>{project.id}</h3>
                                    </div>
                                    </NavLink>
                                    <div className={'delete-icon'} onClick={() => this.handleDelete(project.id)}>
                                        {deleteIcon}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SectionProjects;