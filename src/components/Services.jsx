import React from 'react';
import { Shield, Users, Car, Home, Plane, FileText } from 'lucide-react';

const Services = ({ currentLang, translations }) => {
  const services = [
    {
      icon: Shield,
      key: 'personal',
      color: 'text-primary'
    },
    {
      icon: Users,
      key: 'event',
      color: 'text-primary'
    },
    {
      icon: Car,
      key: 'transport',
      color: 'text-primary'
    },
    {
      icon: Home,
      key: 'residence',
      color: 'text-primary'
    },
    {
      icon: Plane,
      key: 'travel',
      color: 'text-primary'
    },
    {
      icon: FileText,
      key: 'consulting',
      color: 'text-primary'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {translations[currentLang].services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations[currentLang].services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="luxury-shadow hover-lift bg-white border-0 overflow-hidden group rounded-2xl p-6 flex flex-col items-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <div className="text-xl font-bold text-gray-900 text-center mb-2">
                  {translations[currentLang].services[service.key].title}
                </div>
                <div className="text-gray-600 text-center leading-relaxed">
                  {translations[currentLang].services[service.key].description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-16">
          <div className="bg-black rounded-2xl p-8 md:p-12 luxury-shadow">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Besoin d'une Protection Sur Mesure ?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Chaque client est unique. Contactez-nous pour une évaluation personnalisée de vos besoins de sécurité.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Consultation Gratuite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
