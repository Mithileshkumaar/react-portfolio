import './nav.css'
import m from '../src/images/m.jpg'
import React, { useState } from 'react';

const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
      };

      return (
            <nav className="md:py-3 App home py-10 rounded-lg px-10">
                  <div className="container">
                        <div className="justify-between text-black md:flex">
                              <div className="flex space-x-4 pt-2 justify-between items-center">
                                    <img src={m} className="mx-1 h-8 rounded-full" alt="Avatar" />
                                    <h1 className="pt-1">MITHILESH KUMAAR.</h1>
                                    <span className="cursor-pointer md:hidden text-3xl" onClick={toggleMenu}>
                                          ☰
                                    </span>
                              </div>
                              <ul className={`md:flex md:item-center ${isMenuOpen ? 'block' : 'hidden'} md:space-x-4 mt-4 ml-28`}>
                                    <li className="m-2">
                                          <a href="#home" onClick={toggleMenu}>Home</a>
                                    </li>
                                    <li className="m-2">
                                          <a href="#about" onClick={toggleMenu}>About.Me</a>
                                    </li>
                                    <li className="m-2">
                                          <a href="#services" onClick={toggleMenu}>Services</a>
                                    </li>
                                    <li className="m-2">
                                          <a href="#projects" onClick={toggleMenu}>Projects</a>
                                    </li>
                                    <li className="m-2">
                                          <a href="#contacts" onClick={toggleMenu}>Contacts</a>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </nav>
      );
};

export default Navbar;
