import React from 'react';
import { motion } from 'framer-motion';
import { Chrono } from 'react-chrono';
import { FaCrown, FaScroll, FaBalanceScale, FaMapMarkedAlt, FaShieldAlt, FaHandshake, FaBook } from 'react-icons/fa';

const Bismarck: React.FC = () => {
  const timelineItems = [
    {
      title: "1815",
      cardTitle: "Nascita di Bismarck",
      cardSubtitle: "Schönhausen, Prussia",
      cardDetailedText: "Otto von Bismarck nasce in una famiglia aristocratica prussiana."
    },
    {
      title: "1847",
      cardTitle: "Inizio della Carriera Politica",
      cardSubtitle: "Berlino",
      cardDetailedText: "Bismarck viene eletto al Parlamento Prussiano come rappresentante conservatore."
    },
    {
      title: "1862",
      cardTitle: "Cancelliere di Prussia",
      cardSubtitle: "Berlino",
      cardDetailedText: "Nominato Ministro-Presidente e Ministro degli Esteri della Prussia."
    },
    {
      title: "1864",
      cardTitle: "Guerra dei Ducati",
      cardSubtitle: "Schleswig-Holstein",
      cardDetailedText: "Bismarck guida la Prussia nella vittoriosa guerra contro la Danimarca."
    },
    {
      title: "1866",
      cardTitle: "Guerra Austro-Prussiana",
      cardSubtitle: "Europa Centrale",
      cardDetailedText: "La Prussia sconfigge l'Austria, consolidando il suo potere nella Confederazione Germanica."
    },
    {
      title: "1870-71",
      cardTitle: "Guerra Franco-Prussiana",
      cardSubtitle: "Francia",
      cardDetailedText: "La Prussia sconfigge la Francia, portando all'unificazione tedesca."
    },
    {
      title: "1871",
      cardTitle: "Unificazione Tedesca",
      cardSubtitle: "Versailles",
      cardDetailedText: "Proclamazione dell'Impero Tedesco e Bismarck diventa il primo Cancelliere."
    },
    {
      title: "1878",
      cardTitle: "Congresso di Berlino",
      cardSubtitle: "Berlino",
      cardDetailedText: "Bismarck media la pace tra le potenze europee, consolidando il suo ruolo di 'onesto mediatore'."
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

        {/* Diplomatic Achievements */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">Le Alleanze Diplomatiche</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg">
              <p className="text-warm-gray">
                Bismarck creò un complesso sistema di alleanze per mantenere l'equilibrio di potere in Europa:
              </p>
              <ul className="list-disc pl-6 text-warm-gray">
                <li>L'Alleanza dei Tre Imperatori (1873)</li>
                <li>La Duplice Alleanza con l'Austria-Ungheria (1879)</li>
                <li>La Triplice Alleanza con Austria-Ungheria e Italia (1882)</li>
                <li>Il Trattato di Riassicurazione con la Russia (1887)</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-imperial-gold/10 transform -rotate-3" />
              <img 
                src="/images/bismarck-diplomacy.jpg" 
                alt="Bismarck al Congresso di Berlino" 
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Social Reforms */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">Le Riforme Sociali</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <FaShieldAlt className="text-4xl text-imperial-gold mb-4" />
              <h3 className="text-xl font-playfair mb-2">Assicurazione Malattia</h3>
              <p className="text-warm-gray">Primo sistema di assicurazione malattia obbligatoria (1883)</p>
            </div>
            <div className="card group">
              <FaHandshake className="text-4xl text-imperial-gold mb-4" />
              <h3 className="text-xl font-playfair mb-2">Assicurazione Infortuni</h3>
              <p className="text-warm-gray">Protezione dei lavoratori contro gli infortuni sul lavoro (1884)</p>
            </div>
            <div className="card group">
              <FaBook className="text-4xl text-imperial-gold mb-4" />
              <h3 className="text-xl font-playfair mb-2">Istruzione</h3>
              <p className="text-warm-gray">Riforma del sistema educativo e promozione della cultura tedesca</p>
            </div>
          </div>
        </motion.section>

        {/* Impact on Modern Europe */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">Impatto sull'Europa Moderna</h2>
          <div className="bg-parchment p-8 rounded-lg border border-warm-gray/20">
            <p className="text-warm-gray mb-4">
              L'influenza di Bismarck sulla politica europea moderna è profonda e duratura:
            </p>
            <ul className="list-disc pl-6 text-warm-gray">
              <li>Creazione del primo stato sociale moderno</li>
              <li>Stabilimento di un sistema di alleanze che influenzò la geopolitica europea per decenni</li>
              <li>Introduzione di riforme che ispirarono altri paesi europei</li>
              <li>Definizione del concetto di "Realpolitik" nella diplomazia internazionale</li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Bismarck; 