import React, {Component} from "react";
import Header from "../components/header/Header";
import FooterPages from "../components/footer/Footer_pages";
import './project.scss';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class NoteList extends Component {
    state = {
        notes: [],
        newNote: ''
    };

    setNewNote = event => {
        this.setState({
            newNote: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const notes = [...this.state.notes];
        fetch(`http://localhost:5000/projects/${this.props.match.params.projectId}`, {
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(this.setNewNote),
        }).then((response) => {
            console.log(response);
            // this.componentDidMount();
            // return response.json();
        });

        if (this.state.newNote !== '') {
            notes.push({
                id: notes.length + 1,
                text: this.state.newNote
            });

            this.setState({
                notes: notes,
                newNote: '',
            });
        }
    };

    render() {
        const plusIcon = <FontAwesomeIcon icon={faPlus}/>;
        const {notes, newNote} = this.state;

        return (
            <>
                <div className={'note-list'}>
                    <ul>
                        {notes.map(note =>
                            <li key={note.id}><p>{note.id}:</p> {note.text}</li>)}
                    </ul>
                </div>
                <div className={'add-note'}>
                    <form onSubmit={this.handleSubmit}>
                        <label>Note:</label>
                        <div className={'note'}>
                            <input name='note' value={newNote} onChange={this.setNewNote}/>
                            <button className={'add-note-btn'}>{plusIcon}</button>
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
                        <div className={'title'}><h2>{this.state.project.projectName}</h2></div>
                        <div className={'project-number'}><p>Project number:</p><h3>{this.props.match.params.projectId}</h3></div>
                    </div>
                    <div className={'show-info'}>
                        <div className={'info'}><p>Event:</p><h3>{this.state.project.showName}</h3></div>
                        <div className={'info'}><p>Location:</p><h3>{this.state.project.city}</h3></div>
                        <div className={'info'}><p>Term:</p><h3>{this.state.project.show}</h3></div>
                    </div>
                    <div className={'booth-info'}>
                        <div className={'info'}><p>Booth number:</p><h3>{this.state.project.boothNumber}</h3></div>
                        <div className={'info'}><p>Hall number:</p><h3>{this.state.project.hallNumber}</h3></div>
                    </div>
                    <div className={'setup-info'}>
                        <div className={'info'}><p>Assembly:</p><h3>{this.state.project.assembly}</h3></div>
                        <div className={'info'}><p>Disassembly:</p><h3>{this.state.project.disassembly}</h3></div>
                    </div>
                <NoteList/>
            </div>
            <FooterPages/>
            </>
        );
    }
}

export default ProjectInfo;