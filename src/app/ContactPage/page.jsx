'use client'
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Implement form submission logic here
  };

  return (
    <div className="bg-pink-50 min-h-screen flex flex-col items-center p-8">
      {/* Header */}
      <header className="text-center mt-10 mb-12 animate-fade-in-down">
        <h1 className="text-5xl font-bold text-pink-800 mb-4">Contact Us</h1>
        <p className="text-lg text-pink-600 max-w-md mx-auto">
          Have questions? We're here to help! Send us a message, and we'll get back to you as soon as possible.
        </p>
      </header>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mb-12 animate-pop-up">
        <div className="mb-6">
          <label htmlFor="name" className="block text-pink-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-pink-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-pink-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className="w-full p-3 h-32 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-lg shadow-md hover:bg-pink-700 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Contact Information Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-pink-700 mb-6 animate-fade-in-up">Get In Touch</h2>
        <p className="text-pink-600 max-w-md mx-auto mb-8">
          Feel free to reach out via email or follow us on social media. We’d love to connect!
        </p>
        <div className="flex gap-6 justify-center">
          <a href="mailto:info@recipehub.com" className="text-pink-600 hover:text-pink-700 transition duration-300">
            Email Us
          </a>
          <a href="https://www.instagram.com" className="text-pink-600 hover:text-pink-700 transition duration-300">
            Instagram
          </a>
          <a href="https://www.twitter.com" className="text-pink-600 hover:text-pink-700 transition duration-300">
            Twitter
          </a>
        </div>
      </section>

    
    </div>
  );
};

export default ContactPage;
