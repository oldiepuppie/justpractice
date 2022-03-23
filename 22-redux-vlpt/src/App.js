import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div className="App">
      <TodosContainer />
      <CounterContainer />
    </div>
  );
}

export default App;
