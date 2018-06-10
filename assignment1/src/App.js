import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
    state = {
        usernames: ['UsernameFromStateObject']
    };

    eventHandler = (event) => {
        this.setState({
            usernames: [event.target.value]
        })
    };

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <UserOutput username="TestUsername"/>
                <UserOutput username={this.state.usernames[0]}/>
                <UserInput changed={this.eventHandler}></UserInput>
            </div>
        );
    }
}

export default App;
