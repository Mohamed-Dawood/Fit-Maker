import './App.css';
import Navbar from './Components/Navbar';
import Statistics from './Components/Statistics';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Statistics />
    </div>
  );
}

export default App;
