import React from 'react';
import { motion } from 'framer-motion';
import { Chrono } from 'react-chrono';
import { FaCrown, FaScroll, FaBalanceScale, FaMapMarkedAlt } from 'react-icons/fa';

const Bismarck: React.FC = () => {
  const timelineItems = [
    {
      title: "1815",
      cardTitle: "Nascita di Bismarck",
      cardSubtitle: "Schönhausen, Prussia",
      cardDetailedText: "Otto von Bismarck nasce in una famiglia aristocratica prussiana."
    },
    {
      title: "1862",
      cardTitle: "Cancelliere di Prussia",
      cardSubtitle: "Berlino",
      cardDetailedText: "Nominato Ministro-Presidente e Ministro degli Esteri della Prussia."
    },
    {
      title: "1871",
      cardTitle: "Unificazione Tedesca",
      cardSubtitle: "Versailles",
      cardDetailedText: "Proclamazione dell'Impero Tedesco e Bismarck diventa il primo Cancelliere."
    },
    {
      title: "1890",
      cardTitle: "Dimissioni",
      cardSubtitle: "Berlino",
      cardDetailedText: "Bismarck si dimette dopo il contrasto con il nuovo Kaiser Guglielmo II."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] bg-prussian-blue overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/bismarck-portrait.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-prussian-blue/80 to-prussian-blue" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-ivory"
          >
            <h1 className="text-4xl md:text-6xl font-playfair mb-4 text-ivory">Bismarck</h1>
            <p className="text-xl md:text-2xl font-crimson italic text-ivory">L'architetto dell'unità tedesca</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">La Visione</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose prose-lg">
              <p className="text-warm-gray">
                Otto von Bismarck (1815-1898) fu una delle figure più influenti della storia europea del XIX secolo. 
                Conosciuto come il "Cancelliere di Ferro", fu l'artefice principale dell'unificazione tedesca e il 
                primo Cancelliere dell'Impero Tedesco.
              </p>
              <p className="text-warm-gray">
                La sua politica realista e il suo genio diplomatico trasformarono la Prussia in una potenza 
                continentale, gettando le basi per la Germania moderna.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-imperial-gold/10 transform rotate-3" />
              <img 
                src="/images/bismarck-statue.jpg" 
                alt="Statua di Bismarck" 
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Key Achievements */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">Le Conquiste</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card group">
              <FaCrown className="text-4xl text-imperial-gold mb-4" />
              <h3 className="text-xl font-playfair mb-2">Unificazione</h3>
              <p className="text-warm-gray">Unificazione degli stati tedeschi sotto la guida prussiana</p>
            </div>
            <div className="card group">
              <FaBalanceScale className="text-4xl text-imperial-gold mb-4" />
              <h3 className="text-xl font-playfair mb-2">Diplomazia</h3>
              <p className="text-warm-gray">Sistema di alleanze che mantenne la pace in Europa</p>
            </div>
            <div className="card group">
              <FaScroll className="text-4xl text-imperial-gold mb-4" />
              <h3 className="text-xl font-playfair mb-2">Riforme</h3>
              <p className="text-warm-gray">Modernizzazione dello stato e welfare sociale</p>
            </div>
            <div className="card group">
              <FaMapMarkedAlt className="text-4xl text-imperial-gold mb-4" />
              <h3 className="text-xl font-playfair mb-2">Espansione</h3>
              <p className="text-warm-gray">Acquisizione di colonie e potenza navale</p>
            </div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">La Timeline Storica</h2>
          <div className="h-[600px]">
            <Chrono
              items={timelineItems}
              mode="VERTICAL"
              theme={{
                primary: '#1B365D',
                secondary: '#C5A572',
                cardBgColor: '#F5F2E9',
                titleColor: '#1B365D',
                cardTitleColor: '#1B365D',
                cardSubtitleColor: '#6B5B4D',
              }}
            />
          </div>
        </motion.section>

        {/* Legacy */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">L'Eredità</h2>
          <div className="bg-parchment p-8 rounded-lg border border-warm-gray/20">
            <blockquote className="text-2xl font-crimson italic text-warm-gray mb-6">
              "La politica non è una scienza esatta, ma un'arte."
            </blockquote>
            <p className="text-warm-gray">
              L'eredità di Bismarck continua a influenzare la politica e la diplomazia moderna. 
              Il suo approccio pragmatico alla politica estera e le sue riforme sociali hanno 
              lasciato un'impronta indelebile sulla storia europea.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Bismarck; 