import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoutes from './MainRoutes';
import Navbar from "../src/components/Navbar"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
