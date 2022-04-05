import CounterContainer from "./containers/CounterContainers";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <h1>7-redux-middleware</h1>
      <Routes>
        <Route path="/" element={<PostListPage />} exact={true} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
      <CounterContainer />
    </div>
  );
}

export default App;
