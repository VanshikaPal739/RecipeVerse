 'use client';
import React, { useState, useEffect } from 'react';

// Sample data for favorites (replace with actual fetched data)
const sampleFavorites = [
  {
    id: 1,
    name: 'Chocolate Cake',
    image: 'https://via.placeholder.com/300/FF69B4/FFFFFF?text=Chocolate+Cake',
  },
  {
    id: 2,
    name: 'Pasta Primavera',
    image: 'https://via.placeholder.com/300/FF1493/FFFFFF?text=Pasta+Primavera',
  },
  {
    id: 3,
    name: 'Mango Smoothie',
    image: 'https://via.placeholder.com/300/FFB6C1/FFFFFF?text=Mango+Smoothie',
  },
];

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchFavorites = () => {
      setFavorites(sampleFavorites); // Replace with your data fetching logic
    };
    
    fetchFavorites();
    setLoaded(true); // Trigger animation after fetching data
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-pink-700 text-center mb-6 animate__animated animate__fadeInDown">Your Favorite Recipes</h1>
      <p className="text-lg text-pink-600 mb-4 text-center animate__animated animate__fadeIn animate__delay-1s">
        Here are the recipes you've saved as your favorites. Enjoy cooking!
      </p>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {favorites.length > 0 ? (
          favorites.map(recipe => (
            <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-pink-800">{recipe.name}</h3>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-pink-600">No favorites found.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
