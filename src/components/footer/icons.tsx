import React from 'react'
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { ImSkype } from "react-icons/im";

const Icons = () => {
  return (
    <div>

        <div className="bg-darkprimary">
          <div className="container px-5 5xl:px-10 py-6 mx-auto flex items-center sm:flex-row flex-col border-t-[1px] border-t-primarycolor">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <span className="ml-3 text-xl">Copyright 2022 Avion LTD</span>
            </a>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
              <FaLinkedin className="w-[24px] h-[24px] fill-white hover:text-blue-500 cursor-pointer" />
              <FaFacebookSquare className="w-[24px] h-[24px] fill-white hover:text-blue-700 cursor-pointer" />
              <FaInstagram className="w-[24px] h-[24px] fill-white hover:text-pink-500 cursor-pointer" />
              <ImSkype className="w-[24px] h-[24px] fill-white hover:text-blue-400 cursor-pointer" />
              <FaTwitter className="w-[24px] h-[24px] fill-white hover:text-blue-300 cursor-pointer" />
              <FaPinterest className="w-[24px] h-[24px] fill-white hover:text-red-500 cursor-pointer" />
            </span>
          </div>
        </div>

    </div>
  )
}

export default Icons