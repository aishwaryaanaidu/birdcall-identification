import './App.css';
import { BirdCall } from './components/BirdCall';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'white'}}>Bird call identification</h1>
      <div>
        <BirdCall />
      </div>
      
    </div>
  );
}

export default App;
