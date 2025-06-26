import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = ({ currentLang, translations }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="LKS Bodyguard" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">LKS Bodyguard</h3>
                <p className="text-primary text-sm">{translations[currentLang].tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {translations[currentLang].footer.description}
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Protection Certifiée</p>
                <p className="text-xs text-gray-400">Licence & Assurance</p>
              </div>
            </div>
          </div>

          {/* Contact Rapide */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Rapide</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">{translations[currentLang].contact.info.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">{translations[currentLang].contact.info.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-gray-300">{translations[currentLang].contact.info.address}</span>
              </div>
            </div>
          </div>

          {/* Liens Légaux */}
          <div>
            <h4 className="text-lg font-bold mb-6">Informations Légales</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-gray-300 hover:text-primary transition-colors">
                {translations[currentLang].footer.links.privacy}
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-primary transition-colors">
                {translations[currentLang].footer.links.terms}
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-primary transition-colors">
                {translations[currentLang].footer.links.legal}
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} LKS Bodyguard. {translations[currentLang].footer.rights}
            </p>
            
            {/* Badges de Confiance */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-xs text-gray-400">Licencié</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🛡️</span>
                </div>
                <span className="text-xs text-gray-400">Assuré</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⭐</span>
                </div>
                <span className="text-xs text-gray-400">Certifié</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

