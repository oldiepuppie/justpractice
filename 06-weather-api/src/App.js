import Tester from './Components/Tester';

function App() {
  return (
    <div className="App">
      <h1>Testing Weather API</h1>
      <input type="text" />
      <button>찾기</button>
      <Tester 
        city={'tester'}
        temperature={'tester'}
        icon={'tester'}
        description={'tester'}
      />
    </div>
  );
}

export default App;
