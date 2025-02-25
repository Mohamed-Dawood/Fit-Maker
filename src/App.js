import './App.css';
import Navbar from './Components/Navbar';
import Statistics from './Components/Statistics';
import Home from './Pages/Home';
import Progress from './Pages/Progress';
import Questions from './Pages/Questions';
import Utilities from './Pages/Utilities';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Statistics />
      <Utilities />
      <Progress />
      <Questions />
    </div>
  );
}

export default App;
