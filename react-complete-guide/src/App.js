import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
//import Radium, {StyleRoot} from 'radium';

class App extends Component {

    state = {
        persons: [
            {id: '34fgdgfh', name: 'Max1', age: 28},
            {id: 'e324e32', name: 'Manu', age: 29},
            {id: 'fdewsfr435', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    // switchNameHandler = (newName) => {
    //     //console.log('Was clicked');
    //     this.setState({
    //         persons: [
    //             {name: newName, age: 28},
    //             {name: 'Manu', age: 29},
    //             {name: 'Stephanie', age: 27}
    //         ]
    //     })
    // };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState(
            {persons: persons}
        )
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})

    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
            /*
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }*/
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );

            style.backgroundColor = 'red';
            /*
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            };*/
        }

        //let classes = ['red', 'bold'].join(' ');
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            //<StyleRoot>
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working !!!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
            //</StyleRoot>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App!!!'));
    }
}

//export default Radium(App);
export default App;
