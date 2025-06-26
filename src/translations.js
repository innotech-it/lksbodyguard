import React, { useState } from 'react';
import { Menu, X, Shield, Phone, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = ({ currentLang, setCurrentLang, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ht', name: 'Kreyòl', flag: '🇭🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="LKS Bodyguard" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-white">LKS Bodyguard</h1>
              <p className="text-sm text-primary">{translations[currentLang].tagline}</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-primary transition-colors"
            >
              {translations[currentLang].nav.home}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-primary transition-colors"
            >
              {translations[currentLang].nav.services}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-primary transition-colors"
            >
              {translations[currentLang].nav.about}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-primary transition-colors"
            >
              {translations[currentLang].nav.testimonials}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-primary transition-colors"
            >
              {translations[currentLang].nav.contact}
            </button>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Sélecteur de langue */}
            <div className="relative group">
              <button
                type="button"
                className="px-3 py-1 border border-primary rounded bg-transparent text-white hover:bg-primary flex items-center"
              >
                <Globe className="w-4 h-4 mr-2" />
                {languages.find(lang => lang.code === currentLang)?.flag}
              </button>
              <div className="absolute top-full right-0 mt-2 bg-black border border-primary rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="block w-full px-4 py-2 text-left text-white hover:bg-primary/20 first:rounded-t-md last:rounded-b-md"
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              {translations[currentLang].cta.contact}
            </button>
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile Ouvert */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-primary transition-colors text-left"
              >
                {translations[currentLang].nav.home}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-primary transition-colors text-left"
              >
                {translations[currentLang].nav.services}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-primary transition-colors text-left"
              >
                {translations[currentLang].nav.about}
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-primary transition-colors text-left"
              >
                {translations[currentLang].nav.testimonials}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-primary transition-colors text-left"
              >
                {translations[currentLang].nav.contact}
              </button>
              
              {/* Langues Mobile */}
              <div className="pt-4 border-t border-primary/20">
                <p className="text-white text-sm mb-2">{translations[currentLang].language}:</p>
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className={`px-3 py-1 rounded text-sm ${
                        currentLang === lang.code 
                          ? 'bg-primary text-white' 
                          : 'bg-transparent border border-primary text-white hover:bg-primary/20'
                      }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded flex items-center mt-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                {translations[currentLang].cta.contact}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
