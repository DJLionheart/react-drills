import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="username" onChange={ (e) => this.props.user(e.target.value)}/>
                <input type="text" placeholder="password" onChange={ (e) => this.props.pass(e.target.value)}/>
                <button onClick={this.props.log}>Login</button>
            </div>
        )
    }
}

export default Login;