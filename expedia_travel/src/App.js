import { ThemeContext } from './Context/ThemeContext/ThemeContext';
import { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes'



function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="App" id={theme}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;


