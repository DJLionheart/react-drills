import React, {Component} from 'react';

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }
    handleInput( e ) {
        this.setState({
            userInput: e
        })
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.inputBox}
                onChange={(e) => this.handleInput( e.target.value )} />
                <button onClick={this.props.add}>Add</button>
            </div>
        )
    }
}

export default NewTask;