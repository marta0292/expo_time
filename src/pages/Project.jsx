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
            <div className={'grid'}>
                <div className={'row note-list'}>
                    <div className={'col-12'}>
                        <ul>
                            {notes.map(note =>
                                <li key={note.id}><p>{new Date().toLocaleDateString()}; {new Date().toLocaleTimeString()}:</p> {note.text}</li>)}
                        </ul>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12 add-note'}>
                        <form onSubmit={this.handleSubmit}>
                            <label>Note:</label>
                            <div className={'note'}>
                                <input name='note' value={newNote} onChange={this.setNewNote}/>
                                <button className={'add-note-btn'}>{plusIcon}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
                <div className={'grid'}>
                    <div className={'row header'}>
                        <div className={'col-10 title'}><h2>{this.state.project.projectName}</h2></div>
                        <div className={'col-2'}><p>Project number:</p><h3>{this.props.match.params.projectId}</h3></div>
                    </div>
                    <div className={'row show-info'}>
                        <div className={'col-4'}><p>Event:</p><h3>{this.state.project.showName}</h3></div>
                        <div className={'col-4'}><p>Location:</p><h3>{this.state.project.city}</h3></div>
                        <div className={'col-4'}><p>Term:</p><h3>{this.state.project.show}</h3></div>
                    </div>
                    <div className={'row booth-info'}>
                        <div className={'col-6'}><p>Booth number:</p><h3>{this.state.project.boothNumber}</h3></div>
                        <div className={'col-6'}><p>Hall number:</p><h3>{this.state.project.hallNumber}</h3></div>
                    </div>
                    <div className={'row setup-info'}>
                        <div className={'col-6'}><p>Assembly:</p><h3>{this.state.project.assembly}</h3></div>
                        <div className={'col-6'}><p>Disassembly:</p><h3>{this.state.project.disassembly}</h3></div>
                    </div>
                </div>
                <NoteList/>
            </div>
            <FooterPages/>
            </>
        );
    }
}

export default ProjectInfo;