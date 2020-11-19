import React from 'react';
import './Cardviewer.css';
import {Link} from 'react-router-dom';

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

        if (this.state.front) {
            return (
                <div>
                    <h2>Card Viewer</h2>
                    
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
                    <Link to="/editor">Go to card editor</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Card Viewer</h2>
                    
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
                    <Link to="/editor">Go to card editor</Link>
                </div>
            );
        }

        
    }

}

export default Cardviewer;