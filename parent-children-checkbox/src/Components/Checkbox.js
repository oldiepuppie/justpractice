import React, { useState } from 'react';

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  // isChecked라는 변수
  // 초기값은 false
  // setIsChecked는 isChecked의 상태를 변화시키는 함수

  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
    // event.target.checked를 참조 -> isChecked 변수의 값이 바뀐다
  };
  
  return (
    <div className="checkbox-example">
      <h2 className="checkbox-title">Checkbox</h2>
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      <span>{isChecked ? "Checked!!" : "Unchecked"}</span>
    </div>
  );
}