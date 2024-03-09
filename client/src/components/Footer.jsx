import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    const links = ['Home', 'About Us', 'Contact Us', 'Blog']
  return (
    <div className='bg-primarytwo py-10 px-16 lg:justify-around flex flex-col lg:flex-row'>
      <div>
            <p className='text-white font-bold my-4 text-xl'>Useful Links</p>
            {links.map((a,ind)=>(
                <p key={ind} className='text-secondary my-1.5'>
                    <span className=' font-black text-lg mr-1'>{'>'}</span>
                    {a}
                </p>
            ))}
      </div>
      <div>
            <p className='text-white font-bold my-4 text-xl'>Our Services</p>
            {links.map((a,ind)=>(
                <p key={ind} className='text-secondary my-1.5'>
                    <span className=' font-black text-lg mr-1'>{'>'}</span>
                    Service {ind+1}
                </p>
            ))}
      </div>
      <div>
            <p className='text-white font-bold my-4 text-xl'>Important Links</p>
            {links.map((a,ind)=>(
                <p key={ind} className='text-secondary my-1.5'>
                    <span className=' font-black text-lg mr-1'>{'>'}</span>
                    Link {ind+1}
                </p>
            ))}
      </div>
      <div>
            <p className='text-white font-bold my-4 text-xl'>Contact Us</p>
            <p className='text-secondary my-2'>
            <FontAwesomeIcon className='text-primaryone mx-1' icon={faLocationDot} />
            ABC street
            </p>
            <p className='text-secondary my-2'>
            <FontAwesomeIcon className='text-primaryone mx-1' icon={faPhone} />
            1234567
            </p>
            <p className='text-secondary my-2'>
            <FontAwesomeIcon className='text-primaryone mx-1' icon={faEnvelope} />
           abc@gmail.com
            </p>
      </div>
    </div>
  )
}

export default Footer
