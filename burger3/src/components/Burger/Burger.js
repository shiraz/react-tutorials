import React from 'react';
import {withRouter} from 'react-router-dom';

import classes from './Burger.css';

import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, arrLength) => {
            return <Ingredient key={ingredientKey + arrLength} type={ingredientKey}/>;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top"/>
            {transformedIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);