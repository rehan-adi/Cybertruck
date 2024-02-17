import React from 'react'

function FourthPage() {
  return (
    <div className='h-screen flex bg-[#171717] justify-center items-center w-auto'>
       <div className='flex gap-20 justify-center items-center'>
             <div className='w-[25vw] flex gap-20 justify-center items-center h-[10vh]'>
             <video autoPlay loop muted src="https://digitalassets.tesla.com/tesla-contents/video/upload/Cybertruck-No-Paint-No-Chips-Desktop-Mobile-Tablet.mp4"></video>
             </div>
             <div>
            <div className='flex flex-col justify-center border-t border-white border-r items-start h-[70vh] gap-7'>
            <h1 className='text-[#C7C7C7] text-3xl'>NO PAINT, NO CHIPS</h1>
           <div className='w-[35vw]'>
           <p className='text-[#8E8E8E] text-lg line-height'>AN ULTRA-HARD STAINLESS-STEEL EXOSKELETON HELPS TO REDUCE DENTS, DAMAGE AND LONG-TERM CORROSION. REPAIRS ARE SIMPLE AND QUICK.</p>
           </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FourthPage