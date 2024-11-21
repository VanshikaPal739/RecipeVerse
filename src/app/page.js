'use client';

import React from 'react';

const HeaderSection = () => {
  return (
    <header className="bg-white text-gray-800 py-10">
      {/* Navbar */}
      <nav className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <h1 className="text-3xl font-bold text-gray-800">Cook.</h1>
        <ul className="flex space-x-8">
          <li className="hover:text-orange-500 transition">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-orange-500 transition">
            <a href="AboutPage">About us</a>
          </li>
          <li className="hover:text-orange-500 transition">
            <a href="add-recipe">Recipes</a>
          </li>
          <li className="hover:text-orange-500 transition">
            <a href="ContactPage">Contact</a>
          </li>
          <li className="hover:text-orange-500 transition">
            <a href="FavouritesPage">Favourites</a>
          </li>
        </ul>
        <a
          href="#latest"
          className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600 transition"
        >
          Latest Content
        </a>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto mt-2 flex flex-col md:flex-row items-center px-6 md:px-8 ">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Cook Like a Pro with Our{' '}
            <span className="text-orange-500">Easy</span> and{' '}
            <span className="text-orange-500">Tasty</span> Recipes
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            From quick and easy meals to gourmet delights, we have something
            for every taste and occasion.
          </p>
          <button className="mt-6 bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition">
            Explore all Recipes
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center p-16 ">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg"
            alt="Chef holding pizza"
            className="w-3/4 md:w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
