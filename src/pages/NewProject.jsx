import React, {Component} from "react";
import Header from "../components/header/Header";
import FooterPages from "../components/footer/Footer_pages";
import './newProject.scss';

class AddProject extends Component {
    state = {
        id: "",
        projectName: "",
        showName: "",
        city: "",
        supplier: "",
        hallNumber: "",
        boothNumber: "",
        assembly: "",
        show: ""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleAddProject = (e) => {
        e.preventDefault();
        const newProject = this.state;
        fetch('http://localhost:5000/projects', {
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(newProject),
        }).then((response) => {
            this.componentDidMount();
            return response.json();
        })
    };

    render() {
        const {id, projectName, showName, city, supplier, hallNumber, boothNumber, assembly, show} = this.state;
        return (
            <>
                <h2 className='title'>New project</h2>
                <form onSubmit={this.handleAddProject} className='new-project'>
                    <div>
                        <label>Project name</label>
                        <input name='projectName' value={projectName} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Project number</label>
                        <input name='id' value={id} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Show name</label>
                        <input name='showName' value={showName} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>City</label>
                        <input name='city' value={city} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Supplier</label>
                        <input name='supplier' value={supplier} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Hall number</label>
                        <input name='hallNumber' value={hallNumber} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Booth number</label>
                        <input name='boothNumber' value={boothNumber} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Assembly</label>
                        <input name='assembly' value={assembly} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Show time</label>
                        <input name='show' value={show} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">ADD NEW PROJECT</button>
                    </div>
                </form>
            </>
        )
    }
}
const NewProject = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <AddProject/>
            </div>

            <FooterPages/>
        </>
    );
};

export default NewProject;