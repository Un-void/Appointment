import React from 'react'
import Doc from '../assets/Doc.png'

const Banner = () => {
  return (
    <div className='flex mt-[10%]'>
      <div className='mt-[5%] ms-[10%] text-2xl font-mono text-white p-3 shadow-2xl bg-blue-600 rounded-md h-[12%]'>
        <p>Instant Appointments with</p>
        <p>BEST doctors. <span className='font-bold text-2xl text-black'>Guaranteed</span></p>
        <div className='text-lg font-serif mt-3'>
          <p>✔ Hundreds of verified doctors</p>
          <p>✔ Lakhs of Satisfied patients</p>
          <p>✔ 10K+ patient's first preference</p>
        </div>
      </div>
      <img src={Doc} loading="lazy" className='w-[60%]'/>
    </div>
  )
}

export default Banner