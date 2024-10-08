import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {blogs} from '../../blogdata'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'


interface BlogDetailProps {
  params: {
    id: string;
  };
 
}

//! blogs 

const BlogDetail: React.FC<BlogDetailProps> = ({ params }) => {
const {id} = params
const blog = blogs.find((b)=> b.id === id)
  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  //! blog content

  const combineDescription = `${blog.description1}\n${blog.description2}\n${blog.description3}`;
  const paragraphs = combineDescription.split('\n');
    return (
      
        <div >
             {/* <HeroSec/> */}
       <div className='flex flex-col w-[200px] absolute lg:left-[40px] left-[8px] md:left-[30px] md:text-2xl text-xl lg:text-3xl top-[500px]'>
        <div className='sticky'>
          <Link href={'https://www.facebook.com/'} target='_blank'><FaFacebook className='mb-[20px] text-blue-500 hover:text-black hover:ease-in-out hover:duration-700'/></Link> 
          <Link href={'https://www.instagram.com/'} target='_blank'><FaInstagram className='mb-[20px] text-pink-700 hover:text-black hover:ease-in-out hover:duration-700'/></Link>
          <Link href={'https://www.linkedin.com/in/alishba-naveed-a9ab38251/'} target='_blank'><FaLinkedin className='mb-[20px] text-blue-600 hover:text-black hover:ease-in-out hover:duration-700' /></Link>
          <Link href={'https://www.twitter.com/'} target='_blank'><FaTwitter className='mb-[20px] text-blue-300 hover:text-black hover:ease-in-out hover:duration-700'/></Link>
        </div>
        </div>
      <div className='flex justify-center flex-col items-center md:mt-[150px] mt-[100px]'>
      <div className='mt-[35px] md:mt-[60px]  w-[80%] text-center'>
        <h1 className='text-blue-900 font-bold md:text-4xl text-2xl'>{blog.title}</h1>
        <p className='pt-10 md:text-lg text-sm'>{blog.author} | {blog.createdAt} | { blog.time}</p>
          <Image src={blog.image} alt={blog.title} width={500} height={500} className='w-[1500px]  h-[200px] md:h-[500px] mt-[10px] shadow-xl' />
          {paragraphs.map((para, index) => {
            return (
              <div key={index}>
                <p  className='mt-[50px] '>{para}</p>
              </div>
            ) })}
          
      </div>
      </div>
      <div className='mt-[80px]'>
        </div>
    </div>
  );
}

export default BlogDetail;

