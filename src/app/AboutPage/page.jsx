'use client'
import React from 'react';

const AboutPage = () => {
  return (
    <div
      className="bg-gradient-to-br from-rose-100 to-pink-200 min-h-screen p-8 flex flex-col items-center"
      style={{ animation: 'fade-in 1s ease-in' }}
    >
      {/* Header */}
      <header
        className="text-center mt-10 mb-12"
        style={{ animation: 'slide-down 1s ease-out' }}
      >
        <h1 className="text-5xl font-bold text-rose-800 mb-4">About Recipe World</h1>
        <p className="text-lg text-rose-600 max-w-xl mx-auto">
          Discover global flavors and inspire your cooking journey with Recipe World, where every recipe tells a story.
        </p>
      </header>

      {/* Our Story Section */}
      <section
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-3xl mb-12 transform transition duration-300 hover:scale-105"
        style={{ animation: 'fade-up 0.7s ease-out' }}
      >
        <h2 className="text-3xl font-semibold text-rose-700 mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Recipe World began with a mission to unite food lovers worldwide. With easy-to-follow, quality recipes, we empower everyone to embrace cooking with creativity and passion.
        </p>
      </section>

      {/* Our Values Section */}
      <section
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-3xl mb-12 transform transition duration-300 hover:scale-105"
        style={{ animation: 'fade-up 0.7s ease-out' }}
      >
        <h2 className="text-3xl font-semibold text-rose-700 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>Quality ingredients and authentic flavors</li>
          <li>Encouraging creativity and joy in the kitchen</li>
          <li>Celebrating diversity through food experiences</li>
          <li>Building a passionate, food-loving community</li>
        </ul>
      </section>

      {/* Team Section */}
      <section
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-3xl mb-12 transform transition duration-300 hover:scale-105"
        style={{ animation: 'fade-up 0.7s ease-out' }}
      >
        <h2 className="text-3xl font-semibold text-rose-700 mb-4">Meet the Team</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We are a team of food enthusiasts, chefs, and tech experts, dedicated to bringing you an enriching culinary journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="text-center transform transition-transform duration-500 hover:scale-110">
            <img
              src="https://via.placeholder.com/100"
              alt="Team member 1"
              className="w-24 h-24 rounded-full mx-auto mb-2"
              style={{ animation: 'bounce-slow 1.5s infinite' }}
            />
            <h3 className="font-semibold text-lg text-rose-800">Alex Johnson</h3>
            <p className="text-gray-500">Head Chef</p>
          </div>
          <div className="text-center transform transition-transform duration-500 hover:scale-110">
            <img
              src="https://via.placeholder.com/100"
              alt="Team member 2"
              className="w-24 h-24 rounded-full mx-auto mb-2"
              style={{ animation: 'bounce-slow 1.5s infinite' }}
            />
            <h3 className="font-semibold text-lg text-rose-800">Samantha Lee</h3>
            <p className="text-gray-500">Recipe Developer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center mt-12 text-rose-700"
        style={{ animation: 'slide-up 1s ease-out' }}
      >
        <p>© 2024 Recipe World. All Rights Reserved.</p>
      </footer>

      {/* Inline CSS for Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-down {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
