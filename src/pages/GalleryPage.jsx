import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GalleryPortfolio from '../components/GalleryPortfolio';

function GalleryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#appointment', label: 'Book Appointment' },
    { href: '/gallery', label: 'Gallery' },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      window.location.href = '/' + href;
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Clinic Portfolio</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    {item.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors duration-200"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={`text-sm font-medium transition-colors duration-200 hover:text-red-600 ${
                          item.href === '/gallery'
                            ? 'text-red-600 border-b-2 border-red-600 pb-1'
                            : 'text-gray-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    {item.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors duration-200 hover:bg-gray-50"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-gray-50 ${
                          item.href === '/gallery'
                            ? 'text-red-600 bg-red-50'
                            : 'text-gray-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Gallery Section */}
      <GalleryPortfolio isPage={true} />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Clinic Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default GalleryPage;
