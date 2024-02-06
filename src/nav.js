import logo from './logo.svg';
import './App.css';
import Cbody from './body';
import './nav.css';





import React, { useState } from 'react';
import styled from '@emotion/styled';

const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleNavbar = () => {
            setIsOpen(!isOpen);
      };

      return (
            <nav className=" md:py-3 App home py-10 rounded-lg px-10 ">

                  <div className=" container  ">

                        <div className='justify-between text-black md:flex  '>
                              <div className='flex space-x-4 pt-2'>
                                    <img src="images/m.jpg" className=' mx-1 h-8 rounded-full' />

                                    <h1 className='pt-1'>
                                          MITHILESH KUMAAR.</h1>

                              </div>
                              <div>
                                    <ul className='md:flex  pt-2 md:px-20 '>
                                          <li>
                                                <a href='#home'>Home</a>


                                          </li>
                                          <li>
                                                <a href='#about'>About.Me</a>
                                          </li>
                                          <li>
                                                <a href='#services'>
                                                      Services

                                                </a>
                                          </li>
                                          <li>
                                                <a href='#projects'>
                                                      Projects

                                                </a>

                                          </li>

                                          <li >
                                                <a href='#contacts'>
                                                      Contacts

                                                </a>
                                          </li>
                                    </ul>

                              </div>

                        </div>
                  </div>

            </nav >


      );
};

export default Navbar;
