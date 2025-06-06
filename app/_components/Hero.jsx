import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from './Authentication'

function Hero() {
  return (
    <div className='p-10 flex flex-col items-center justify-center mt-24 md:px-20 lg:px-36 xl:px-48'>
      <h2 className='font-bold text-6xl text-center '>
      Fact Buddy
      </h2>
      <p className='mt-4 text-2xl text-center text-gray-500'>Your reliable fact-checking assistant. Fact Buddy verifies text and images using AI-powered analysis and trusted sources.</p>

      <div className='mt-7 gap-8 flex'>
        <Button size='lg' variant={'secondary'}>Explore</Button>
        <Authentication>
         
        <Button size={'lg'}>
            Get Started
        </Button>
        
        </Authentication>
        
      </div>

    </div>
  )
}

export default Hero
