import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import BMI from './Pages/BMI';
import LandingPage from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BMI/>
    </div>
  );
}

export default App;
