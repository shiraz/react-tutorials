import React, {useEffect, useMemo, useReducer, useRef, useState} from 'react';
import axios from 'axios';

import List from './List';

import {useFormInput} from '../hooks/form'

const todo = props => {

  //const [todoName, setTodoName] = useState('');
  //const [submittedTodo, setSubmittedTodo] = useState(null);
  //const [todoList, setTodoList] = useState([]);

  const [inputIsValid, setInputIsValid] = useState(false);

  //const todoInputRef = useRef();

  const todoInput = useFormInput();

  const todoListReducer = (state, action) => {
    switch(action.type) {
      case 'ADD':
        return state.concat(action.payload);
      case 'SET':
        return action.payload;
      case 'REMOVE':
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };

  const [todoList, dispatch] = useReducer(todoListReducer, []);

  useEffect(() => {
    axios.get('https://hooks-42508.firebaseio.com/todos.json').then(result => {
      console.log(result);
      const todoData = result.data;
      const todos = [];
      for (const key in todoData) {
        todos.push({id: key, name: todoData[key].name});
      }
      dispatch({type: 'SET', payload: todos});
    });
    return () => {
      console.log('cleanup');
    };
  }, []);

  // const mouseMoveHandler = event => {
  //   console.log(event.clientX, event.clientY);
  // };

  const inputValidationHandler = event => {
    if(event.target.value.trim() === '') {
      setInputIsValid(false);
    } else {
      setInputIsValid(true);
    }
  };

  // useEffect(() => {
  //   document.addEventListener('mousemove', mouseMoveHandler);
  //   return () => {
  //     document.removeEventListener('mousemove', mouseMoveHandler);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (submittedTodo) {
  //     dispatch({type: 'ADD', payload: submittedTodo});
  //   }
  // }, [submittedTodo]);

  // const inputChangeHandler = (event) => {
  //   setTodoName(event.target.value);
  // };

  const todoAddHandler = () => {
    const todoName = todoInput.value;
    axios.post('https://hooks-42508.firebaseio.com/todos.json', {name: todoName})
      .then(res => {
        setTimeout(() => {
          const todoItem = {id: res.data.name, name: todoName};
          //setSubmittedTodo(todoItem);
          dispatch({type: 'ADD', payload: todoItem});
        }, 3000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const todoRemoveHandler = todoId => {
    //const todoName = todoInputRef.current.value;
    const todoName = todoInput.value;
    axios.delete(`https://hooks-42508.firebaseio.com/todos/${todoId}.json`, {name: todoName})
      .then(res => {
        dispatch({type: 'REMOVE', payload: todoId});
      })
      .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <input type="text" placeholder="Todo" onChange={todoInput.onChange} value={todoInput.value} style={{backgroundColor: todoInput.validity === true ? 'transparent' : 'red'}} />
      <button type="button" onClick={todoAddHandler}>Add</button>
      {useMemo(() => (<List items={todoList} onClick={todoRemoveHandler} />), [todoList])}
  </React.Fragment>
  );

};

export default todo;