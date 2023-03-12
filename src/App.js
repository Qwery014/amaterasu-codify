import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoutes from './MainRoutes';
import Navbar from "../src/components/Navbar"
import AuthContextProvider from './contexts/AuthContextProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
