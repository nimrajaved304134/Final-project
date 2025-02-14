import Image from 'next/image'
import React from 'react'
import smallidea from '../../../public/asset/smallidea.svg'

const Smallidea= () => {
  return (
    <div className="flex flex-col md:flex-row w-screen gap-4 h-auto md:h-[558px] items-center justify-center px-4 md:py-16 py-4 ">
    <div className="bg-custom-purple md:h-[478px] w-full md:w-1/2 text-white p-8 lg:pt-[64px] md:px-[32] lg:px-[64px] mb-8 md:mb-0 bg-[#2A254B] transition-transform duration-300 ease-in-out hover:scale-95">
      <h1 className="text-xl md:text-2xl clashDisplay">
        It started with a small idea
      </h1>
      <p className="mt-6 satoshi md:text-[18px]">
        A global brand with local beginnings, our story began in a small
        studio in South London in early 2014.
      </p>
      <button className="md:w-[170px] mt-48 w-full h-[56px] bg-[#F9F9F926] text-white font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#574552b5] my-4">
        View collection
      </button>
    </div>

    <div className="w-full md:h-[478px]  md:w-1/2 transition-transform duration-300 ease-in-out hover:scale-95">
      <Image
        src={smallidea}
        alt="About main"
        height={478}
        width={630}
        className="xl:h-[478px] md:h-[478px] w-full "
      />
    </div>
  </div>
  )
}

export default Smallidea