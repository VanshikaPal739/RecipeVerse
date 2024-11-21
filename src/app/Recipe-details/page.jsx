"use client";
import { useRouter } from 'next/navigation'; // Updated import
import React from 'react';

const RecipeDetails = ({ params }) => {
  const { id } = params; // Get the recipe ID from the URL

  // Mock data for demonstration (you can replace this with actual data from an API)
  const recipeData = {
    title: `Delicious Recipe ${id}`,
    image: 'https://via.placeholder.com/600x400',
    ingredients: ['1 cup of flour', '2 eggs', '1/2 cup of sugar', '1 tsp of vanilla extract'],
    instructions: [
      'Preheat the oven to 350°F (175°C).',
      'In a bowl, mix all the ingredients together.',
      'Pour the mixture into a baking pan and bake for 25 minutes.',
      'Let it cool before serving.',
    ],
  };

  return (
    <div className="p-8 font-sans bg-amber-50 min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-800 animate-bounce">{recipeData.title}</h1>
      </header>

      <div className="flex justify-center mb-10">
        <img src={recipeData.image} alt={recipeData.title} className="w-full max-w-2xl h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105" />
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-5">Ingredients</h2>
        <ul className="list-disc pl-5 space-y-2">
          {recipeData.ingredients.map((ingredient, index) => (
            <li key={index} className="text-purple-600">{ingredient}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-5">Instructions</h2>
        <ol className="list-decimal pl-5 space-y-2">
          {recipeData.instructions.map((instruction, index) => (
            <li key={index} className="text-purple-600">{instruction}</li>
          ))}
        </ol>
      </section>

      <div className="mt-10 text-center">
        <button 
          onClick={() => useRouter().push('/')} // Updated navigation
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
