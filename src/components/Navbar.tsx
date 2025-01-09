import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-orange-600" />
            <span className="ml-3 text-xl font-bold">CyberShield</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-orange-600">About</a>
            <a href="/products" className="text-gray-700 hover:text-orange-600">Products</a>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <a href="/" className="block py-2 text-gray-700 hover:text-orange-600">Home</a>
            <a href="/about" className="block py-2 text-gray-700 hover:text-orange-600">About</a>
            <a href="/products" className="block py-2 text-gray-700 hover:text-orange-600">Products</a>
            <button className="w-full mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;