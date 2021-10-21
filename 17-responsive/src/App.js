import Header from './components/Header'
import Map from './components/pages/Map'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MapMarkerButton /> */}
      <Map />
      <Menu />
    </div>
  );
}

export default App;
