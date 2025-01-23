import './App.css';
import Navbar from './Components/Navbar';
import Statistics from './Components/Statistics';
import Home from './Pages/Home';
import Utilities from './Pages/Utilities';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Statistics />
      <Utilities />
    </div>
  );
}

export default App;
