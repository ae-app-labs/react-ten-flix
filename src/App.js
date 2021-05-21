import './App.css';
import Banner from './components/banner/Banner';
import NavBar from './components/navbar/NavBar';
import Row from './components/row/Row';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Banner/>

      <Row/>
    </div>
  );
}

export default App;
