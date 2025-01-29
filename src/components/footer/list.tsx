import React from 'react'

const List = () => {
  return (
    <div className='grid  grid-cols-2 sm:grid-cols-3 md:justify-center md:items-center md:gap-10 md:pl-20 lg:pl-24 xl:grid-cols-3 xl:pl-4 xl:gap-4 2xl:gap-14'>

            <div className="w-auto px-4 flex flex-col gap-[12px]">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Menu</h2>
              <nav className="list-none mb-10 flex flex-col gap-[12px]">
                {["New arrivals", "Best sellers", "Recently viewed", "Popular this week", "All products"].map(
                  (item, index) => (
                    <li key={index}>
                      <a className="hover:text-gray-400 text-white">{item}</a>
                    </li>
                  )
                )}
              </nav>
            </div>

            <div className="w-auto px-4 flex flex-col gap-[12px]">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Categories</h2>
              <nav className="list-none mb-10 flex flex-col gap-[12px]">
                {[ "Crockery" , "Furniture", "Homeware", "Plant pots", "Chairs" , "Crockery"].map((item, index) => (
                  <li key={index}>
                    <a className="hover:text-gray-400 text-white">{item}</a>
                  </li>
                ))}
              </nav>
            </div>

            <div className=" w-auto px-4 flex flex-col gap-[12px]">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Our company</h2>
              <nav className="list-none mb-10 flex flex-col gap-[12px]">
                {["About us", "Vacancies", "Contact us", "Privacy", "Returns policy"].map((item, index) => (
                  <li key={index}>
                    <a className="hover:text-gray-400 text-white">{item}</a>
                  </li>
                ))}
              </nav>
            </div>


    </div>
  )
}

export default List