import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    //let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        //assignedClasses.push('red');
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        //assignedClasses.push('bold');
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working !!!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;