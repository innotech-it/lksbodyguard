import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Phone, Mail, MapPin, Calendar, Clock, Shield } from 'lucide-react';

const Contact = ({ currentLang, translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Masquer le message de succès après 5 secondes
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  const scheduleGoogleMeet = () => {
    // Création d'un lien Google Meet (simulation)
    const meetingTitle = encodeURIComponent('Consultation LKS Bodyguard');
    const meetingDescription = encodeURIComponent('Consultation confidentielle pour vos besoins de protection rapprochée');
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1); // Demain
    startDate.setHours(14, 0, 0, 0); // 14h00
    
    const endDate = new Date(startDate);
    endDate.setHours(15, 0, 0, 0); // 15h00
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${meetingTitle}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${meetingDescription}&location=Google Meet`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {translations[currentLang].contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations[currentLang].contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de Contact */}
          <div className="animate-slide-in-left">
            <Card className="luxury-shadow border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Calendar className="w-6 h-6 text-primary mr-3" />
                  Demande de Rendez-vous
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <p className="text-green-800 font-medium">
                        Votre demande a été envoyée avec succès. Nous vous contacterons sous 24h.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder={translations[currentLang].contact.form.name}
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder={translations[currentLang].contact.form.email}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="h-12"
                    />
                    <Input
                      type="tel"
                      placeholder={translations[currentLang].contact.form.phone}
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <Select onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder={translations[currentLang].contact.form.service} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Protection Personnelle</SelectItem>
                      <SelectItem value="event">Sécurité Événementielle</SelectItem>
                      <SelectItem value="transport">Transport Sécurisé</SelectItem>
                      <SelectItem value="residence">Sécurité Résidentielle</SelectItem>
                      <SelectItem value="travel">Accompagnement Voyage</SelectItem>
                      <SelectItem value="consulting">Conseil en Sécurité</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder={translations[currentLang].contact.form.message}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="resize-none"
                  />

                  <div className="space-y-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Envoi en cours...
                        </div>
                      ) : (
                        <>
                          <Phone className="w-4 h-4 mr-2" />
                          {translations[currentLang].contact.form.submit}
                        </>
                      )}
                    </Button>

                    <div className="text-center">
                      <p className="text-gray-600 text-sm mb-3">ou</p>
                      <Button 
                        type="button"
                        onClick={scheduleGoogleMeet}
                        variant="outline"
                        className="w-full h-12 border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Planifier un Google Meet
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations de Contact */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {/* Informations */}
              <Card className="luxury-shadow border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                        <p className="text-gray-600">{translations[currentLang].contact.info.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                        <p className="text-gray-600">{translations[currentLang].contact.info.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-600">{translations[currentLang].contact.info.email}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horaires */}
              <Card className="luxury-shadow border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    Disponibilité
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Urgences</span>
                      <span className="font-semibold text-primary">24h/24 - 7j/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Consultations</span>
                      <span className="font-semibold text-gray-900">Lun-Ven 9h-18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekend</span>
                      <span className="font-semibold text-gray-900">Sur rendez-vous</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Garanties */}
              <Card className="luxury-shadow border-0 bg-black text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Shield className="w-6 h-6 text-primary mr-3" />
                    Nos Garanties
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Confidentialité absolue</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Réponse sous 24h</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Consultation gratuite</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Devis personnalisé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

