import React from 'react'
import Feature from '../components/main/Feature.jsx'
import FeatureDisc from '../components/main/FeatureDisc.jsx'
import Hero from '../components/Hero.jsx'
import Navbar from '../components/Contact.jsx'

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-4 '>
        <Hero/>
        <Feature/>
        {/* <FeatureDisc/> */}
    </div>
  )
}
