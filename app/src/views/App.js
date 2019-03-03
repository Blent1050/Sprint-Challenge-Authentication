import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
//State Management
import { Provider } from '../Provider/Provider';

//Components
import FormView from './Formview';
import Home from './Homeview';

class App extends Component {
  render() {
    return (
      <Provider>
        <Route exact path="/" component={FormView} />
        <Route path="/home" component={Home} />
      </Provider>
    );
  }
}

export default withRouter(App);
