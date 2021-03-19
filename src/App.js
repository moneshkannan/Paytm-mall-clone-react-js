
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
    </div>
  );
}

export default App;
