import CounterContainer from "./containers/CounterContainers";
import PostListContainer from "./containers/PostListContainer";

function App() {
  return (
    <div className="App">
      <h1>7-redux-middleware</h1>
      <PostListContainer />
      <CounterContainer />
    </div>
  );
}

export default App;
