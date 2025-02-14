import Link from 'next/link'
import React from 'react'

const Abouthero = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row  items-center justify-between md:px-16 py-8 px-6 clashDisplay mt-8">
    <div className="lg:w-[704px]">
      <p className="text-[30px] md:text-2xl leading-normal tracking-tight  xl:text-[36px] md:pb-4  md:text-left text-[#2A254B]">
        A brand built on the love of craftsmanship,
      </p>
      <p className="text-[30px] md:text-2xl leading-normal tracking-tight  xl:text-[36px] md:pb-4  md:text-left text-[#2A254B]">
        {" "}
        quality, and outstanding customer service
      </p>
    </div>

    <button className="bg-[#F9F9F9] h-12 md:w-40 w-full mt-10 md:mt-0 rounded-sm text-custom-purple hover:bg-[#2A254B] hover:text-white transition-all duration-300">
      <Link href="/productpage">View our products</Link>
    </button>
  </div>

  )
}

export default Abouthero