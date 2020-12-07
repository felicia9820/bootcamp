import React from 'react';
import {Link} from 'react-router-dom';
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

class Homepage extends React.Component {
    render() {
        if (!isLoaded(this.props.decks)){
            return <div>loading...</div>;
        }

        const names = Object.keys(this.props.decks).map(deckId => {
            const deck = this.props.decks[deckId];
            return (
              <div key={deckId}>
                <Link to={`/viewer/${deckId}`}>{deck.name}</Link>
              </div>
            );
          });

        return (
            <div>
                <h1>Homepage</h1>
                <Link to="/editor">Create a new card deck</Link>
                <h1>Flashcards</h1>
                {names}
            </div>
            
        );
    };
};

const mapStateToProps = (state) => {
    console.log(state);
    const decks = state.firebase.data.homepage;
    return {decks: decks};
};

export default compose(
    firebaseConnect(['/homepage']),
    connect(mapStateToProps),
 )(Homepage);