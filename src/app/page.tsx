import Whatmakesbranddifferent from '../components/othercomponents/whatmakesbranddifferent'
import Joinclub from '../components/othercomponents/joinclub'
import React from 'react'
import Hero from '../components/othercomponents/hero'
import Ourservices from '../components/othercomponents/ourservices'
import FourProductCard from '../components/productpage/forproductcard'

const Page = () => {
  return (
    <div className='overflow-hidden w-screeen max-w-screen'>
      <Hero/>
      <Whatmakesbranddifferent/>
      <FourProductCard/>
      <Joinclub/>
      <Ourservices/>
    </div>
  )
}

export default Page
