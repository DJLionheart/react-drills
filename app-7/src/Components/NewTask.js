import React, {Component} from 'react';

class NewTask extends Component {
    
    handleInput( e ) {
        
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.props.handle( e.target.value )}/>
                <button onClick={this.props.add}>Add</button>
            </div>
        )
    }
}

export default NewTask;