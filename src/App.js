import React from 'react';
import './App.css';
import ComponentViewLayout from './views/ComponentView/ComponentViewLayout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ComponentLoader from './views/ComponentView/ComponentLoader/ComponentLoader';
import { DataConsumer, DataProvider } from './views/DataContext';
import Home from './views/Home/Home';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <DataConsumer>
          {context => (
            <React.Fragment>
              <Helmet>
                <title>{ context.state.projectName }</title>
              </Helmet>
              <Router basename="/">
              <Route exact path="/" component={() => (<Home ctx={context} />)} />
              <Route path="/component/:componentName" component={(props) => (<ComponentViewLayout ctx={context} {...props} />)} />
              <Route path="/component-render/:componentName" component={() => (<ComponentLoader ctx={context} />)} />
            </Router>

            <link rel="stylesheet" type="text/css" href="https://highlightjs.org/static/demo/styles/vs.css" />
            </React.Fragment>
          )}
        </DataConsumer>
      </DataProvider>
    </div>
  );
}

export default App;
