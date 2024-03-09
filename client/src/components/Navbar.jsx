import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonComp from './Button';

const NavbarComp = () => {
  const[showdd1,setShowDD1]=useState(false);
  const[showdd2,setShowDD2]=useState(false);
  const[showdd3,setShowDD3]=useState(false);
  const[showdd4,setShowDD4]=useState(false);

  const menuArr = ['Home','Services','GST','Reach Us']
 
  return (
    <Navbar expand="lg" sticky="top" className="bg-white border-1">
      <Container >
        <Navbar.Brand href="#home" className='font-bold text-5xl my-3 mx-3'>Company Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto flex justify-around gap-6 lg:gap-16 ms-24">
            {menuArr.map((a,ind)=>(
              <>
                <div key={ind} className='relative lg:w-auto md:w-auto w-28  dropBtn  p-0  '
                >
                  <button className={`hover:text-primaryone btn1   py-2 text-lg font-semibold`}
                
                  >{a}
                    <FontAwesomeIcon className='text-sm mx-1' icon={faChevronDown} />
                  </button>
                
                    <div
                  
                    class="dropMenu lg:top-10 md:top-10 lg:-left-7 md:-left-7  lg:absolute md:absolute border lg:min-w-40 w-36  bg-white flex flex-col text-center ">
                      <p>Link 1</p>
                      <p>Link 2</p>
                      <p>Link 3</p>
                    </div>
            
                </div>
              </>
            ))}
           
            
            {/* <Nav.Link href="#home" className='relative inline-block'>
              Home
            </Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div className='hidden lg:block'>

            <ButtonComp
              
              text='Consult Now'
              color1='primarytwo'
              color2='primaryone'
              color3='primaryone'
              textcolor='white'
                textafter='white'
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
