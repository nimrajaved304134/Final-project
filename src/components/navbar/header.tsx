"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import  client  from "../../sanity/lib/client";
import { groq } from "next-sanity";

interface Category {
  name: string;
}

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = groq`*[_type == "category"] | order(name asc)`;
      const fetchedCategories = await client.fetch(query);
      setCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div className='justify-center items-center'>
      <ul className='flex flex-row justify-center items-center text-center gap-5 lg:gap-8 xl:gap-9 2xl:gap-10'>
        {categories.map((category) => (
          <li key={category.name}>
            <Link 
              href={`/category/${category.name}`}
              className="hover:text-gray-600 transition-colors"
            >
              {category.name}
            </Link>
          </li>
        ))}
        <li>
          <Link href={'/aboutus'}> Aboutus </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;