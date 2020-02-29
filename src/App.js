import React from 'react';
import './app.scss';
import Main from "./pages/Main";
import NewProject from "./pages/NewProject";
import Project from "./pages/Project";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/newproject" component={NewProject}/>
                <Route exact path="/project" component={Project}/>
                <Route exact path="/project/:projectId" component={Project}/>
                </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
