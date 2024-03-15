import React, { useState } from 'react'

const ButtonComp = (props) => {
    let{color1,color2,color3,text,textcolor,textafter} = props;
  
    const[position,setPosition]=useState({
      width:'btnWidth',
      left:'leftBefore',
      color:color2,
      text:textcolor,
      bg:color1,
      margin:'3'
    })
   
  return (
    <div className='my-2 max-[440px]:my-1' >
        <button 
          onMouseEnter={()=>setPosition(
            {
              width:'widthFull',
              left:'leftAfter',
              color:color3,
              text:textafter,
              bg:color3,
              margin:'0'
            }
            )}  
          onMouseLeave={()=>setPosition(
            {
              width:'btnWidth',
              left:'leftBefore',
              color:color2,
              text:textcolor,
              bg:color1,
              margin:'3'
              })}  
          className={`bg-${position.bg} p-0 h-16 py-2 pl-3 transition-all  ps-3 items-center  w-52 max-[440px]:w-44 duration-1000 ease-in-out  overflow-visible text-white text-xl max-[440px]:text-lg  font-semibold relative flex  text-center rounded-full `}>
        
         <div className='z-1 my-3'>
         <span style={{margin:'4'}} className={`z-1  transition-all  ease-in-out duration-300 text-${position.text}`}>{text}</span>
         </div>
          
            <div  className={`absolute ${position.color} ${position.width} ${position.left} h-[3.5rem] w-${position.width} py-3 transition-all ease-in-out duration-500  bg-${position.color} rounded-full`}></div>
        </button>
    </div>
  )
}

export default ButtonComp
