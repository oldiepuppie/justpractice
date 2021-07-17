import './App.css';
import React from 'react';
import Checkbox from './Components/Checkbox';
import Select from './Components/Select';
import PopUp from './Components/PopUp';

function App() {
  return (
    <div className="App">
      <h1>test props and state</h1>
      <Parent />
      <Checkbox />
      <Select />
      <PopUp />
    </div>
  );
}

function Parent() {
  return (
    <div className="parent">
      <h2>props</h2>
      <Child>리액트를 배우고 있습니다.</Child>
    </div>
  );
}

function Child(props) {
  return (
    <div className="child">This is a child : {props.children}</div>
  );
}

export default App;