import './App.css';
import Temp from './components/temperatureInput/temperatureInputer';
import CelsiusRow from './components/CelsiusRow';
import FahrenheitRow from './components/FahrenheitRow';

function App() {
  return (
    <>
      <h1>Temperature Converter</h1>
      <CelsiusRow />
      <div> </div>
      <FahrenheitRow />
    </>
  );
}

export default App;
