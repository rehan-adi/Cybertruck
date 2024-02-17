import React from 'react'

function ThirdPage() {
  return (
    <div className='h-[120vh] w-auto bg-[#171717] flex justify-center items-start'>
        <div className='w-[80vw] border-r mt-20 border-b border-yellow-500'>
        <video loop autoPlay muted src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Cybertruck-Built-For-Any-Planet-Desktop.mp4"></video>
        <div className='flex justify-center gap-24 items-center h-24'>
             <h2 className='text-[#A2A3A5] tracking-widest text-xl'>BUILT FOR</h2>
             <h1 className='text-[#C7C7C7] tracking-widest text-3xl'>ANY PLANET</h1>
             <div className='w-[40vw]'>
             <p className='text-[#8E8E8E] text-xs tracking-wide'>DURABLE AND RUGGED ENOUGH TO GO ANYWHERE. TACKLE ANYTHING WITH ELECTRONICALLY ADAPTIVE AIR SUSPENSION THAT OFFERS 12” OF TRAVEL AND 17” OF CLEARANCE.</p>
             </div>
        </div>
        </div>
    </div>
  )
}

export default ThirdPage