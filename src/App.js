import React from 'react';
import Cardeditor from './Cardeditor';
import Cardviewer from './Cardviewer';
import Homepage from './Homepage';
import {Switch, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { front: 'front1', back: 'back1' },
        { front: 'front2', back: 'back2' },
      ],
    };
  }

  addCard = card => {
    const cards = this.state.cards.slice().concat(card);
    this.setState({ cards: cards})
  };

  deleteCard = index => {
    const cards = this.state.cards.slice();
    cards.splice(index, 1);
    this.setState({ cards: cards});
  };

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/editor">
          <Cardeditor 
            addCard={this.addCard} 
            cards={this.state.cards}
            deleteCard={this.deleteCard}
          />
        </Route>
        <Route exact path="/viewer">
          <Cardviewer cards={this.state.cards}/>
        </Route>
      </Switch>
    );
  } 
}

export default App;
