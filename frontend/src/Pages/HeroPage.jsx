import React from 'react'
import {Vortex} from '../components/ui/Vortex';
import { TypewriterEffectDemo } from '../ExternalComponents/TypeWriterEffect';

function HeroPage() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-screen h-screen'>
        <Vortex
        backgroundColor="Black"
        rangeY={800}
        particleCount={500} 
        className="flex items-center   justify-center px-2 md:px-10  py-4 w-full h-full">
          <div className='bg-gray-800/30 border-none rounded-lg backdrop-blur-lg w-[800px] h-[500px] flex items-center justify-center'>
            <div className=''>
            <p className='text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>
            Empower your payments with
            <p className='text-6xl sm:text-8xl font-bold flex justify-center pt-8 bg-clip-text text-transparent bg-gradient-to-b from-purple-700 to-blue-900'>
              WePaY
            </p>
            </p>
            <div className='flex justify-center gap-4'>
          <button onClick={() => window.location.href = "/signup"} className="w-40 h-10 rounded-xl items-center font-bold hover:bg-gradient-to-r from-purple-700 to-blue-900 hover:text-white hover:transition-delay hover:duration-300  bg-gray-100 text-purple-700 border border-black  text-sm">
          Get Started!
        </button>
        <button onClick={() => window.location.href = "/signin"} className="w-40 h-10 rounded-xl items-center font-bold hover:bg-gradient-to-r from-purple-700 to-blue-900 hover:text-white hover:transition-delay hover:duration-300  bg-white text-purple-700 border border-black  text-sm">
          Login
        </button>
            </div>
            </div>
          </div>
      </Vortex>  
      </div>
    </div>
  )
}

export default HeroPage