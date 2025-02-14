import Abouthero from '../../components/othercomponents/abouthero'
import Joinclub from '../../components/othercomponents/joinclub'
import Ourservices from '../../components/othercomponents/ourservices'
import Smallidea from '../../components/othercomponents/smallidea'
import Whatmakesbranddifferent from '../../components/othercomponents/whatmakesbranddifferent'
import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <Abouthero/>
        <Smallidea/>
        <Whatmakesbranddifferent/>
        <Joinclub/>
        <Ourservices/>
    </div>
  )
}

export default Aboutus