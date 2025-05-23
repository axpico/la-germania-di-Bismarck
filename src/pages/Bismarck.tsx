import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Chrono } from 'react-chrono';
import { FaCrown, FaBalanceScale, FaMapMarkedAlt, FaShieldAlt, FaHandshake, FaBook } from 'react-icons/fa';

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
      title: "1864",
      cardTitle: "Guerra contro la Danimarca",
      cardSubtitle: "La Prussia conquista territori danesi",
      cardDetailedText: "La Prussia conquista territori danesi, primo passo verso l'unificazione tedesca."
    },
    {
      title: "1866",
      cardTitle: "Guerra contro l'Austria",
      cardSubtitle: "La Prussia esclude l'Austria dalla guida del mondo germanico",
      cardDetailedText: "Con la vittoria prussiana, l'Austria viene esclusa dalla guida della Confederazione Tedesca."
    },
    {
      title: "1870",
      cardTitle: "Guerra contro la Francia",
      cardSubtitle: "Vittoria su Napoleone III",
      cardDetailedText: "La vittoria sulla Francia rafforza il prestigio tedesco in Europa."
    },
    {
      title: "1871",
      cardTitle: "Proclamazione del Secondo Reich",
      cardSubtitle: "Unificazione della Germania",
      cardDetailedText: "Viene proclamato l'Impero Tedesco con Guglielmo I come imperatore."
    },
    {
      title: "1870-1914",
      cardTitle: "Periodo di pace in Europa",
      cardSubtitle: "Mantenuto grazie alla diplomazia bismarckiana",
      cardDetailedText: "Bismarck mantiene l'equilibrio europeo attraverso un'attenta politica di alleanze."
    },
    {
      title: "1890",
      cardTitle: "Fine del governo di Bismarck",
      cardSubtitle: "",
      cardDetailedText: "Bismarck si dimette dalla carica di Cancelliere."
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
              L'architetto dell'unità tedesca e custode dell'equilibrio europeo
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
            Chi è
          </motion.h2>
          
          {/* Chi è Section */}
          <motion.div 
            className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl mb-12 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-playfair mb-6 text-prussian-blue">Otto von Bismarck</h3>
            <p className="text-warm-gray text-lg leading-relaxed">
              Otte von Bismarck fu il cancelliere prussiano che guidò il processo di unificazione della Germania nel 1871, dando vita al Secondo Reich. Rimase al potere fino al 1890 e sotto la sua guida la Germania divenne una grande potenza militare, economica e politica. Abile stratega, fu il principale artefice della supremazia tedesca sull'Europa continentale nella seconda metà dell'Ottocento.
            </p>
          </motion.div>

          <h2 className="text-4xl font-playfair mb-8 text-prussian-blue">
            Politica e Strategia
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Alleanze Diplomatiche</h3>
              <p className="text-warm-gray mb-4">
                Durante il suo governo, Bismarck costruì una fitta rete di alleanze (Austria-Ungheria, Italia, Russia) per evitare lo scontro diretto tra le potenze europee e mantenere l'equilibrio. Grazie alla sua abilità diplomatica, riuscì a impedire conflitti tra i grandi Stati fino alla sua uscita di scena.
              </p>
              <p className="text-warm-gray">
                La Germania fu considerata l'"ago della bilancia" nei rapporti internazionali, con Bismarck che seppe abilmente mantenere l'equilibrio tra le potenze europee attraverso un complesso sistema di alleanze e trattati.
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
                alt="" 
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
            
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: FaShieldAlt, 
                title: "Conquiste Militari", 
                text: "Bismarck portò la Germania a una posizione dominante grazie a una serie di vittorie militari contro Danimarca, Austria e Francia." 
              },
              { 
                icon: FaMapMarkedAlt, 
                title: "Espansione Territoriale", 
                text: "Sotto la sua guida, la Prussia prima e la Germania poi acquisirono nuovi territori, ampliando notevolmente la loro influenza in Europa." 
              },
              { 
                icon: FaBalanceScale, 
                title: "Politica di Potenza", 
                text: "Attuò la 'Machtpolitik', rafforzando esercito, flotta, infrastrutture e industria per affermare la Germania come potenza egemone." 
              },
              { 
                icon: FaCrown, 
                title: "Secondo Reich", 
                text: "La proclamazione del Secondo Reich nel 1871 segnò l'apice della sua carriera politica e l'inizio di una nuova era per la Germania." 
              }
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

        {/* Riforme Sociali ed Economiche */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2 
            className="text-4xl font-playfair mb-6 text-prussian-blue"
          >
            Riforme Sociali ed Economiche
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Politiche Economiche</h3>
              <p className="text-warm-gray mb-4">
                Negli anni Settanta e Ottanta, Bismarck introdusse misure protezionistiche per difendere l'economia nazionale dalla concorrenza estera. Queste includevano:
              </p>
              <ul className="list-disc pl-6 text-warm-gray mb-4 space-y-2">
                <li>Tariffe doganali protettive</li>
                <li>Sostegno ai cartelli industriali</li>
                <li>Limitazione delle importazioni</li>
                <li>Controllo sul commercio estero</li>
              </ul>
              <p className="text-warm-gray">
                Queste politiche frenarono il libero scambio e furono successivamente imitate da altri Paesi europei.
              </p>
            </motion.div>
            <motion.div 
              className="backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Riforme Sociali</h3>
              <p className="text-warm-gray mb-4">
                Nonostante il carattere autoritario del suo governo, Bismarck introdusse importanti riforme sociali che garantirono stabilità e crescita:
              </p>
              <ul className="list-disc pl-6 text-warm-gray space-y-2">
                <li>Assicurazione contro gli infortuni (1884)</li>
                <li>Assicurazione malattia (1883)</li>
                <li>Assicurazione per l'invalidità e la vecchiaia (1889)</li>
              </ul>
              <p className="text-warm-gray mt-4">
                Queste riforme posero le basi per il moderno stato sociale tedesco.
              </p>
            </motion.div>
          </div>
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
            L'Eredità di Bismarck
          </motion.h2>
          <motion.div 
            className="backdrop-blur-md bg-white/10 p-12 rounded-[2rem] border border-white/20 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              L'opera di Bismarck ha lasciato un'impronta indelebile nella storia europea. Il suo sistema di alleanze e la sua abilità diplomatica mantennero la pace in Europa per oltre quattro decenni, un periodo noto come l'"età bismarckiana".
            </p>
            <p className="text-warm-gray text-lg leading-relaxed mb-8">
              Nonostante il carattere autoritario del suo governo, Bismarck seppe garantire stabilità e crescita alla Germania, ponendo le basi per la sua futura potenza industriale e militare. Le sue riforme sociali anticiparono il moderno stato sociale e la sua visione politica influenzò profondamente lo sviluppo della Germania e dell'Europa nel XX secolo.
            </p>
            <blockquote className="text-2xl font-crimson italic text-warm-gray border-l-4 border-imperial-gold pl-6 py-2 my-6">
              "Non con i discorsi e le deliberazioni della maggioranza vengono risolte le grandi questioni del tempo - questo fu il grande errore del 1848 e del 1849 - bensì col ferro e col sangue."
            </blockquote>
            <p className="text-warm-gray text-right text-lg mt-8">
              - Otto von Bismarck
            </p>
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
};

export default Bismarck; 