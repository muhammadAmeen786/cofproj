import React from 'react';
import './navbar.css'

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
  
    <div className="bg-image contains" style={{ backgroundImage: 'url("https://images.pexels.com/photos/6873141/pexels-photo-6873141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div className="container text-center mt-5 pt-5 mainHeading" >
        <h1 className="heading welcomeHeading">Welcome to Coforge Mall</h1>
        <p className="text-emphasis tagLine">Your one-stop destination for shopping.</p>
      </div>
    </div>
    
   <Link to='/cards'> <button type='button' className='btn btn-primary row d-flex justify-content-center align-content-center w-50 p-3 mt-5 mx-auto'>Show Some Stores</button></Link>
    
   
    </>
  );
};

export default HomePage;
