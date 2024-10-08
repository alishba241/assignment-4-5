import Image from 'next/image';
import React from 'react'


const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-[60px] md:mt-[100px]">
      {/* Hero Section */}
      <div className="  py-20 px-6 text-center ">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">About Us</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-700">
          Welcome to Blog.in, where we share insightful content on various topics.
        </p>
      </div>

      {/* About Section */}
      <section className="container mx-auto py-12 px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="flex justify-center">
            <Image
              src="/about-image.webp"
              alt="About us"
                          width={300}
                          height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg mb-4">
             At Blog.in, we believe that every voice matters and every story deserves to be heard. Our platform was created with a passion for fostering creativity, sharing knowledge, and building a community where diverse perspectives can thrive. We are more than just a blog; we are a collective of thinkers, creators, and innovators dedicated to exploring a wide array of topics that matter to our readers. From technology and education to lifestyle and personal growth, we aim to provide a space where people can not only consume information but also engage in meaningful conversations. Our team is made up of individuals who are deeply committed to bringing high-quality, engaging content that resonates with our audience. Whether you’re here to learn something new, find inspiration, or simply enjoy well-crafted articles.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We aim to provide valuable content across various domains and encourage everyone to participate.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Members */}
          {/* Add team member cards */}
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="bg-blue-950 text-white py-12 text-center">
        <h2 className="md:text-3xl text-2xl font-bold">Join Us on Our Journey</h2>
        <p className="mt-4 md:text-lg text-sm max-w-2xl mx-auto">
          Whether youre a reader or a contributor, we welcome you to be part of our community.
        </p>
        <button className="mt-6 bg-yellow-500 text-black hover:bg-yellow-600 md:px-6 md:py-3 px-4 py-2 rounded-full text-base md:text-lg font-semibold">
          Subscribe to Newsletter
        </button>
      </section>
          </div>
         
  );
};
         
export default AboutPage
