import React from 'react'
import second from '../../assets/Laptop.png'

export default function FeatureDisc() {
  return (
    <div className='w-[98vw] pb-20 mb-4 bg-red-200 flex flex-col items-center'>
        <h2 className='text-5xl my-12'>Feature Details 🦒</h2>


        <div className='border border-neutral-800  p-6 rounded-2xl flex flex-col items-center my-10 shadow-xl shadow-neutral-900'>
            <div className='flex justify-between'>
            <h3 className='text-2xl font-mono font-semibold'>Feature 😊</h3>
            <div className='w-1/2'>
                <h3 className='text-2xl font-semibold mb-6 w-2/3 font-mono'>Track Me and SOS and Everything going Good</h3>
                <p className='text-neutral-200 font-thin'>With insights from Canva, Loom, Amplitude and more. Discover when and how to build a high-performing Growth team Learn about key signals, team structures, and hiring criteria for success. In this chapter, we’ll cover:</p>
            </div>
        </div>
        <img src={second} alt="" className='w-2/3 mt-9'/>
        </div>

        <div className='border border-neutral-800  p-6 rounded-2xl flex flex-col items-center my-10 shadow-xl shadow-neutral-900'>
            <div className='flex justify-between'>
            <h3 className='text-2xl font-mono font-semibold'>Feature 😊</h3>
            <div className='w-1/2'>
                <h3 className='text-2xl font-semibold mb-6 w-2/3 font-mono'>Track Me and SOS and Everything going Good</h3>
                <p className='text-neutral-200 font-thin'>With insights from Canva, Loom, Amplitude and more. Discover when and how to build a high-performing Growth team Learn about key signals, team structures, and hiring criteria for success. In this chapter, we’ll cover:</p>
            </div>
        </div>
        <img src={second} alt="" className='w-2/3 mt-9'/>
        </div>

        <div className='border border-neutral-800  p-6 rounded-2xl flex flex-col items-center my-10 shadow-xl shadow-neutral-900'>
            <div className='flex justify-between'>
            <h3 className='text-2xl font-mono font-semibold'>Feature 😊</h3>
            <div className='w-1/2'>
                <h3 className='text-2xl font-semibold mb-6 w-2/3 font-mono'>Track Me and SOS and Everything going Good</h3>
                <p className='text-neutral-200 font-thin'>With insights from Canva, Loom, Amplitude and more. Discover when and how to build a high-performing Growth team Learn about key signals, team structures, and hiring criteria for success. In this chapter, we’ll cover:</p>
            </div>
        </div>
        <img src={second} alt="" className='w-2/3 mt-9'/>
        </div>
    </div>
  )
}
