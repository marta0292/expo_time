import React, {Component} from "react";
import Header from "../components/header/Header";
import FooterPages from "../components/footer_pages/Footer_pages";
import './project.scss';

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

    render() {
        if (!this.state.project) {
            return (
                <p>Ładowanie...</p>
            )
        }
        return (
            <>
                <Header/>
                <div className='container'>
                    <h1>Project number: {this.props.match.params.projectId}</h1>
                    <h1>Project name: {this.state.project.projectName}</h1>
                </div>
                <FooterPages/>
            </>
        );
    }
}

export default Project;