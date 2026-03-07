import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BottomArticles from './components/BottomArticles'

function page() {
  return (
    <main className='flex flex-col gap-4 lg:gap-0 justify-center items-center w-screen h-auto lg:h-screen px-8 py-2 md:px-18 lg:px-41 lg:py-22'>
      <Navbar />
      <div className='w-full lg:max-w-278 flex flex-col gap-16'>
        <Hero />
        <BottomArticles />
      </div>
    </main>
  )
}

export default page