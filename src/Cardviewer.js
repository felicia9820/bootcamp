import React from 'react';
import './Cardviewer.css';
import {Link, withRouter} from 'react-router-dom';
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';


class Cardviewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            front: true,
            index: 1,
         }
    };

    flip = () => this.setState({ front: !(this.state.front)});

    next = () => {
        if (this.state.index !== this.props.cards.length) {
            this.setState({ index: this.state.index + 1 });
        }
    };

    previous = () => {
        if (this.state.index !== 1) {
            this.setState({ index: this.state.index - 1 });
        }
        
    };

    render() {
        if (!isLoaded(this.props.cards)){
            return <div>loading...</div>;
        }

        if(isEmpty(this.props.cards)){
            return <div>Page not found</div>;
        }

        if (this.state.front) {
            return (
                <div>
                    <h2>{this.props.name}</h2>
                    
                    <p>{"Card " + this.state.index + " out of " + (this.props.cards.length)}</p>
                    <table>
                        <tbody>
                            <tr><td onClick={this.flip}>{this.props.cards[this.state.index - 1].front}</td></tr>
                        </tbody>
                    </table>
                    <br/>
                    <button onClick={this.previous}>Previous</button>
                   
                    <button onClick={this.next}>Next</button>

                    <hr/>
                    <Link to="/">Home</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>{this.props.name}</h2>
                    
                    <p>{"Card " + this.state.index + " out of " + (this.props.cards.length)}</p>
                    <table>
                        <tbody>
                            <tr><td onClick={this.flip}>{this.props.cards[this.state.index - 1].back}</td></tr>
                        </tbody>
                    </table>
                    <br/>
                    <button onClick={this.previous}>Previous</button>
                    
                    <button onClick={this.next}>Next</button>

                    <hr/>
                    <Link to="/">Home</Link>
                </div>
            );
        }

        
    }

}

const mapStateToProps = (state, props) => {
    console.log(state);
    const deck = state.firebase.data[props.match.params.deckId];
    const name = deck && deck.name;
    const cards = deck && deck.cards;
    return {cards: cards, name: name};
};

export default compose(
    withRouter, 
    firebaseConnect(props => {
        console.log('props', props);
        const deckId = props.match.params.deckId;
        return [{path: `/flashcards/${deckId}`, storeAs: deckId}];
    }),
    connect(mapStateToProps),
 )(Cardviewer);