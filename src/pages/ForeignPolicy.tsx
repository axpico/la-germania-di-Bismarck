import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FaGlobeEurope, FaHandshake, FaBalanceScale, FaShieldAlt, FaMapMarkedAlt, FaChessKnight, FaCrown, FaChartLine, FaHistory, FaFlag, FaUsers } from 'react-icons/fa';

const ForeignPolicy: React.FC = () => {
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

  // Add state for expanded cards
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

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
          className="absolute inset-0 bg-[url('/images/congress-berlin.jpg')] bg-cover bg-center"
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
              Otto von Bismarck: Architetto della Diplomazia Europea
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-crimson italic text-ivory/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Maestro della Realpolitik: Un equilibrio sottile tra interessi nazionali e pace europea.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        {/* Statistics Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaHistory, title: "Unificazione della Germania", value: "1871", text: "La Germania fu unificata sotto la guida di Otto von Bismarck" },
              { icon: FaHandshake, title: "Alleanza con l'Austria", value: "1879", text: "La Germania e l'Austria firmarono un trattato di alleanza" },
              { icon: FaFlag, title: "Conquista della Francia", value: "1870", text: "La Germania sconfisse la Francia nella guerra franco-prussiana" },
              { icon: FaUsers, title: "Popolazione della Germania", value: "41 milioni", text: "La popolazione della Germania aumentò notevolmente dopo l'unificazione" }
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
                <h3 className="text-2xl font-playfair mb-2 text-prussian-blue">{item.title}</h3>
                <p className="text-4xl font-bold text-imperial-gold mb-2">{item.value}</p>
                <p className="text-warm-gray">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Visione Diplomatica */}
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
            La visione diplomatica di Bismarck
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-warm-gray">
              La politica estera di Otto von Bismarck fu improntata al pragmatismo e alla Realpolitik(approccio pratico e realistico ai problemi): il suo obiettivo principale, dopo l’unificazione della Germania nel 1871, era consolidare la posizione tedesca come potenza continentale senza provocare nuovi conflitti.  
              </p>
              <p className="text-warm-gray">
                Attraverso un abile sistema di alleanze e una diplomazia multilaterale, Bismarck riuscì a:
                <ul className="list-disc pl-8 mt-4 space-y-2">
                  <li>Mantenere la pace in Europa per 19 anni</li>
                  <li>Evitare la formazione di coalizioni anti-tedesche</li>
                  <li>Preservare l'equilibrio di potere tra le grandi potenze</li>
                </ul>
              </p>
              <p className="text-warm-gray">
              La sua strategia combinava gli interessi nazionali con considerazioni strategiche, spesso con approccio cinico, ma efficace.
              </p>
            </motion.div>
            <motion.div 
              className="relative transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-imperial-gold/10 transform rotate-3 rounded-[2rem]" />
              <img 
                src="/images/bismarck-diplomacy.jpg" 
                alt="Bismarck al Congresso di Berlino" 
                className="relative rounded-[2rem] shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Strategie Diplomatiche */}
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
            Le strategie diplomatiche di Bismarck
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "alleanze",
                title: "Alleanze",
                icon: FaHandshake,
                description: "La Germania firmò una serie di alleanze con altre potenze europee per consolidare la sua posizione",
                content: "La Germania firmò alleanze con l'Austria, la Russia e l'Italia per creare un sistema di alleanze che le permettesse di mantenere la pace in Europa",
                timeline: [
                  "1879: La Germania e l'Austria firmarono un trattato di alleanza",
                  "1882: La Germania, l'Austria e l'Italia firmarono la Triplice Alleanza",
                  "1887: La Germania e la Russia firmarono un trattato di alleanza"
                ]
              },
              {
                id: "francia",
                title: "Conquista della Francia",
                icon: FaShieldAlt,
                description: "La Germania sconfisse la Francia nella guerra franco-prussiana",
                content: "La Germania sconfisse la Francia nella guerra franco-prussiana e annesse l'Alsazia e la Lorena",
                timeline: [
                  "1870: La Germania sconfisse la Francia nella battaglia di Sedan",
                  "1871: La Germania annesse l'Alsazia e la Lorena"
                ]
              },
              {
                id: "colonie",
                title: "Colonie",
                icon: FaGlobeEurope,
                description: "La Germania creò un impero coloniale",
                content: "La Germania creò un impero coloniale in Africa e in Asia",
                timeline: [
                  "1884: La Germania creò la colonia del Togo",
                  "1885: La Germania creò la colonia del Camerun"
                ]
              },
              {
                id: "congresso",
                title: "Congresso di Berlino",
                icon: FaBalanceScale,
                description: "La Germania partecipò al Congresso di Berlino",
                content: "La Germania partecipò al Congresso di Berlino per discutere la questione orientale",
                timeline: [
                  "1878: La Germania partecipò al Congresso di Berlino"
                ]
              },
              {
                id: "russia",
                title: "Relazioni con la Russia",
                icon: FaChessKnight,
                description: "La Germania ebbe relazioni complesse con la Russia",
                content: "La Germania ebbe relazioni complesse con la Russia, che furono caratterizzate da periodi di alleanza e di conflitto",
                timeline: [
                  "1879: La Germania e la Russia firmarono un trattato di alleanza",
                  "1887: La Germania e la Russia firmarono un trattato di non aggressione"
                ]
              },
              {
                id: "potenza",
                title: "Potenza",
                icon: FaCrown,
                description: "La Germania divenne una potenza mondiale",
                content: "La Germania divenne una potenza mondiale grazie alla sua industria, alla sua tecnologia e alla sua forza militare",
                timeline: [
                  "1871: La Germania divenne una potenza continentale",
                  "1880: La Germania divenne una potenza mondiale"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl transform-gpu cursor-pointer group ${
                  expandedCard === item.id ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
                onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6"
                >
                  <item.icon className="text-5xl text-imperial-gold" />
                </motion.div>
                <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">{item.title}</h3>
                <p className="text-warm-gray mb-4">{item.description}</p>
                
                {/* Pop-up content */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: expandedCard === item.id ? 1 : 0,
                    height: expandedCard === item.id ? "auto" : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-imperial-gold/20">
                    <p className="text-warm-gray mb-4">{item.content}</p>
                    <div>
                      <h4 className="text-xl font-playfair mb-2 text-prussian-blue">Timeline:</h4>
                      <ul className="list-disc pl-6 text-warm-gray">
                        {item.timeline.map((event, i) => (
                          <li key={i}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Click indicator */}
                <div className="absolute bottom-4 right-4 text-imperial-gold transition-transform duration-300"
                     style={{ transform: expandedCard === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impatto Internazionale */}
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
            L'Impatto Internazionale
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Successi</h3>
              <ul className="list-disc pl-6 text-warm-gray">
                <li>La Germania divenne una potenza mondiale</li>
                <li>La Germania creò un impero coloniale</li>
                <li>La Germania ebbe relazioni complesse con la Russia</li>
                <li>La Germania partecipò al Congresso di Berlino</li>
                <li>La Germania sconfisse la Francia nella guerra franco-prussiana</li>
                <li>La Germania firmò una serie di alleanze con altre potenze europee</li>
              </ul>
            </motion.div>
            <motion.div 
              className="relative transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-imperial-gold/10 transform -rotate-3 rounded-[2rem]" />
              <img 
                src="/images/congress-berlin-map.jpg" 
                alt="Mappa del Congresso di Berlino" 
                className="relative rounded-[2rem] shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Sfide e Limiti */}
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
            Sfide e Limiti
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ul className="list-disc pl-6 text-warm-gray space-y-2">
                <li>Tensioni con la Russia</li>
                <li>Complessità e fragilità del sistema di alleanze</li>
                <li>Pressioni per l'espansione coloniale</li>
                <li>Rivalità crescente con il Regno Unito</li>
                <li>Instabilità nei Balcani</li>
                <li>Dipendenza dal carisma e dall'abilità personale di Bismarck</li>
              </ul>
            </motion.div>
            <div className="h-full flex items-center justify-center">
              <div className="w-full h-64 bg-prussian-blue/10 rounded-[2rem] flex items-center justify-center">
                <FaBalanceScale className="text-6xl text-prussian-blue/30" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Eredità Diplomatica */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2 
            className="text-4xl font-playfair mb-8 text-prussian-blue bg-clip-text text-transparent bg-gradient-to-r from-prussian-blue via-prussian-blue/80 to-prussian-blue"
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            L'Eredità Diplomatica
          </motion.h2>
          <div className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl">
            <p className="text-warm-gray mb-6">
              L'approccio di Bismarck ha segnato profondamente la diplomazia europea:
            </p>
            <ul className="list-disc pl-6 text-warm-gray space-y-2 mb-6">
              <li>Il suo sistema multilaterale è stato modello per la diplomazia moderna</li>
              <li>La Realpolitik ha dimostrato l'efficacia della pragmatica gestione degli interessi</li>
              <li>Tuttavia, la dipendenza eccessiva da un solo statista ha reso fragile il sistema dopo le sue dimissioni (1890)</li>
            </ul>
            <p className="text-warm-gray font-medium italic">
              Lezioni per il futuro: La diplomazia deve sapersi adattare
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ForeignPolicy;