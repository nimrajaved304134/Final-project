
import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { LuSprout } from "react-icons/lu";
import { Card, CardContent, CardTitle } from '../ui/card';

const quality = [
  {
    id: 1,
    icon: TbTruckDelivery, // Pass the React component directly
    title: 'Next day as standard',
    detail: 'Order before 3pm and get your order the next day as standard',
  },
  {
    id: 2,
    icon: IoIosCheckmarkCircleOutline,
    title: 'Made by true artisans',
    detail: 'Handmade crafted goods made with real passion and craftmanship',
  },
  {
    id: 3,
    icon: HiOutlineCreditCard,
    title: 'Unbeatable prices',
    detail: "For our materials and quality you won't find better prices anywhere",
  },
  {
    id: 4,
    icon: LuSprout,
    title: 'Recycled packaging',
    detail: 'We use 100% recycled packaging to ensure our footprint is manageable',
  },
];

const Whatmakesbranddifferent = () => {
  return (
<div className='flex flex-col items-center justify-center pb-16 w-screen overflow-hidden'>
  <h1 className='text-[24px]  xl:text-[34px] leading-[33.6px] font-normal py-[60px] xl:px-[529px] text-center justify-center'>
    What makes our brand different
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:pl-28 md:pl-10 lg:pl-2 xl:pl-20 2xl:pl-24 5xl:pl-28 lg:pr-20 lg:gap-4 3xl:gap-[38px] 4xl:gap-[48px] lg:ml-28 xl:ml-10  3xl:mx-[50px] 4xl:mx-[86px] items-center justify-center  w-screen 2xl:ml-4">
    {quality.map((item) => (
      <Card key={item.id} className="flex flex-col items-start gap-[16px] w-[428px] md:w-[305px] lg:w-[235px] 2xl:w-[355px] 5xl:w-[500px] py-4 bg-[#f9f9f9] border-none rounded-none">
        {/* Icon */}
        <item.icon className="text-2xl 5xl:text-3xl text-darkprimary ml-6" />

        {/* Title */}
        <CardTitle className="font-normal text-[20px] leading-[28px] 5xl:text-[30px] 5xl:leading-[38px] text-darkprimary ml-6">
          {item.title}
        </CardTitle>

        {/* Description */}
        <CardContent className="font-normal text-[16px] leading-[24px] 5xl:text-[26px] 5xl:leading-[34px] text-darkprimary ">
          {item.detail}
        </CardContent>
      </Card>
    ))}
  </div>
</div>
  );
};

export default Whatmakesbranddifferent;