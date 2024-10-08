'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Blog, blogs } from '../blogdata';
import HeroSec from '../hero/page';

interface blogcardProps {
  blog:Blog[]
}

//! getting blogs from Blog component

const Blogcard:React.FC<blogcardProps> = ({ blog }) => {
  console.log(blog)
   
    return (
        <div> 
            <HeroSec/>
    <div className="container mx-auto mt-3 md:mt-0 p-4 slide-top">
      <div className="grid grid-cols-2 h-auto gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {blogs.map((bloging) => (
          <div
            key={bloging.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={bloging.image}
              alt={bloging.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h2 className="text-sm font-semibold mb-2">{bloging.title}</h2>
              <Link href={bloging.id?`/blogdescription/${bloging.id}`:"#"}>
              <button className=' mt-2 bg-blue-900 text-white hover:bg-[#FFD700] hover:duration-500 hover:ease-in-out hover:text-black md:text-sm text-xs md:px-3.5 md:py-1 px-2 py-1 rounded-2xl'>Read More</button>
              </Link><br /><br />
            </div>
          </div>
        ))}
      </div>
            </div>
            </div>
  );
};

export default Blogcard;
