import React from 'react'

const Signin = () => {
  return (
    <div>

            <div className="pb-5 xl:pt-10">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 sm:text-center xl:text-start">
                Join our mailing list
              </h2>
              <div className="flex xl:flex-row md:flex-nowrap lg:flex-row flex-row justify-start items-center sm:justify-center xl:justify-start ">
                <div className="relative ">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-[226px] sm:w-[300px] 2xl:w-[500px] 5xl:w-[600px]  h-[48px] bg-gray-100 bg-opacity-50 rounded-l border border-none focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter your email"
                  />
                </div>
                <button className="h-[48px] w-[100px] 4xl:w-[150px] 5xl:[200px] flex-shrink-0 inline-flex text-darkprimary bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-r justify-center text-center">
                  Subscribe
                </button>
              </div>
            </div>


    </div>
  )
}

export default Signin