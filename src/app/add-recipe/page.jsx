'use client'; // Ensure it's client-rendered to avoid hydration issues
import React, { useState, useEffect } from 'react';

const AddRecipe = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure rendering only happens after hydration
  }, []);

  if (!isClient) {
    return null; // Avoid rendering on the server
  }


  return (
    <div className="bg-pink-50 min-h-screen font-sans">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-pink-600 text-center mb-8">Add a New Recipe</h1>
        <form className="bg-white shadow-md rounded-lg p-8">
          {/* Recipe Name */}
          <div className="mb-6">
            <label htmlFor="recipe-name" className="block text-pink-600 text-sm font-semibold mb-2">
              Recipe Name
            </label>
            <input
              id="recipe-name"
              type="text"
              placeholder="Enter recipe name"
              className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <label htmlFor="ingredients" className="block text-pink-600 text-sm font-semibold mb-2">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              rows="4"
              placeholder="List ingredients separated by commas"
              className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <label htmlFor="instructions" className="block text-pink-600 text-sm font-semibold mb-2">
              Instructions
            </label>
            <textarea
              id="instructions"
              rows="6"
              placeholder="Provide step-by-step instructions"
              className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label htmlFor="image" className="block text-pink-600 text-sm font-semibold mb-2">
              Recipe Image
            </label>
            <input
              id="image"
              type="file"
              className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-pink-500"
            />
          </div>


          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
