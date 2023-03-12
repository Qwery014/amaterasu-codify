import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoutes from './MainRoutes';
import Navbar from "../src/components/Navbar"
import PlaceContextProvider from './contexts/PlaceContextProvider';

function App() {
  return (
    <BrowserRouter>
      <PlaceContextProvider>
        <Navbar />
        <MainRoutes />
      </PlaceContextProvider>
    </BrowserRouter>
  );
}

export default App;
