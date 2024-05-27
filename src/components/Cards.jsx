import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 px-32  items-center flex gap-5' >
    <div className="cardcontainer  h-[50vh] w-1/2">
<div className=" card  relative w-full h-full rounded-xl bg-[#004d43] flex justify-center items-center">
    <img className=' w-40 h-20' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
<button className='absolute px-5 py-1 rounded-full bottom-10 border-2 left-10 '>&copy; 2023-2024</button>
</div>
    </div>
    <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
<div className="card relative w-1/2 h-full rounded-xl bg-[#2d4341] flex items-center justify-center">
<img className=''src='	https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
<button className='absolute px-5 py-1 rounded-full bottom-10 border-2 left-10 '>Rationg5.0clutch</button>
</div>
<div className="card relative w-1/2 h-full rounded-xl bg-[#2e4945]  flex items-center justify-center">
<img className=''src='	https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
<button className='absolute px-1 py-1 rounded-full bottom-10 border-2 left-10 '>BUISNESSBOOTCAMPALUMNI</button>
</div>
    </div>
    </div>
  )
}

export default Cards
