import React, { useState } from 'react';

export default function Select() {
  const meals = ["아침", "점심", "저녁"];
  const options = meals.map((meal, index) => {
    return <option value={meal} key={index}>{meal}</option>;
  })
  const [choice, setChoice] = useState(meals[0]);

  const handleMeals = (event) => {
    setChoice(event.target.value);
  }

  return (
    <div className="example">
      <h2 className="select-title">
        Select
      </h2>
      <select onChange={handleMeals}>
        {options}
      </select>
      <p>
        <span>{choice}</span> 맛있게 드세요.
      </p>
    </div>
  );
}