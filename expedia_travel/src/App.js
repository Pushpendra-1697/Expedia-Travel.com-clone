import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes'
import Stays from './Routes/Stays';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AllRoutes /> */}
      <Stays />
    </div>
  );
}

export default App;

