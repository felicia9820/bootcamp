import React from 'react';
import './Cardviewer.css';

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
                    <table>
                        <thead>
                            <tr><th>{"Card " + this.state.index + "/" + (this.props.cards.length)}</th></tr>
                        </thead>
                        <tbody>
                            <tr><td onClick={this.flip}>{this.props.cards[this.state.index - 1].front}</td></tr>
                        </tbody>
                    </table>
                    
                    <button onClick={this.previous}>Previous</button>
                   
                    <button onClick={this.next}>Next</button>

                    <hr/>
                    <button onClick={this.props.switchMode}>Go to card editor</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Card Viewer</h2>
                    <table>
                        <thead>
                            <tr><th>{"Card " + this.state.index + "/" + (this.props.cards.length)}</th></tr>
                        </thead>
                        <tbody>
                            <tr><td onClick={this.flip}>{this.props.cards[this.state.index - 1].back}</td></tr>
                        </tbody>
                    </table>
                    
                    <button onClick={this.previous}>Previous</button>
                    
                    <button onClick={this.next}>Next</button>

                    <hr/>
                    <button onClick={this.props.switchMode}>Go to card editor</button>
                </div>
            );
        }

        
    }

}

export default Cardviewer;