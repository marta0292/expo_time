import React, {Component} from "react";
import Header from "../components/header/Header";
import FooterPages from "../components/footer_pages/Footer_pages";
import './project.scss';

class Project extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className='container'>
                    <h1>Project number: {this.props.match.params.projectId}</h1>
                </div>
                <FooterPages/>
            </>
        );
    }
}

export default Project;