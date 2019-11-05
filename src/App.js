import React from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const defaultState = {
  welcome: "Hi",
  otherState: "Some stuff",
  otherStates: "Some other stuff"
}

const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case 'GREET_ME':
      return { ...state, welcome: 'Hello GREET_ME' };
    case 'GREET_WORLD':
      return { ...state, welcome: 'Hello GREET_WORLD' };
    case 'API':
      return { ...state, welcome: action.apidata };
    default:
      return state;
  }
};

const store = createStore(greeting);

console.log(store.getState())

const apidata = 'Something coming back from the api';

store.dispatch({
  type: 'API',
  apidata: apidata
})

console.log(store.getState())
