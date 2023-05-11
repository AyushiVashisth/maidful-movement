import './App.css';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-red-900">Maindful Movement</h2>
      <div className='border-1'>Hello</div>
    <Login/>
    </div>
  );
}

export default App;
