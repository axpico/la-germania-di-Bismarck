import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHistory, FaBook, FaUniversity, FaUsers, FaFlag } from 'react-icons/fa';

const Home: React.FC = () => {
  const sections = [
    {
      title: 'Bismarck',
      description: 'La vita e l\'opera del Cancelliere di Ferro',
      icon: FaHistory,
      path: '/bismarck',
      color: 'from-prussian-blue/90 to-prussian-blue'
    },
    {
      title: 'Politica Interna',
      description: 'Le riforme e le trasformazioni sociali',
      icon: FaBook,
      path: '/politica-interna',
      color: 'from-prussian-blue/80 to-prussian-blue'
    },
    {
      title: 'Politica Estera',
      description: 'La diplomazia e le alleanze europee',
      icon: FaUniversity,
      path: '/politica-estera',
      color: 'from-prussian-blue/70 to-prussian-blue'
    },
    {
      title: 'Radicalismo',
      description: 'I movimenti sociali e le forze del cambiamento',
      icon: FaUsers,
      path: '/radicalismo',
      color: 'from-prussian-blue/60 to-prussian-blue'
    },
    {
      title: 'Revanscismo',
      description: 'Le tensioni e le aspirazioni nazionali',
      icon: FaFlag,
      path: '/revanscismo',
      color: 'from-prussian-blue/50 to-prussian-blue'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh] bg-prussian-blue overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-prussian-blue/80 to-prussian-blue" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-ivory">
              La Germania di Bismarck
            </h1>
            <p className="text-xl md:text-2xl font-crimson italic text-ivory/90 mb-8">
              Un viaggio attraverso l'era che ha plasmato la Germania moderna
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/bismarck"
                className="inline-block bg-imperial-gold text-prussian-blue px-8 py-3 rounded-lg font-bold hover:bg-imperial-gold/90 transition-colors"
              >
                Inizia l'Esplorazione
              </Link>
            </motion.div>
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
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-playfair text-prussian-blue mb-6">
            L'Era di Bismarck
          </h2>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            Esplora il periodo cruciale della storia tedesca attraverso le politiche, 
            le riforme e l'eredità di Otto von Bismarck, il Cancelliere di Ferro che 
            ha plasmato il destino della Germania moderna.
          </p>
        </motion.section>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index >= 3 ? 'lg:col-span-1' : ''}
            >
              <Link to={section.path} className="block h-full">
                <div className={`relative h-full rounded-lg overflow-hidden group ${section.color} bg-gradient-to-br`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div>
                      <section.icon className="text-4xl text-imperial-gold mb-4" />
                      <h3 className="text-2xl font-playfair text-ivory mb-2">
                        {section.title}
                      </h3>
                      <p className="text-ivory/80">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-parchment p-8 rounded-lg border border-warm-gray/20">
            <h2 className="text-2xl font-playfair text-prussian-blue mb-4">
              Metti alla Prova la Tua Conoscenza
            </h2>
            <p className="text-warm-gray mb-6">
              Partecipa al nostro quiz interattivo e scopri quanto conosci 
              l'era di Bismarck e il suo impatto sulla storia europea.
            </p>
            <Link
              to="/quiz"
              className="inline-block bg-prussian-blue text-ivory px-8 py-3 rounded-lg font-bold hover:bg-prussian-blue/90 transition-colors"
            >
              Inizia il Quiz
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home; 