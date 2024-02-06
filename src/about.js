
import './App.css';
import Plx from 'react-plx';
import styled from '@emotion/styled';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { MouseParallax, ScrollParallax } from "react-just-parallax";




function about() {
      return (
            <div class="xl:container mx-auto  App xl:px-[10]grid grid-flow-row auto-rows-max  ">
                  <ScrollParallax strength={0.1}>
                        <div className='xl:container    App  ' style={{}}>


                              <div className='  grid-row-2 ' >
                                    <div class="md:columns-2 ">

                                          <h1 className='text-3xl font-medium'>.MITHILESH KUMAAR</h1>
                                          <h2 className='text-3xl font-normal pt-5 ' >
                                                <span className='font-bold'>   Frontend Developer</span>, with knowledge in web development and design, I offer the best projects resulting in quality work.
                                          </h2>
                                          <div class="main__action py-8 text-" >
                                                <a class="main__scroll" href="#">
                                                      <div class="main__scroll-box flex ">
                                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='h-12 '>
                                                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                                                  <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="rgba(28,28,30,1)">
                                                                  </path>
                                                            </svg>
                                                            <span class="main__scroll-text pt-2 px-2 text-xl">Scroll</span>

                                                      </div>

                                                </a>
                                          </div>

                                          <img src='images/m.jpg' className='w-4/5 py rounded-lg '></img>





                                    </div>



                              </div>




                        </div>
                  </ScrollParallax>

            </div>


















      )
}

export default about;
<styled>

</styled>