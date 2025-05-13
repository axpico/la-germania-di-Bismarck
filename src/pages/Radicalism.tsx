import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FaFire, FaBook, FaUsers, FaBalanceScale, FaChartLine, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const Radicalism: React.FC = () => {
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
          className="absolute inset-0 bg-[url('/images/workers-march.jpg')] bg-cover bg-center"
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
              Radicalismo
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-crimson italic text-ivory/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Il movimento rivoluzionario in Germania
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
            Le Origini del Movimento
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-warm-gray">
                Il radicalismo tedesco emerse come risposta alle trasformazioni sociali e politiche 
                dell'epoca bismarckiana. Movimenti socialisti, democratici e liberali radicali 
                sfidarono l'ordine costituito, proponendo riforme radicali e una nuova visione 
                della società.
              </p>
              <p className="text-warm-gray">
                Questi movimenti, sebbene spesso repressi, contribuirono significativamente allo 
                sviluppo del pensiero politico moderno e alla lotta per i diritti sociali.
              </p>
            </motion.div>
            <motion.div 
              className="relative transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-imperial-gold/10 transform rotate-3 rounded-[2rem]" />
              <img 
                src="/images/radical-meeting.jpg" 
                alt="Riunione dei radicali" 
                className="relative rounded-[2rem] shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Key Movements */}
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
            I Movimenti Chiave
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: FaFire, 
                title: "Socialismo", 
                text: "Movimento per i diritti dei lavoratori e la giustizia sociale",
                details: [
                  "Fondazione del Partito Socialdemocratico (SPD)",
                  "Lotta per la giornata lavorativa di 8 ore",
                  "Organizzazione dei sindacati",
                  "Pubblicazione di giornali e riviste socialiste"
                ]
              },
              { 
                icon: FaBook, 
                title: "Liberalismo", 
                text: "Lotta per le libertà civili e la democrazia",
                details: [
                  "Movimento per la libertà di stampa",
                  "Riforma del sistema elettorale",
                  "Separazione tra Chiesa e Stato",
                  "Diritti costituzionali"
                ]
              },
              { 
                icon: FaUsers, 
                title: "Democratici", 
                text: "Movimento per il suffragio universale",
                details: [
                  "Campagne per il voto segreto",
                  "Riforma del sistema parlamentare",
                  "Diritti di assemblea e associazione",
                  "Educazione politica delle masse"
                ]
              },
              { 
                icon: FaBalanceScale, 
                title: "Riformisti", 
                text: "Proposte per riforme sociali e politiche",
                details: [
                  "Riforma del sistema giudiziario",
                  "Miglioramento delle condizioni di lavoro",
                  "Riforma fiscale progressiva",
                  "Politiche di welfare state"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, rotateY: 5 }}
                className="backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl transform-gpu hover:shadow-3xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6"
                >
                  <item.icon className="text-5xl text-imperial-gold" />
                </motion.div>
                <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">{item.title}</h3>
                <p className="text-warm-gray text-lg mb-4">{item.text}</p>
                <ul className="text-warm-gray space-y-2">
                  {item.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="text-sm"
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact */}
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
            L'Impatto Sociale
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Riforme Sociali</h3>
              <p className="text-warm-gray mb-4">
                L'impatto del radicalismo sulla società tedesca include:
              </p>
              <ul className="text-warm-gray space-y-2">
                {[
                  "Miglioramento delle condizioni dei lavoratori",
                  "Introduzione di riforme sociali",
                  "Espansione dei diritti civili",
                  "Formazione di partiti politici moderni",
                  "Sviluppo del movimento sindacale",
                  "Riforma del sistema educativo",
                  "Miglioramento delle condizioni di vita urbane",
                  "Promozione della cultura popolare"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Cambiamenti Politici</h3>
              <p className="text-warm-gray mb-4">
                Il radicalismo portò a significativi cambiamenti nel sistema politico:
              </p>
              <ul className="text-warm-gray space-y-2">
                {[
                  "Formazione di partiti politici moderni",
                  "Sviluppo del sistema parlamentare",
                  "Introduzione di riforme elettorali",
                  "Miglioramento della rappresentanza popolare",
                  "Rafforzamento dei diritti costituzionali",
                  "Sviluppo della stampa politica",
                  "Crescita del movimento femminista",
                  "Formazione di associazioni politiche"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Response */}
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
            La Risposta di Bismarck
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Leggi Anti-Socialiste</h3>
              <p className="text-warm-gray mb-4">
                Bismarck rispose al radicalismo con una serie di misure repressive:
              </p>
              <ul className="text-warm-gray space-y-2">
                {[
                  "Leggi anti-socialiste del 1878",
                  "Divieto di organizzazioni socialiste",
                  "Censura della stampa radicale",
                  "Persecuzione dei leader politici",
                  "Controllo delle assemblee pubbliche",
                  "Limitazione della libertà di associazione",
                  "Sorveglianza della polizia",
                  "Espulsione di attivisti"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Riforme Sociali</h3>
              <p className="text-warm-gray mb-4">
                Parallelamente alla repressione, Bismarck introdusse riforme sociali:
              </p>
              <ul className="text-warm-gray space-y-2">
                {[
                  "Assicurazione malattia (1883)",
                  "Assicurazione infortuni (1884)",
                  "Pensioni di invalidità e vecchiaia (1889)",
                  "Protezione dei lavoratori",
                  "Miglioramento delle condizioni di lavoro",
                  "Riforma del sistema educativo",
                  "Sviluppo delle infrastrutture sociali",
                  "Promozione della stabilità sociale"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
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
            L'Eredità
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: FaChartLine, 
                title: "Riforme Sociali", 
                text: "Fondazione del welfare state moderno",
                details: [
                  "Sistema di sicurezza sociale",
                  "Protezione dei lavoratori",
                  "Diritti sociali fondamentali",
                  "Stato sociale moderno"
                ]
              },
              { 
                icon: FaHandshake, 
                title: "Diritti Civili", 
                text: "Espansione dei diritti democratici",
                details: [
                  "Libertà di associazione",
                  "Diritti sindacali",
                  "Libertà di stampa",
                  "Diritti politici"
                ]
              },
              { 
                icon: FaShieldAlt, 
                title: "Movimenti", 
                text: "Sviluppo dei partiti politici moderni",
                details: [
                  "Partiti di massa",
                  "Organizzazioni sindacali",
                  "Movimenti sociali",
                  "Cultura politica moderna"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, rotateY: 5 }}
                className="backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl transform-gpu hover:shadow-3xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6"
                >
                  <item.icon className="text-5xl text-imperial-gold" />
                </motion.div>
                <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">{item.title}</h3>
                <p className="text-warm-gray text-lg mb-4">{item.text}</p>
                <ul className="text-warm-gray space-y-2">
                  {item.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="text-sm"
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Radicalism; 