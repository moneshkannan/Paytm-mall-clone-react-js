
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Topbar from './components/Topbar'
import Card from './components/Card'
import Cars from './components/Cars'
import Cardtwo from './components/Cardtwo';
import Gadgetzone from './components/Gadgetzone';
import Cardthree from './components/Cardthree';
import Mobiletab from './components/Mobiletab';
import Cardfour from './components/Cardfour';
import Flashproduct from './components/Flashproduct';
import Bestlaptops from './components/Bestlaptops';
import Expfashion from './components/Expfashion';
import Electrobest from './components/Electrobest';
import Homeessen from './components/Homeessen';
import Ghbest from './components/Ghbest';
import Footers from './components/Footers';
import Content1 from './components/Content1';
import About from './components/About';
import Content2 from './components/Content2';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Card/>
      <Cars/>
      <Cardtwo/>
      <Gadgetzone/>
      <Cardthree/>
      <Mobiletab/>
      <Cardfour/>
      <Flashproduct/>
      <Bestlaptops/>
      <Expfashion />
      <Electrobest/>
      <Homeessen/>
      <Ghbest/>
      <Content1 />
      <Content2/>
      <About/>
      <Footers/>
      </div>
  );
}

export default App;
