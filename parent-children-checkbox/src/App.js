import './App.css';
import React from 'react';
import Checkbox from './Components/Checkbox';
import Select from './Components/Select';

function App() {
  return (
    <div className="App">
      <h1>test props and state</h1>
      <Checkbox />
      <Select />
    </div>
  );
}



// function Parent() {
//   return (
//     <div className="parent">
//       <h2>I'm your parent.</h2>
//       <Child>리액트를 배우고 있습니다</Child>
//     </div>
//   );
// }

// function Child(props) {
//   return (
//     <div className="child">{props.children}</div>
//   );
// }

export default App;
