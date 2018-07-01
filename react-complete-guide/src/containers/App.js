import React, {PureComponent} from 'react';

import Aux from '../hoc/Aux';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
        this.state = {
            persons: [
                {id: '34fgdgfh', name: 'Max1', age: 28},
                {id: 'e324e32', name: 'Manu', age: 29},
                {id: 'fdewsfr435', name: 'Stephanie', age: 26}
            ],
            otherState: 'some other value',
            showPersons: false,
            toggleClicked: 0,
            authenticated: false
        };
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside component shouldComponentUpdate', nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside component componentWillUpdate', nextProps, nextState);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[UPDATE App.js] Inside component getDerivedStateFromProps', nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log('[UPDATE App.js] Inside component getSnapshotBeforeUpdate');
    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside component componentDidUpdate');
    }

    // state = {
    //     persons: [
    //         {id: '34fgdgfh', name: 'Max1', age: 28},
    //         {id: 'e324e32', name: 'Manu', age: 29},
    //         {id: 'fdewsfr435', name: 'Stephanie', age: 26}
    //     ],
    //     otherState: 'some other value',
    //     showPersons: false
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
        this.setState( (prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    };

    loginHandler = () => {
        this.setState({authenticated: true});
    };

    render() {

        console.log('[App.js] Inside render');

        let persons = null;


        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
                //isAuthenticated={this.state.authenticated}
            />

        }

        return (
            <Aux>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    login={this.loginHandler}
                    clicked={this.togglePersonsHandler}
                />
                <AuthContext.Provider value={this.state.authenticated}>
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

//export default Radium(App);
export default withClass(App, classes.App);
