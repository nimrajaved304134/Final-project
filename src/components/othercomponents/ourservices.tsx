import Image from 'next/image'
import React from 'react'
import pic from '../../../public/asset/intouch.svg'

const Ourservices = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-4">
<Image
  height={603}
  width={720}
  src={pic}
  alt="Service"
  className="lg:h-[603px] md:h-[490px] w-full md:w-1/2 transition-transform duration-300 ease-in-out hover:scale-95 hover:translate-y-1"
/>
<div className="border-2 border-none lg:h-[603px] md:h-[490px] w-full  md:w-1/2 p-8 xl:px-20 lg:py-[74px] ">
  <h1 className="text-xl md:text-2xl text-darkprimary clashDisplay ">
    Our service isn&lsquo;t just personal, it&lsquo;s actually
    hyper-personally exquisite
  </h1>
  <div>
    <p className="text-[#505977] mt-6 text-[14px] md:text-[16px] satoshi ">
      When we started Avion, the idea was simple. Make high-quality
      furniture affordable and available for the mass market.
    </p>
    <p className="text-[#505977] mt-6 text-[14px] md:text-[16px] satoshi ">
      Handmade, and lovingly crafted furniture and homeware is what we
      live, breathe, and design so our Chelsea boutique became the
      hotbed for the London interior design community.
    </p>
  </div>
  <button className="text-white bg-darkprimary hover:text-darkprimary hover:bg-white lg:mt-48 h-12 w-full md:w-40 rounded-sm mt-10 ">
    Get in Touch
  </button>
</div>
</div>
  )
}

export default Ourservices