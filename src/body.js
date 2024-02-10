
import './App.css';
import Plx from 'react-plx';
import styled from '@emotion/styled';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import About from './about';

import { MouseParallax, ScrollParallax } from "react-just-parallax";




function cbody() {
      const parallaxData = [
            {
                  start: 0,
                  end: 100,

                  properties: [
                        {
                              startValue: 0,
                              endValue: 100,

                              property: "translate"
                        },


                  ]
            },
      ]
      return (
            <div className="xl:container  App   ">
                  {/* MAIN */}
                  <ScrollParallax >
                        <div className='xl:container    App  ' style={{}}>


                              <div className='column-2 ' >
                                    <div class="md:columns-2 py-10">
                                          <div className='pt-48'>
                                                <h1 className='text-3xl font-medium'>.MITHILESH KUMAAR</h1>
                                                <h2 className='text-3xl font-normal pt-5 ' >
                                                      <span className='font-bold'>   Frontend Developer</span>, with knowledge in web development and design, I offer the best projects resulting in quality work.
                                                </h2>

                                                <div class="main__action py-8 " >
                                                      <a class="main__scroll mx-10" href="#about">
                                                            <div class="main__scroll-box flex ">
                                                                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='h-10 '>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="rgba(28,28,30,1)">
                                                                        </path>
                                                                  </svg>






                                                                  <span class="   text-2xl">Scroll</span>

                                                            </div>

                                                      </a>
                                                </div>
                                          </div>
                                          <img src='images/1.jpg' className='w-4/5  md:pt-32 pb-32 rounded-lg '></img>





                                    </div>



                              </div>




                        </div>
                  </ScrollParallax>
                  {/* about */}
                  <div className="xl:container  App  " id="about">

                        <ScrollParallax >
                              <div className='xl:container    App  ' style={{}}>


                                    <div className='column-2 ' >
                                          <div className="md:columns-2 ">
                                                <img src='images/3.jpg' className=' w-5/6 py-20 rounded-xl' alt='hi' ></img>

                                                <div className='md:pb-48 md:pt-36'>
                                                      <h1 className='text-3xl font-medium'>ABOUT ME</h1>
                                                      <h2 className='text-3xl font-normal pt-5 ' >
                                                            Passionate about creating <span className='font-bold'> Web Pages </span>with
                                                            <span className='font-bold'> UI/UX User Interface</span> , I have years of
                                                            experience and many cuents are naggu with the projects carried out.
                                                      </h2>
                                                      <div class="main__action py-8 " >
                                                            <a class="main__scroll mx-10" href="#services">
                                                                  <div class="main__scroll-box flex ">
                                                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='h-10 '>
                                                                              <path d="M0 0h24v24H0z" fill="none"></path>
                                                                              <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="rgba(28,28,30,1)">
                                                                              </path>
                                                                        </svg>

                                                                        <span class="   text-2xl">Scroll</span>

                                                                  </div>

                                                            </a>
                                                      </div>

                                                </div>






                                          </div>



                                    </div>




                              </div>
                        </ScrollParallax>

                  </div>
                  {/* services */}

                  <ScrollParallax >
                        <div className='xl:container     App py-28 ' id='services' style={{}}>
                              <h1 className='text-center text-4xl '>
                                    SERVICES
                              </h1>
                              <div class="cards md:px-48 py-10">
                                    <div class="card red">
                                          <p class="tip"><ion-icon name="desktop-outline" size="large" ></ion-icon></p>
                                          <p class="second-text md:px-10 md:text-2xl text-center ">UI/UX</p>

                                    </div>
                                    <div class="card white">
                                          <p class="tip"><ion-icon name="id-card-outline" size="large"></ion-icon></p>
                                          <p class="second-text text-2xl text-center pt-2">FRONT-END</p>

                                    </div>
                                    <div class="card white">
                                          <p class="tip"><ion-icon name="server-outline" size="large"></ion-icon></p>
                                          <p class="second-text text-2xl text-center pt-2">BACK-END</p>

                                    </div>
                              </div>





                        </div>
                  </ScrollParallax>

                  {/* projects */}

                  <ScrollParallax  >
                        <div className='xl:container pt-20  App ' style={{}} id='projects'>
                              <h1 className='text-center text-4xl md:pt-20  '>
                                    PROJECTS
                              </h1>
                              <div className='md:flex p-2 md:px-10'>
                                    <div class="card-container my-10">
                                          <div class="card_p">
                                                <div class="img-content">
                                                      <img src="images/d.jpeg" className='h-72 rounded-lg h-full'></img>
                                                </div>
                                                <div className="content h-auto px-36">
                                                      <p className="heading">HOSPTIAL</p>
                                                      <p className=" ">
                                                            A Mobile app to help people with emergency
                                                            with helps people to find ambulance,available beds in hospital in a much feasible way


                                                      </p>
                                                </div>
                                          </div>
                                    </div>

                                    <div class="card-container my-10">
                                          <div class="card_p">
                                                <div class="img-content">
                                                      <img src="images/cricket.jpeg" className='h-72 rounded-lg h-full'></img>
                                                </div>
                                                <div className="content h-auto">
                                                      <p className="heading">CRICKET</p>
                                                      <p className=" ">
                                                            A cricket fantasy website, which gets people connected with the game of cricket.
                                                            this projet was built in 2021.


                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div class="card-container my-10">
                                          <div class="card_p ">
                                                <div class="img-content">
                                                      <img src="images/do.jpeg" className='h-full rounded-lg w-full'></img>
                                                </div>
                                                <div class="content">
                                                      <p class="heading">DONATION</p>
                                                      <p>
                                                            A Web based Application which helps to the orphan's eat BETTER.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div class="card-container my-10">
                                          <div class="card_p">
                                                <div class="img-content">
                                                      <img src="images/c.jpeg" className='h-full'></img>
                                                </div>
                                                <div class="content">
                                                      <p class="heading">CULTURALS</p>
                                                      <p>

                                                            Collaborated with the college cultural team to develop a website for the cultural event.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>




                        </div>
                  </ScrollParallax>
                  {/* contacts */}
                  <ScrollParallax >
                        <div className='xl:container  pt-48 my-10  App  ' style={{}} id='contacts'>


                              <div className='column-2 hi ' >

                                    <div class="md:columns-2 py-32 ">
                                          <div className='m-auto  rounded-lg px-10'>
                                                <h1 className='text-3xl font-medium  ' >CONTACT ME</h1>
                                                <h2 className='text-3xl font-normal pt-5 ' >
                                                      I will read all Messages. Send me any Messages you want and I'll get back to you.
                                                </h2>
                                                <div class="main__action py-8 text-" >
                                                      <a class="main__scroll" href="#">
                                                            <div class=" flex ">

                                                                  <div class="card_c">
                                                                        <span>Social</span>

                                                                        <a class="social-link" href="https://github.com/Mithileshkumaar">
                                                                              <ion-icon name="logo-github"></ion-icon>
                                                                        </a>
                                                                        <a class="social-link" href="https://www.linkedin.com/in/mithilesh-kumaar-84b011216/">
                                                                              <ion-icon name="logo-linkedin"></ion-icon>
                                                                        </a>
                                                                        <a class="social-link" href="tel:9003107555">
                                                                              <ion-icon name="call"></ion-icon>
                                                                        </a>
                                                                        <a class="social-link" href="https://www.instagram.com/mithilesh_kumaar/">
                                                                              <ion-icon name="logo-instagram"></ion-icon>
                                                                        </a>
                                                                        <a class="social-link" href="https://www.facebook.com/mithilesh.kumaar/">
                                                                              <ion-icon name="logo-facebook"></ion-icon>
                                                                        </a>
                                                                        <a class="social-link" href="mailto: mithilesh.kumaar2015@gmail.com">
                                                                              <ion-icon name="mail"></ion-icon>
                                                                        </a>

                                                                  </div>


                                                            </div>

                                                      </a>
                                                </div>
                                          </div>






                                    </div>



                              </div>




                        </div >
                  </ScrollParallax >

            </div >






















      )
}

export default cbody;
<styled>

</styled>