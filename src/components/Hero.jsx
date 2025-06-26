import React from 'react';
import { Button } from './ui/button';
import { Shield, Phone, Star, ArrowRight } from 'lucide-react';
import miamiSkyline from '../assets/miami_skyline_1.jpg';

const Hero = ({ currentLang, translations }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${miamiSkyline})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge de prestige */}
          <div className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{translations[currentLang].hero.badge}</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">LKS</span>
            <br />
            <span className="text-white">{translations[currentLang].hero.title}</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {translations[currentLang].hero.subtitle}
          </p>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-gray-300">{translations[currentLang].hero.stats.experience}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-gray-300">{translations[currentLang].hero.stats.clients}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-300">{translations[currentLang].hero.stats.availability}</div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold luxury-shadow hover-lift"
            >
              <Phone className="w-5 h-5 mr-2" />
              {translations[currentLang].cta.appointment}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold"
            >
              {translations[currentLang].cta.discover}
            </Button>
          </div>

          {/* Indicateur de scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-primary/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 border border-primary/30 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;

