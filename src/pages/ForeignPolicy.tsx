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
              Politica Estera
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-crimson italic text-ivory/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              L'architetto dell'equilibrio europeo
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
              { icon: FaHistory, title: "Anni di Pace", value: "19", text: "Anni di pace mantenuta in Europa durante il cancellierato" },
              { icon: FaHandshake, title: "Trattati", value: "12", text: "Trattati diplomatici principali negoziati" },
              { icon: FaFlag, title: "Colonie", value: "4", text: "Principali colonie africane acquisite" },
              { icon: FaUsers, title: "Alleanze", value: "3", text: "Principali alleanze strategiche create" }
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
                <p className="text-warm-gray text-lg">{item.text}</p>
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
            La Visione Diplomatica
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-warm-gray">
                La politica estera di Bismarck fu caratterizzata da un approccio pragmatico e realista, mirato a mantenere la pace in Europa e a proteggere gli interessi della Germania. Dopo l'unificazione, il suo obiettivo principale era consolidare la posizione della Germania come potenza continentale senza provocare una grande guerra.
              </p>
              <p className="text-warm-gray">
                Attraverso un complesso sistema di alleanze e una diplomazia abile, Bismarck riuscì a mantenere l'equilibrio di potere in Europa per quasi due decenni. La sua strategia di 'saturazione' e 'equilibrio' prevenne la formazione di coalizioni anti-tedesche e mantenne la Germania al centro del sistema internazionale.
              </p>
              <p className="text-warm-gray">
                La sua Realpolitik combinava interessi nazionali con considerazioni strategiche, dimostrando una straordinaria capacità di navigare tra le complesse relazioni tra le potenze europee. Questo approccio, sebbene talvolta cinico, garantì un periodo di relativa stabilità in Europa dopo i tumultuosi anni dell'unificazione tedesca.
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
            Le Strategie Diplomatiche
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "alleanze",
                title: "Sistema di Alleanze",
                icon: FaHandshake,
                description: "La rete di alleanze per mantenere l'equilibrio europeo.",
                content: "Bismarck creò un complesso sistema di alleanze per isolare la Francia e mantenere la pace in Europa. La Lega dei Tre Imperatori (1873) unì Germania, Austria-Ungheria e Russia. Il Trattato di Duplice Alleanza (1879) con l'Austria-Ungheria e la Triplice Alleanza (1882) con Italia e Austria-Ungheria formarono il nucleo della sua diplomazia.",
                timeline: [
                  "1873: Lega dei Tre Imperatori",
                  "1879: Trattato di Duplice Alleanza con l'Austria-Ungheria",
                  "1882: Triplice Alleanza con Italia e Austria-Ungheria",
                  "1887: Trattato di Riassicurazione con la Russia"
                ]
              },
              {
                id: "francia",
                title: "Isolamento della Francia",
                icon: FaShieldAlt,
                description: "La strategia per contenere la potenza francese.",
                content: "Dopo la guerra franco-prussiana, Bismarck lavorò per isolare diplomaticamente la Francia. Attraverso il Congresso di Berlino (1878) e varie alleanze, impedì alla Francia di trovare alleati in Europa. La sua politica di 'saturazione' mirava a mantenere la Francia debole ma non umiliata.",
                timeline: [
                  "1871: Fine della guerra franco-prussiana",
                  "1875: Crisi di guerra in vista",
                  "1878: Congresso di Berlino",
                  "1882: Triplice Alleanza per isolare la Francia"
                ]
              },
              {
                id: "colonie",
                title: "Politica Coloniale",
                icon: FaGlobeEurope,
                description: "L'espansione dell'influenza tedesca oltre l'Europa.",
                content: "Sebbene inizialmente scettico, Bismarck fu coinvolto nella corsa alle colonie per ragioni politiche interne. La Germania acquisì territori in Africa (Togo, Camerun, Africa Sud-Occidentale, Africa Orientale Tedesca) e nel Pacifico.",
                timeline: [
                  "1884: Conferenza di Berlino sul Congo",
                  "1884: Acquisizione di Togo e Camerun",
                  "1885: Africa Orientale Tedesca",
                  "1890: Trattato di Helgoland-Zanzibar"
                ]
              },
              {
                id: "congresso",
                title: "Congresso di Berlino",
                icon: FaBalanceScale,
                description: "La mediazione nella crisi balcanica.",
                content: "Nel 1878, Bismarck ospitò il Congresso di Berlino per risolvere la crisi balcanica. Come 'onesto mediatore', riuscì a prevenire una guerra tra le grandi potenze, ridisegnando i confini balcanici e mantenendo l'equilibrio di potere.",
                timeline: [
                  "1877: Guerra russo-turca",
                  "1878: Trattato di San Stefano",
                  "1878: Congresso di Berlino",
                  "1878: Trattato di Berlino"
                ]
              },
              {
                id: "russia",
                title: "Relazioni con la Russia",
                icon: FaChessKnight,
                description: "Il delicato equilibrio con l'Impero zarista.",
                content: "Bismarck mantenne relazioni complesse con la Russia, alternando tra la Lega dei Tre Imperatori e il Trattato di Riassicurazione (1887). Cercò di prevenire un'alleanza franco-russa che avrebbe minacciato la Germania su due fronti.",
                timeline: [
                  "1873: Lega dei Tre Imperatori",
                  "1881: Rinnovo della Lega dei Tre Imperatori",
                  "1887: Trattato di Riassicurazione",
                  "1890: Fine del Trattato di Riassicurazione"
                ]
              },
              {
                id: "potenza",
                title: "Politica di Potenza",
                icon: FaCrown,
                description: "L'equilibrio tra diplomazia e forza militare.",
                content: "La politica estera di Bismarck combinò diplomazia abile e deterrenza militare. Mantenne un esercito forte come garanzia di sicurezza, ma preferì risolvere le crisi attraverso la diplomazia.",
                timeline: [
                  "1871: Unificazione tedesca",
                  "1875: Crisi di guerra in vista",
                  "1887: Crisi bulgara",
                  "1890: Dimissioni di Bismarck"
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
                className="backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl transform-gpu cursor-pointer group"
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
                <li>Mantenimento della pace in Europa per quasi due decenni</li>
                <li>Isolamento diplomatico della Francia</li>
                <li>Creazione di un sistema di alleanze stabile</li>
                <li>Prevenzione di una guerra su due fronti</li>
                <li>Consolidamento della posizione della Germania come potenza continentale</li>
                <li>Mediazione efficace nelle crisi internazionali</li>
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

          <motion.div 
            className="mt-12 backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Sfide</h3>
            <ul className="list-disc pl-6 text-warm-gray">
              <li>Tensioni crescenti con la Russia</li>
              <li>Complessità del sistema di alleanze</li>
              <li>Pressioni per l'espansione coloniale</li>
              <li>Rivalità con la Gran Bretagna</li>
              <li>Instabilità nei Balcani</li>
              <li>Difficoltà nel mantenere l'equilibrio di potere</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Eredità Diplomatica */}
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
            L'Eredità Diplomatica
          </motion.h2>
          <motion.div 
            className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-warm-gray">
              La politica estera di Bismarck ha lasciato un'impronta duratura sulla diplomazia europea. Il suo sistema di alleanze e la sua Realpolitik influenzarono profondamente le relazioni internazionali del XX secolo. La sua capacità di mantenere l'equilibrio di potere attraverso una complessa rete di alleanze e trattati divenne un modello per la diplomazia moderna.
            </p>
            <p className="text-warm-gray">
              Tuttavia, la complessità del suo sistema di alleanze e la sua dipendenza dalla sua straordinaria abilità diplomatica resero il sistema fragile dopo la sua partenza. La sua eredità dimostra sia i vantaggi di una diplomazia pragmatica e realista, sia i rischi di un sistema internazionale troppo dipendente dalla personalità di un singolo statista.
            </p>
            <p className="text-warm-gray">
              La sua visione di un'Europa stabile basata sull'equilibrio di potere e sulla diplomazia multilaterale continua a influenzare il pensiero strategico contemporaneo. Tuttavia, il suo approccio autoritario e la sua diffidenza verso le istituzioni internazionali rappresentano anche un monito sulla necessità di bilanciare interessi nazionali e cooperazione internazionale.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ForeignPolicy; 