import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './translations';

function getDefaultLang() {
  const lang = navigator.language || navigator.userLanguage || 'en';
  if (lang.startsWith('fr')) return 'fr';
  if (lang.startsWith('ht')) return 'ht';
  if (lang.startsWith('es')) return 'es';
  // Par défaut, anglais
  return 'en';
}

function App() {
  const [currentLang, setCurrentLang] = useState(getDefaultLang());

  return (
    <div className="App">
      <Header 
        currentLang={currentLang} 
        setCurrentLang={setCurrentLang} 
        translations={translations} 
      />
      <Hero 
        currentLang={currentLang} 
        translations={translations} 
      />
      <Services 
        currentLang={currentLang} 
        translations={translations} 
      />
      <About 
        currentLang={currentLang} 
        translations={translations} 
      />
      <Testimonials 
        currentLang={currentLang} 
        translations={translations} 
      />
      <Contact 
        currentLang={currentLang} 
        translations={translations} 
      />
      <Footer 
        currentLang={currentLang} 
        translations={translations} 
      />
    </div>
  );
}

export default App;
