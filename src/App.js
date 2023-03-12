import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoutes from './MainRoutes';
import Navbar from "../src/components/Navbar"
import AuthContextProvider from './contexts/AuthContextProvider';
import PlaceContextProvider from './contexts/PlaceContextProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <PlaceContextProvider>
          <Navbar />
          <MainRoutes />
        </PlaceContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
