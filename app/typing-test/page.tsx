import React from 'react'
import Nav from './components/Nav'
import Test from './components/Test'

function page() {
  return (
    <main className='sm:p-4 md:p-8 lg:px-28 lg:py-8'>
      <Nav />
      <Test />
    </main>
  )
}

export default page