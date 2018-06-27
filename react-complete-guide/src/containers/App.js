import React, {Component} from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';

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

        /*
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'

        };*/

        let persons = null;


        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />


            /*
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            };*/
        }

        return (
            //<StyleRoot>
            //<div className="App">
            <div className={classes.App}>
                <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
            //</StyleRoot>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App!!!'));
    }
}

//export default Radium(App);
export default App;
