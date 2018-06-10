import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {

    state = {
        usernames: ['UsernameFromStateObject']
    };

    deleteTextCharacterHandler = (index) => {
        const textChars = Array.from(this.state.text);
        textChars.splice(index, 1);
        this.setState({
            text: textChars.join,
            textLength: textChars.length
        })
    };

    eventHandler = (event) => {
        this.setState({
            usernames: [event.target.value]
        })
    };

    textLengthHandler = (event) => {
        this.setState({
            text: event.target.value,
            textLength: event.target.value.length
        })
    };

    render() {

        let charComponents = null;

        if (this.state.textLength > 0) {
            const chars = Array.from(this.state.text);
            charComponents = (
                <div>
                    {chars.map((x, index) => {
                            return <CharComponent
                                click={() => this.deleteTextCharacterHandler(index)}
                                key={Math.random().toString(36).substring(7)}
                                textCharacter={x}/>
                        })
                    }
                </div>
            );
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <UserOutput username="TestUsername_hardcoded"/>
                <UserOutput username={this.state.usernames[0]}/>
                <UserInput changed={this.eventHandler}></UserInput>
                <div className="assignment2_input_div">
                    <input style={this.style} className="assignment2_input" type="text"
                           onChange={this.textLengthHandler}/>
                </div>
                <p>
                    The length of the entered text is: {this.state.textLength} character(s).
                </p>
                <ValidationComponent textLength={this.state.textLength}/>
                {charComponents}
            </div>
        );
    }
}

export default App;
