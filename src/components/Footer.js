import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social Icons
import "../styles/Footer.css"
const Footer = () => {
  return (
   
  
    <footer className="bg-gray-800 text-white py-8 mt-16">


      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>

          <ul>
            <li><Link to="/products" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/products" className="hover:text-gray-400">Products</Link></li>
            <li><Link to="/cart" className="hover:text-gray-400">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-gray-400">Wishlist</Link></li>
            
          </ul>
        </div>
        
        {/* About Us */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">About Us</h3>
          <p className="text-gray-400">
            We are a leading e-commerce platform offering a wide range of products at affordable prices. Our mission is to provide quality products and exceptional customer service.
          </p>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Subscribe to our Newsletter</h3>
          <p className="text-gray-400">Get the latest updates and offers directly to your inbox!</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md w-64 bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md text-white hover:bg-orange-600 focus:outline-none
">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

      </div>
      
      {/* Footer Bottom */}
     
      <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
    
        <p>&copy; 2025 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
