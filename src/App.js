import logo from './logo.svg';
import './App.css';
import Cbody from './body';
import Nav from './nav';
import About from './about';



import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='xl:container  mx-auto  my-10 px-6 '>
      <Nav className='' />
      <Cbody />

    </div>



  );
};

export default Navbar;
