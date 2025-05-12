import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Chrono } from 'react-chrono';
import { FaCrown, FaScroll, FaBalanceScale, FaMapMarkedAlt, FaShieldAlt, FaHandshake, FaBook } from 'react-icons/fa';

const Bismarck: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

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
    <div className="min-h-screen bg-gradient-to-br from-ivory via-ivory/95 to-ivory/90">
      {/* Hero Section */}
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh] overflow-hidden perspective-1000"
      >
        <motion.div 
          style={{ y, opacity, scale }}
          className="absolute inset-0 bg-[url('/images/bismarck-portrait.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-prussian-blue/95 via-prussian-blue/85 to-prussian-blue/75" />
        
        {/* Interactive 3D background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 rounded-full bg-imperial-gold/10"
              style={{
                x: springX,
                y: springY,
                rotateX: useTransform(springX, [0, 1000], [0, 45]),
                rotateY: useTransform(springY, [0, 1000], [0, 45]),
              }}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
                rotate: Math.random() * 360
              }}
              animate={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 1, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-md bg-white/10 p-12 rounded-[2rem] border border-white/20 shadow-2xl transform-gpu"
            style={{
              rotateX: useTransform(springY, [0, 1000], [-5, 5]),
              rotateY: useTransform(springX, [0, 1000], [-5, 5]),
            }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-playfair mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-ivory via-imperial-gold to-ivory"
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Bismarck
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-crimson italic text-ivory/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              L'architetto dell'unità tedesca
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        {/* Introduction */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2 
            className="text-4xl font-playfair mb-12 text-prussian-blue bg-clip-text text-transparent bg-gradient-to-r from-prussian-blue via-prussian-blue/80 to-prussian-blue"
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            La Visione
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-warm-gray">
                Otto von Bismarck (1815-1898) fu una delle figure più influenti della storia europea del XIX secolo. 
                Conosciuto come il "Cancelliere di Ferro", fu l'artefice principale dell'unificazione tedesca e il 
                primo Cancelliere dell'Impero Tedesco.
              </p>
              <p className="text-warm-gray">
                La sua politica realista e il suo genio diplomatico trasformarono la Prussia in una potenza 
                continentale, gettando le basi per la Germania moderna.
              </p>
            </motion.div>
            <motion.div 
              className="relative transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-imperial-gold/10 transform rotate-3 rounded-[2rem]" />
              <img 
                src="/images/bismarck-statue.jpg" 
                alt="Statua di Bismarck" 
                className="relative rounded-[2rem] shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Key Achievements */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2 
            className="text-4xl font-playfair mb-12 text-prussian-blue bg-clip-text text-transparent bg-gradient-to-r from-prussian-blue via-prussian-blue/80 to-prussian-blue"
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Le Conquiste
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaCrown, title: "Unificazione", text: "Unificazione degli stati tedeschi sotto la guida prussiana" },
              { icon: FaBalanceScale, title: "Diplomazia", text: "Sistema di alleanze che mantenne la pace in Europa" },
              { icon: FaScroll, title: "Riforme", text: "Modernizzazione dello stato e welfare sociale" },
              { icon: FaMapMarkedAlt, title: "Espansione", text: "Acquisizione di colonie e potenza navale" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl transform-gpu"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6"
                >
                  <item.icon className="text-5xl text-imperial-gold" />
                </motion.div>
                <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">{item.title}</h3>
                <p className="text-warm-gray text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2 
            className="text-4xl font-playfair mb-12 text-prussian-blue bg-clip-text text-transparent bg-gradient-to-r from-prussian-blue via-prussian-blue/80 to-prussian-blue"
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            La Timeline Storica
          </motion.h2>
          <motion.div 
            className="backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-[600px]">
              <Chrono
                items={timelineItems}
                mode="VERTICAL"
                theme={{
                  primary: '#1B365D',
                  secondary: '#C5A572',
                  cardBgColor: 'rgba(245, 242, 233, 0.9)',
                  titleColor: '#1B365D',
                  cardTitleColor: '#1B365D',
                  cardSubtitleColor: '#6B5B4D',
                }}
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Legacy */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2 
            className="text-4xl font-playfair mb-12 text-prussian-blue bg-clip-text text-transparent bg-gradient-to-r from-prussian-blue via-prussian-blue/80 to-prussian-blue"
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            L'Eredità
          </motion.h2>
          <motion.div 
            className="backdrop-blur-md bg-white/10 p-12 rounded-[2rem] border border-white/20 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <blockquote className="text-3xl font-crimson italic text-warm-gray mb-8">
              "La politica non è una scienza esatta, ma un'arte."
            </blockquote>
            <p className="text-warm-gray text-lg">
              L'eredità di Bismarck continua a influenzare la politica e la diplomazia moderna. 
              Il suo approccio pragmatico alla politica estera e le sue riforme sociali hanno 
              lasciato un'impronta indelebile sulla storia europea.
            </p>
          </motion.div>
        </motion.section>

        {/* Diplomatic Achievements */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2 
            className="text-4xl font-playfair mb-12 text-prussian-blue bg-clip-text text-transparent bg-gradient-to-r from-prussian-blue via-prussian-blue/80 to-prussian-blue"
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Le Alleanze Diplomatiche
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-warm-gray">
                Bismarck creò un complesso sistema di alleanze per mantenere l'equilibrio di potere in Europa:
              </p>
              <ul className="list-disc pl-6 text-warm-gray">
                <li>L'Alleanza dei Tre Imperatori (1873)</li>
                <li>La Duplice Alleanza con l'Austria-Ungheria (1879)</li>
                <li>La Triplice Alleanza con Austria-Ungheria e Italia (1882)</li>
                <li>Il Trattato di Riassicurazione con la Russia (1887)</li>
              </ul>
            </motion.div>
            <motion.div 
              className="relative transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-imperial-gold/10 transform -rotate-3 rounded-[2rem]" />
              <img 
                src="/images/bismarck-diplomacy.jpg" 
                alt="Bismarck al Congresso di Berlino" 
                className="relative rounded-[2rem] shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Social Reforms */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2 
            className="text-4xl font-playfair mb-12 text-prussian-blue bg-clip-text text-transparent bg-gradient-to-r from-prussian-blue via-prussian-blue/80 to-prussian-blue"
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Le Riforme Sociali
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaShieldAlt, title: "Assicurazione Malattia", text: "Primo sistema di assicurazione malattia obbligatoria (1883)" },
              { icon: FaHandshake, title: "Assicurazione Infortuni", text: "Protezione dei lavoratori contro gli infortuni sul lavoro (1884)" },
              { icon: FaBook, title: "Istruzione", text: "Riforma del sistema educativo e promozione della cultura tedesca" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl transform-gpu"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6"
                >
                  <item.icon className="text-5xl text-imperial-gold" />
                </motion.div>
                <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">{item.title}</h3>
                <p className="text-warm-gray text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Bismarck; 