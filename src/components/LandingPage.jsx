import { motion } from 'framer-motion';
import React from 'react'
import { DiVim } from 'react-icons/di';
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  
  return (
    <div  className='w-full h-screen bg-zinc-900 pt-1'>
   <div className='textstructure mt-40 px-20'>
    {["WE create" ,"eye Opening","Presentation"] .map((item ,index) =>{
      return(
        <div className="masker ">
          <div className='w-fit flex'>
          {index ===1 &&(< motion.div 
          initial={{width: 0}}
           animate={{width:"9vw"}} 
           transition= {{ease:[0.76 ,0 ,0.24, 1 ] , duration:1}}className=' mr-[1vw] rounded-md w-[9vw] h-[6vw] relative bg-green-500  top-6'></motion.div>)} 
        <h1 className=' uppercase text-9xl leading-[5.5vw]tracking-tighter font-["Founders_Grotesk"] font-regular'> {item}
        </h1>   
    </div>
    </div>
      )
    })}
    </div> 
    <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
      {["For public and private compnies" , "From the first pitch to IPO" ] .map((item ,index) =>(
        <p className='text-md font-light tracking-tight leading-none'>{item}</p>
      ))}
        <div className="start flex item-center gap-5">
      <div className="px-5 py 2 border-[2px] border-zinc-400  font-light text-lg uppercase rounded-full"> start the project</div>
      <div className='w-10 h-10 flex item-center justify-center border-[1px] border-zinc-300'> 
<span className='rotate-[45deg]' >
<FaArrowUpLong />
</span>
      </div>
    </div>
    </div>
    </div>
  )
}
export default LandingPage
