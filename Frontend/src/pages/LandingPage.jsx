import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Char from "./components/3dCharacter"
import { Footer } from './components/Footer'

const LandingPage = () => {
  return (
    <>
    <div className='w-screen h-screen relative'>
    <div className=' absolute inset-0   h-screen bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_2px,transparent_2px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_2px,transparent_2px)] bg-[size:65px_65px]'></div>
    <div className='z-40 overflow-hidden w-screen h-screen flex flex-col gap-8  px-8' >
        <Navbar/>
        <div className='flex'>
        <HeroSection/>
        <Char/>
        </div>
    </div>
    </div>
    <div className='z-10 flex justify-center border-t py-8'>
        <h1 className='text-2xl'>404 Not Founders</h1>
    </div>

    </>
  )
}

export default LandingPage