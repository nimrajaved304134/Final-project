import React from 'react'
import List from './list'
import Icons from './icons'
import Signin from './signin'

const Footer = () => {
  return (
<footer className='bg-darkprimary pt-5 px-4 w-screen'>
    <div className='xl:grid xl:grid-cols-2 xl:pl-10 xl:gap-20 2xl:gap-28 3xl:pl-32 4xl:pl-52 5xl:pl-56  '>
        <List/>
        <Signin/>
    </div>
    <div>
        <Icons/>
    </div>
</footer>
  )
}

export default Footer