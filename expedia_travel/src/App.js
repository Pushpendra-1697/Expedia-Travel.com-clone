import { ThemeContext } from './Context/ThemeContext/ThemeContext';
import { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes'
import Footer from './Components/Footer';
import { AuthContext } from './Context/AuthContext';

function App() {
  const { theme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);

  return (
    <div className="App" id={theme}>
      <Navbar />
      <AllRoutes />
      {isAuth && <Footer />}
    </div>
  );
}

export default App;


