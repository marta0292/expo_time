import React, {Component} from "react";
import Header from "../components/header/Header";
import FooterPages from "../components/footer/Footer_pages";
import './project.scss';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Project extends Component {
    state = {
        project: null
    };


    componentDidMount() {
        fetch(`http://localhost:5000/projects/${this.props.match.params.projectId}`)
            .then((response) => {
                return response.json();
            })
            .then((project) => {
                console.log(project);
                this.setState({
                    project,
                })
            })
    };

    handleAddNote = (e) => {
        e.preventDefault();
        const newNote = {
            "notes": []
        };
        fetch('http://localhost:5000/projects/${this.props.match.params.projectId}/notes', {
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(newNote),
        }).then((response) => {
            this.componentDidMount();
            return response.json();
        })
    };

    render() {
        const plusIcon = <FontAwesomeIcon icon={faPlus}/>;
        if (!this.state.project) {
            return (
                <p>Ładowanie...</p>
            )
        }
        return (
            <>
                <Header/>
                <div className='container'>
                    <h1>Project name: {this.state.project.projectName}</h1>
                    <h1>Project number: <span>{this.props.match.params.projectId}</span></h1>
                    <p>Event: {this.state.project.showName}</p>
                    <p>Term: {this.state.project.show}</p>
                    <p>Location: {this.state.project.city}</p>
                    <p>Supplier: {this.state.project.supplier}</p>
                    <p>Hall number: {this.state.project.hallNumber}</p>
                    <p>Booth number: {this.state.project.boothNumber}</p>
                    <p>Set-up: <span>{this.state.project.assembly}</span></p>
                    <div className={'add-note'}>
                        <label>Add note:</label>
                        <div className={'note'}>
                            <input name='note' type={'text'} onChange={(input) => {this.setState({"note": input.target.value})}}/>
                            <button className={'add-note-btn'} onClick={this.handleAddNote}>{plusIcon}</button>
                        </div>
                    </div>

                </div>
                <FooterPages/>
            </>
        );
    }
}

export default Project;