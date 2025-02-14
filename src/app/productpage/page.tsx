import Joinclub from '../../components/othercomponents/joinclub'
import Whatmakesbranddifferent from '../../components/othercomponents/whatmakesbranddifferent'
import ProductCard from '../../components/productpage/productCard'
import React from 'react'

const Productpage = () => {
  return (
    <div className='w-screen overflow-hidden max-w-screen'>
        <ProductCard/>
        <Whatmakesbranddifferent/>
        <Joinclub/>
    </div>
  )
}

export default Productpage