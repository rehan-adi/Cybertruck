import React from 'react'

function SecondPage() {
  return (
    <div className='SecondPage-img  h-screen w-auto flex justify-center items-center'>
        <div className='flex justify-center mt-[420px] items-center gap-10'>
             <div className='w-[12vw] h-[12vh] flex justify-center items-center border-white border-t-2 border-r-2'>
                    <div className='h-[10vh] flex pl-3 justify-center items-start flex-col w-[11vw] bg-[#12121280]'>
                               <h1 className='text-3xl text-[#C7C7C7]'>11, 000<span className='text-xl ml-5'>LBS</span></h1>
                               <p className='text-[#A2A3A5] text-sm'>TOWING CAPACITY</p>
                    </div>
             </div>
             <div className='w-[12vw] h-[12vh] flex justify-center items-center border-white border-t-2'>
             <div className='h-[10vh] flex pl-3 justify-center items-start flex-col w-[11vw] bg-[#12121280]'>
                      <h1 className='text-3xl text-[#C7C7C7]'>340 <span className='text-xl ml-3'>MILES</span></h1>
                      <p className='text-[#A2A3A5] text-sm'>EST. RANGE</p>          
             </div>
             </div>
             <div className='w-[12vw] h-[12vh] flex justify-center items-center border-white border-t-2 border-l-2'>
             <div className='h-[10vh] flex justify-center pl-3 items-start flex-col w-[11vw] bg-[#12121280]'>
                               <h1 className='text-3xl text-[#C7C7C7]'>2.6<span className='text-xl ml-3'>SEC</span></h1>
                               <p className='text-[#A2A3A5] text-sm'>0-60MPH</p>
              </div>
             </div>
        </div>
    </div>
  )
}

export default SecondPage