
import React, {Fragment, useState} from 'react';
import { hot } from 'react-hot-loader/root';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ImageMap from './imageMap.jsx';
import Nav from './nav.jsx';
import Fire from './fire.jsx';
import Glaze from './glaze.jsx';


class App extends React.Component {
render() {
  return (

    <Fragment>
      <div className='main'>
    <Router>
      <Nav />
      <Switch>
      <Route path="/" exact component={ImageMap} />
      <Route path="/fire" component={Fire} />
      <Route path="/glaze" component={Glaze} />
      </Switch>
      </Router>
      </div>

    </ Fragment>

  );
}

};

export default App;