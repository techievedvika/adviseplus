import React from 'react'
import Navbar from '../components/Navbar'
import CarouselComp from '../components/Carousel'
import ButtonComp from '../components/Button'

import {  faArrowRight, faArrowRightLong, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../components/Footer'
import '../style.css';

const Home = () => {
  return (
    <>
        <Navbar/>
        <CarouselComp/>
        <div className='2'>
            <div className='lg:grid lg:grid-flow-col lg:col-span-2 my-6 py-4 pt-36  lg:px-12'>
                <div className='hidden lg:block '>
                  <img src='https://caportal.saginfotech.com/caportal/ca-template-88/images/about.png'/>
                </div>
                <div className='lg:mx-2 flex flex-col max-[440px]:text-center justify-center items-center lg:justify-stretch '>
                    <h3 className='text-2xl text-start   text-primaryone font-semibold'>
                      <span className='text-3xl mx-1'>-</span>
                      About Us</h3>
                      <div className='lg:flex lg:justify-center lg:my-4 '>
                      <h1 className='font-bold max-[440px]:mx-10 max-[440px]:text-3xl text-4xl text-center text-[#14212b] lg:mx-0  lg:w-96 mx-10 my-2 mb-4'>
                     Charted Accountants
                      </h1>
                    </div>
                    <p className='text-secondary text-lg mx-16 lg:ms-0 lg:mx-auto'>
                  <span className='font-bold'>Chartered Accountants</span> - Established in 1992, with over three decades of providing world class services to our clients with utmost dedication and striving for excellence.
                    </p>
                    <p className='my-3 text-secondary text-lg mx-16  lg:ms-0 lg:mx-auto'>
                    We provide multidisciplinary expert services to meet all the requirements of our clients, with a focus on creating long term partnerships, meeting their immediate as well as long term business needs. We are empowered by a team of professionals who are technically competent, well trained, strongly motivated and committed to bringing more value to enhance our client experience, ensuring highest level of client satisfaction.
                    </p>
                    <ButtonComp
                        text='Readmore >'
                        color1='primarytwo'
                        color2='primaryone'
                        color3='primaryone'
                        textcolor='white'
                        textafter='white'
                    />
                </div>
            </div>
            <div className='flex flex-col py-24 text-center my-12 mt-24 bg-[#f8f8f8]'>
                <h3 className='text-2xl   text-primaryone font-semibold'>
                  <span className='text-3xl mx-1'>-</span>
                  Company Services
                </h3>
                <div className='lg:flex lg:justify-center lg:my-4 '>
                      <h1 className='font-bold max-[440px]:mx-10 max-[440px]:text-3xl text-4xl text-center text-[#14212b] lg:mx-0  lg:w-96 mx-10 my-2 mb-4'>
                      We Provide Most Exclusive
Service For Business
                      </h1>
                    </div>
                <div className='grid px-24 max-[440px]:px-10 w-full text-white lg:grid-flow-col lg:col-span-3 gap-5'>
                    <div className='border lg:w-full'>
                      <div>
                        <img className=' w-full bg-contain' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NLVPqMZKG4xSg7jJQONFTyKVi_44mJTF9w&usqp=CAU'/>
                      </div>
                          <div className='bg-primarytwo  w-full flex p-6 py-3 justify-between'>
                            <FontAwesomeIcon className='text-4xl hover:translate-x-1 transition duration-100 ease-out hover:text-5xl' icon={faArrowRight} />
                            <p className='font- text-lg'>Auditing and Assurance</p>
                            
                          </div>
                    </div>
                    <div className='border lg:w-full'>
                      <div>
                        <img className=' w-full bg-contain' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NLVPqMZKG4xSg7jJQONFTyKVi_44mJTF9w&usqp=CAU'/>
                      </div>
                          <div className='bg-primarytwo  w-full flex p-6 py-3 justify-between'>
                            <FontAwesomeIcon className='text-4xl hover:translate-x-1 transition duration-100 ease-out hover:text-5xl' icon={faArrowRight} />
                            <p className='font- text-lg'>Auditing and Assurance</p>
                            
                          </div>
                    </div>
                    <div className='border lg:w-full'>
                      <div>
                        <img className=' w-full bg-contain' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NLVPqMZKG4xSg7jJQONFTyKVi_44mJTF9w&usqp=CAU'/>
                      </div>
                          <div className='bg-primarytwo  w-full flex p-6 py-3 justify-between'>
                            <FontAwesomeIcon className='text-4xl hover:translate-x-1 transition duration-100 ease-out hover:text-5xl' icon={faArrowRight} />
                            <p className='font- text-lg'>Auditing and Assurance</p>
                            
                          </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center  w-full bg-[#f8f8f8]'>
                <div className='flex justify-center  p-16 px-10 items-center flex-col lg:flex-row w-4/5 bg-primarytwo'>
                    <div>
                      <img alt='img' src='https://caportal.saginfotech.com/caportal/ca-template-88/images/why-1.png'/>
                    </div>
                  <div className='mx-12 lg:mx-2'>
                    <h3 className='text-2xl  text-primaryone font-semibold'>
                      <span className='text-3xl mx-1'>-</span>
                      What We Do
                    </h3>
                    <h1 className='font-bold text-4xl  text-white my-2 mb-4'>
                      Why Choose
                      Chartered Accountants
                    </h1>
                    <p className='text-white text-lg my-2'>
                    Sedut perspiciatis unde omnis iste natus evoluptat em accusantium doloremque laudantium
                    </p>
                    <ul className='m-0 p-0 mb-4'>
                        <li className='text-lg list-none text-white my-3'>
                        <FontAwesomeIcon style={{color:'white',marginRight:6}} icon={faCircleCheck} />
                        Specialist Company Advisor Team
                        </li>
                        <li className='text-lg list-none text-white my-3'>
                        <FontAwesomeIcon style={{color:'white',marginRight:6}} icon={faCircleCheck} />
                        Understanding Machines OpenS tandard
                        </li>
                        <li className='text-lg list-none text-white my-3'>
                        <FontAwesomeIcon style={{color:'white',marginRight:6}} icon={faCircleCheck} />
                        Can Data Visualization Improve Mobile
                        </li>
                    </ul>
                    <ButtonComp
                      className='my-6'
                      text='Join With Us'
                        color1='primaryone'
                        color2='primarytwo'
                        color3='white'
                        textcolor='white'
                        textafter='black'
                    />
                  </div>
                </div>
            </div>
            <div className='my-6 mt-36'>
                  <h3 className='text-2xl my-4 text-center text-primaryone font-semibold'>
                      <span className='text-3xl mx-1'>-</span>
                      Meet Our Advisors
                      <span className='text-3xl mx-1'>-</span>
                    </h3>
                    <div className='lg:flex lg:justify-center lg:my-4 '>
                      <h1 className='font-bold max-[440px]:mx-10 max-[440px]:text-3xl text-4xl text-center text-[#14212b] lg:mx-0  lg:w-96 mx-10 my-2 mb-4'>
                      We Have Exclusive
                      Team Members
                      </h1>
                    </div>
                    <div className='flex flex-col gap-6  items-center justify-center lg:flex-row flex-wrap '>
                        <div>
                          <img src='https://caportal.saginfotech.com/caportal/ca-template-88/images/team-1.jpg'/>
                          <h5 className='text-center my-2'>Name</h5>
                          <h6 className='font-bold text-center text-secondary'>Position</h6>
                        </div>
                        <div>
                          <img src='https://caportal.saginfotech.com/caportal/ca-template-88/images/team-1.jpg'/>
                          <h5 className='text-center my-2'>Name</h5>
                          <h6 className='font-bold text-center text-secondary'>Position</h6>
                        </div>
                        <div>
                          <img src='https://caportal.saginfotech.com/caportal/ca-template-88/images/team-1.jpg'/>
                          <h5 className='text-center my-2'>Name</h5>
                          <h6 className='font-bold text-center text-secondary'>Position</h6>
                        </div>
                        <div>
                          <img src='https://caportal.saginfotech.com/caportal/ca-template-88/images/team-1.jpg'/>
                          <h5 className='text-center my-2'>Name</h5>
                          <h6 className='font-bold text-center text-secondary'>Position</h6>
                        </div>
                    </div>
            </div>
            <div className='bg-[#f8f8f8] my-8 py-12'>
                <h3 className='text-2xl my-4 text-center text-primaryone font-semibold'>
                      <span className='text-3xl mx-1'>-</span>
                      Important Articles
                      <span className='text-3xl mx-1'>-</span>
                </h3>
                <div className='lg:flex lg:justify-center lg:my-4 '>
                  <h1 className='font-bold max-[440px]:mx-10 max-[440px]:text-3xl text-4xl text-center text-[#14212b] lg:mx-0  lg:w-96 mx-10 my-2 mb-4'>
                      Something Know Our
                      Latest News & Blog
                  </h1>
                </div>
                <div className=' flex flex-col lg:flex-row my-4 gap-10 items-center justify-center'>
                    <div className='bg-white p-0 w-2/3 lg:w-1/4'>
                      <div className='w-full border bg-primaryone text-center text-xl p-2 text-white font-bold'>News</div>
                      <div className="overflow-hidden h-[16rem]  px-4">
                        <div className="animate-scrolling-text">
                          {/* Add your scrolling lines here */}
                          <p className="text-left text-sm py-1 px-2">Line 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <p className="text-left text-sm py-1 px-2">Line 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p className="text-left text-sm py-1 px-2">Line 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                          {/* Add more lines as needed */}
                        </div>
                      </div>
                      <div className='p-2'>
                        <p className='font-semibold'>
                        Learn More
                        <FontAwesomeIcon className='mx-2' icon={faArrowRightLong} />
                        </p>
                      </div>
                    </div>
                    <div className='bg-white p-0 w-2/3 lg:w-1/4'>
                      <div className='w-full border bg-primaryone text-center text-xl p-2 text-white font-bold'>Due Date Reminder</div>
                      <div className="overflow-hidden h-[16rem]  px-4">
                        <div className="animate-scrolling-text">
                          {/* Add your scrolling lines here */}
                          <p className="text-left text-sm py-1 px-2">Line 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <p className="text-left text-sm py-1 px-2">Line 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p className="text-left text-sm py-1 px-2">Line 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                          {/* Add more lines as needed */}
                        </div>
                      </div>
                      <div className='p-2'>
                        <p className='font-semibold'>
                        Learn More
                        <FontAwesomeIcon className='mx-2' icon={faArrowRightLong} />
                        </p>
                      </div>
                    </div>
                    <div className='bg-white p-0 w-2/3 lg:w-1/4 '>
                      <div className='w-full border bg-primaryone text-center text-xl p-2 text-white font-bold'>Blog News</div>
                      <div className="overflow-hidden h-[16rem]  px-4">
                        <div className="animate-scrolling-text">
                          {/* Add your scrolling lines here */}
                          <p className="text-left text-sm py-1 px-2">Line 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <p className="text-left text-sm py-1 px-2">Line 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p className="text-left text-sm py-1 px-2">Line 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                          {/* Add more lines as needed */}
                        </div>
                      </div>
                      <div className='p-2'>
                        <p className='font-semibold'>
                        Learn More
                        <FontAwesomeIcon className='mx-2' icon={faArrowRightLong} />
                        </p>
                      </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 py-36 px-12'>
              <div>

                    <h3 className='text-2xl my-4  text-primaryone font-semibold'>
                      <span className='text-3xl mx-1'>-</span>
                      Send a Message
                      
                    </h3>
                    <h1 className='font-bold max-[440px]:text-3xl text-4xl m-0  text-[#14212b] mx-36 my-2 mb-4'>
                    Get in Touch
                    </h1>
                    <div>
                      <input 
                      className=' w-full py-2 px-4 my-3 bg-[#ececec]'
                        placeholder='Your Name'
                      />
                      <input 
                      className=' w-full py-2 px-4 my-3 bg-[#ececec]'
                        placeholder='Your Email'
                      />
                      <input 
                      className=' w-full py-2 px-4 my-3 bg-[#ececec]'
                        placeholder='Your Number'
                      />
                      <textarea
                       className=' w-full py-2 px-4 my-3 bg-[#ececec]'
                        placeholder='Type Your Message..'
                        rows={4}
                      ></textarea>
                      <button className='w-full py-3 text-xl text-white font-bold bg-primaryone hover:bg-primarytwo'>Send Message</button>
                    </div>
              </div>
              <div>
                <img src='https://caportal.saginfotech.com/caportal/ca-template-88/images/choose-image.svg'/>
              </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home
