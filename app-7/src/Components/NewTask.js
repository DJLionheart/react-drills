import React, { Component } from 'react';


class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }

    handleUserInput(e) {
        this.setState({
            userInput: e
        })
    }

    addTask() {
        this.props.addTask( this.state.userInput );
        this.setState({
            userInput: ''
        })
    }

    render() {
        const { userInput } = this.state;

        return(
            <div>
                <input onChange={ (e) => this.handleUserInput( e.target.value) }
                placeholder="Enter new task..."
                value={ this.state.userInput }/>
                <button onClick={ () => this.addTask( userInput )}>Add</button>
            </div>
        )
    }


}

export default NewTask;