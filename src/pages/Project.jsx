import React, {Component} from "react";
import Header from "../components/header/Header";
import FooterPages from "../components/footer/Footer_pages";
import './project.scss';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from 'uuid';

class NoteList extends Component {
    state = {
        newNote: '',
    };
    setNewNote = (e) => {
        const { value } = e.target;
        this.setState({ newNote: value });
    };

    render() {
        const plusIcon = <FontAwesomeIcon icon={faPlus}/>;
        const {notes} = this.props;
        return (
            <>
                <div className={'note-list'}>
                    <ul>
                        {notes.map(note =>
                            <li key={note.id}>
                                {note.text}
                            </li>)}
                    </ul>
                </div>
                <div className={'add-note'}>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.props.onAddNote(this.state.newNote);
                    }}>
                        <label>Note:</label>
                        <div className={'note'}>
                            <input
                                name='note'
                                value={this.state.newNote}
                                onChange={this.setNewNote}
                            />
                            <button
                                className={'add-note-btn'}
                                type="submit"
                            >
                                {plusIcon}
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
class ProjectInfo extends Component {
    state = {
        project: null
    };
    componentDidMount() {
        fetch(`http://localhost:5000/projects/${this.props.match.params.projectId}`)
            .then((response) => {
                return response.json();
            })
            .then((project) => {
                this.setState({
                    project,
                })
            })
    };
    onAddNote = (newNote) => {
        const updatedProject = {
            ...this.state.project,
            notes: [
                ...this.state.project.notes,
                {
                    text: newNote,
                    id: uuidv4(),
                },
            ],
        };
        fetch(`http://localhost:5000/projects/${this.props.match.params.projectId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProject)
        })
            .then(resp => resp.json())
            .then((project) => {
                this.setState({
                    project,
                })
            });
    };
    render() {
        if (!this.state.project) {
            return (
                <p>Ładowanie...</p>
            )
        }
        return (
            <>
                <Header/>
                <div className={'container'}>
                    <div className={'header'}>
                        <div className={'title'}>
                            <h2>{this.state.project.projectName}</h2>
                        </div>
                        <div className={'project-number'}>
                            <p>Project number:</p>
                            <h3>{this.props.match.params.projectId}</h3>
                        </div>
                    </div>
                    <div className={'show-info'}>
                        <div className={'info'}>
                            <p>Event:</p>
                            <h3>{this.state.project.showName}</h3>
                        </div>
                        <div className={'info'}>
                            <p>Location:</p>
                            <h3>{this.state.project.city}</h3>
                        </div>
                        <div className={'info'}>
                            <p>Term:</p>
                            <h3>{this.state.project.show}</h3>
                        </div>
                    </div>
                    <div className={'booth-info'}>
                        <div className={'info'}>
                            <p>Booth number:</p>
                            <h3>{this.state.project.boothNumber}</h3>
                        </div>
                        <div className={'info'}>
                            <p>Hall number:</p>
                            <h3>{this.state.project.hallNumber}</h3>
                        </div>
                    </div>
                    <div className={'setup-info'}>
                        <div className={'info'}>
                            <p>Assembly:</p>
                            <h3>{this.state.project.assembly}</h3>
                        </div>
                        <div className={'info'}>
                            <p>Disassembly:</p>
                            <h3>{this.state.project.disassembly}</h3>
                        </div>
                    </div>
                    <NoteList
                        notes={this.state.project.notes}
                        onAddNote={this.onAddNote}
                    />
                </div>
                <FooterPages />
            </>
        );
    }
}
export default ProjectInfo;