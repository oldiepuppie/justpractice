import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <Checkbox />
      {/* <Parent /> */}
    </div>
  );
}

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  // isChecked라는 변수
  // 초기값은 false
  // setIsChecked는 isChecked의 상태를 변화시키는 함수

  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
    // event.target.checked를 참조 -> isChecked 변수의 값이 바뀐다
  };

  // onChange가 정확히 뭔지 알아보기
  return (
    <div className="checkbox-example">
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      <span>{isChecked ? "Checked!!" : "Unchecked"}</span>
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
