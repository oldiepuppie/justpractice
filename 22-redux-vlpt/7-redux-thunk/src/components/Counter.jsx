function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h2>Counter</h2>
      <p style={{ fontWeight: "bold" }}>{number}</p>
      <button onClick={onIncrease}>+ 1</button>
      <button onClick={onDecrease}>- 1</button>
    </div>
  );
}

export default Counter;
