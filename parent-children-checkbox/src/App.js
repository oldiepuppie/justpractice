import './App.css';
import React from 'react';
import Checkbox from './Components/Checkbox';

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <Checkbox />
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
