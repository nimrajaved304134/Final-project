import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Joinclub = () => {
  return (
    <div className='bg-[#F9F9F9] w-screen md:h-[481px] h-[381px] md:py-[52px] py-[42px]'>
        <div className='flex flex-col md:mx-[96px] mx-[40px] h-[300px] bg-white items-center justify-center md:h-[364px] md:gap-[16px]'>
        <h1 className='text-center text-[18px] leading-[24px] md:text-[36px] md:leading-[50.4px] font-normal'>Join the club and get the benefits</h1>
        <p className='text-center text-[12px] leading-[18px] md:text-[16px] md:leading-[24px] font-normal'>Sign up for our newsletter and receive exclusive offers on new <br/>
            ranges, sales, pop up stores and more</p>

        <div className='md:pt-[54px] flex flex-row pt-[38px]'>
            <Input placeholder='your@email.com' type='email' className='sm:w-[250px] md:w-[354px] md:h-[56px] text-[12px] leading-[18px] md:text-[16px] md:leading-[21.6px] font-normal text-darkprimary border-none'/>
            <Button className=' sm:w-[96px] md:w-[118px] md:h-[56px] bg-darkprimary text-white text-center text-[12px] leading-[18px] md:text-[16px] md:leading-[24px] font-normal'>Sign up</Button>
        </div>

        </div>
    </div>
  )
}

export default Joinclub