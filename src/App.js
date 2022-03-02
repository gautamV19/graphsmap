import logo from './logo.svg';
import './App.css';
import VisNetwork from './VisNetworks'

function App() {
  return (
    <div className="App">
      <VisNetwork onClik={() => { console.log("jsn"); }} />
    </div>
  );
}

export default App;
