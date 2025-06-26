import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Award, Eye, Clock, Zap } from 'lucide-react';
import bodyguardImage from '../assets/bodyguard_2.jpg';

const About = ({ currentLang, translations }) => {
  const features = [
    {
      icon: Award,
      key: 'experience',
      color: 'text-primary'
    },
    {
      icon: Eye,
      key: 'discretion',
      color: 'text-primary'
    },
    {
      icon: Clock,
      key: 'availability',
      color: 'text-primary'
    },
    {
      icon: Zap,
      key: 'technology',
      color: 'text-primary'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {translations[currentLang].about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations[currentLang].about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src={bodyguardImage} 
                alt="Protection professionnelle" 
                className="w-full h-96 object-cover rounded-2xl luxury-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Protection Discrète</p>
                <p className="text-sm opacity-90">Excellence & Professionnalisme</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={feature.key} 
                    className="border-0 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {translations[currentLang].about[feature.key].title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {translations[currentLang].about[feature.key].description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-20 bg-black rounded-2xl p-8 md:p-12 luxury-shadow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-white text-sm">Années d'Expérience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-white text-sm">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-white text-sm">Support Disponible</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-white text-sm">Confidentialité</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

