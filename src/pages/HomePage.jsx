import { Button } from '@mui/material';
import React from 'react';
// import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import "../styles/Homepage.css"


const HomePage = () => {
  const navigate = useNavigate()
  return (
   
    <div className='HomePage'>
 <div className='HomeInfo'><p>Здравствуйте</p>
 <p>Добро пожаловать в наш сайт</p>
 <Button variant="contained" onClick={()=>navigate('profile')}>Наш каталог</Button>
 
 </div>


        </div>
  );
};

export default HomePage;
