import React from 'react';
import Cardeditor from './Cardeditor';
import Cardviewer from './Cardviewer';
import Homepage from './Homepage';
import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route exact path="/editor">
        <Cardeditor />
      </Route>
      <Route exact path="/viewer/:deckId">
        <Cardviewer />
      </Route>
      <Route>
        <div>Page not found!</div>
      </Route>
    </Switch>
  );
}; 


export default App;
