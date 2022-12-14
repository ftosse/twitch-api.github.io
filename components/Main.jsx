import React from 'react'
import Categories from './Categories'
import Hero from './Hero'
import Games from './Games'
import IconBar from './IconBar'


const Main = () => {
  return (
    <div className='absolute left-[20px] xl:center mt-20'>
        <Hero/>
        <IconBar />
        <Games />
        <Categories />
    </div>
  )
}

export default Main
