import './App.css';
import Banner from './components/banner/Banner';
import NavBar from './components/navbar/NavBar';
import Row from './components/row/Row';
import { URL_ACTION, URL_ORIGINALS } from './constants/urls';

function App() {

  

  return (
    <div className="App">
      <NavBar/>

      <Banner/>

      <Row title="TenFlix Originals" url={URL_ORIGINALS}/>
      <Row title="Action Movies" isSmall url={URL_ACTION}/>

    </div>
  );
}

export default App;
