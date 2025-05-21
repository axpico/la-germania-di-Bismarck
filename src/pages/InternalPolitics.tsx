import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FaBalanceScale, FaShieldAlt, FaHandshake, FaChartLine, FaUsers, FaLandmark, FaArrowDown } from 'react-icons/fa';

const InternalPolitics: React.FC = () => {
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

  // Parallax effect for background elements
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

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
        className="relative h-[90vh] overflow-hidden perspective-1000"
      >
        <motion.div 
          style={{ y, opacity, scale }}
          className="absolute inset-0 bg-[url('/images/reichstag.jpg')] bg-cover bg-center"
        />
        <motion.div 
          style={{ y: backgroundY, opacity: backgroundOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-prussian-blue/95 via-prussian-blue/85 to-prussian-blue/75"
        />
        
        {/* Interactive 3D background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 rounded-full bg-imperial-gold/10 backdrop-blur-sm"
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
              La Politica Interna
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-crimson italic text-ivory/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              L'evoluzione del sistema politico tedesco sotto Bismarck
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown className="text-4xl text-ivory/80" />
          </motion.div>
        </motion.div>
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
            Cos'è la politica interna bismarckiana?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-warm-gray text-lg leading-relaxed">
                La politica interna della Germania bismarckiana si sviluppò dopo la proclamazione del Secondo Reich nel 1871, quando si cercò di unificare i numerosi Stati tedeschi in un unico sistema centralizzato. Sebbene si mantenessero alcune autonomie regionali (come i parlamenti locali dei Länder), il nuovo Stato era fortemente accentrato e dominato dalla Prussia.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed mt-4">
                Il potere era concentrato nelle mani dell'imperatore e del cancelliere, mentre il Parlamento era composto da due camere: il Reichstag (eletto a suffragio universale maschile) e il Bundesrat (formato da membri nominati dai governi locali). Tuttavia, la loro influenza era limitata, rendendo il sistema decisamente autoritario.
              </p>
            </motion.div>
            <motion.div 
              className="relative transform-gpu group"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-imperial-gold/10 transform rotate-3 rounded-[2rem] group-hover:rotate-6 transition-transform duration-300" />
              <img 
                src="/images/reichstag-interior.jpg" 
                alt="Interno del Reichstag" 
                className="relative rounded-[2rem] shadow-2xl group-hover:shadow-3xl transition-all duration-300"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Key Reforms */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-playfair mb-12 text-prussian-blue text-center">
            Le Principali Politiche
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-playfair text-imperial-gold mb-4">Base Sociale</h3>
              <p className="text-warm-gray leading-relaxed">
                Il governo di Bismarck si appoggiava a un blocco sociale conservatore, costituito dall'aristocrazia terriera e militare prussiana (i Junker), dall'alta borghesia imprenditoriale e dalla burocrazia. Le forze dominanti erano il Partito conservatore e quello nazionale-liberale.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-playfair text-imperial-gold mb-4">Opposizione e Repressione</h3>
              <p className="text-warm-gray leading-relaxed">
                Negli anni Settanta e Ottanta emersero movimenti politici di massa, come lo Zentrum (di ispirazione cattolica) e la SPD (socialdemocratica). Bismarck vide in questi partiti una minaccia e reagì con dure misure repressive.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:shadow-xl transition-all duration-300">
              <div className="text-imperial-gold text-3xl mb-4">
                <FaBalanceScale />
              </div>
              <h4 className="text-xl font-semibold mb-3">Kulturkampf (1872)</h4>
              <p className="text-warm-gray text-sm leading-relaxed">
                Campagna legislativa contro i cattolici per ridurre il potere della Chiesa. Si rivelò controproducente e rafforzò lo Zentrum.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:shadow-xl transition-all duration-300">
              <div className="text-imperial-gold text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h4 className="text-xl font-semibold mb-3">Leggi Antisocialiste (1878)</h4>
              <p className="text-warm-gray text-sm leading-relaxed">
                Vietavano sindacati, giornali e assemblee legate alla SPD, costringendola all'illegalità per contrastare il movimento operaio.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:shadow-xl transition-all duration-300">
              <div className="text-imperial-gold text-3xl mb-4">
                <FaHandshake />
              </div>
              <h4 className="text-xl font-semibold mb-3">Riforme Sociali</h4>
              <p className="text-warm-gray text-sm leading-relaxed">
                Assicurazione per malattia (1883), infortuni sul lavoro (1884), invalidità e vecchiaia (1888). Misure all'avanguardia per l'epoca.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Historical Impact */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2 
            className="text-4xl font-playfair mb-12 text-prussian-blue text-center"
          >
            L'Impatto Storico
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-imperial-gold/30 to-imperial-gold/10 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {/* Item 1 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-12 text-right">
                    <h3 className="text-2xl font-playfair text-imperial-gold">1871-1878</h3>
                    <p className="text-warm-gray mt-2">
                      La politica interna bismarckiana riuscì a mantenere l'ordine e rafforzare l'autorità dello Stato centrale.
                    </p>
                  </div>
                  <div className="absolute left-1/2 w-6 h-6 rounded-full bg-imperial-gold border-4 border-white transform -translate-x-1/2"></div>
                  <div className="w-1/2"></div>
                </div>
                
                {/* Item 2 */}
                <div className="relative flex items-center">
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 w-6 h-6 rounded-full bg-imperial-gold border-4 border-white transform -translate-x-1/2"></div>
                  <div className="w-1/2 pl-12">
                    <h3 className="text-2xl font-playfair text-imperial-gold">Anni '80</h3>
                    <p className="text-warm-gray mt-2">
                      Le riforme sociali e il controllo repressivo limitano temporaneamente l'espansione dei movimenti di opposizione.
                    </p>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-12 text-right">
                    <h3 className="text-2xl font-playfair text-imperial-gold">1890</h3>
                    <p className="text-warm-gray mt-2">
                      Nonostante le repressioni, la SPD raggiunge il 18% dei voti alle elezioni, diventando un attore politico sempre più rilevante.
                    </p>
                  </div>
                  <div className="absolute left-1/2 w-6 h-6 rounded-full bg-imperial-gold border-4 border-white transform -translate-x-1/2"></div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-playfair text-imperial-gold mb-4">Bilancio</h3>
              <p className="text-warm-gray leading-relaxed">
                Le misure repressive non riuscirono a fermare del tutto il dissenso. Verso la fine degli anni Ottanta, la SPD tornò a crescere, dimostrando che la repressione da sola non poteva eliminare le istanze di cambiamento sociale.
              </p>
            </div>
          </div>
          <div className="mt-24">
            <h2 className="text-4xl font-playfair mb-12 text-prussian-blue text-center">
              L'Eredità delle Riforme
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative transform-gpu group"
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-imperial-gold/10 transform -rotate-3 rounded-[2rem] group-hover:-rotate-6 transition-transform duration-300" />
                <img 
                  src="public/images/welfare.png" 
                  alt="Illustrazione del welfare state" 
                  className="relative rounded-[2rem] shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                />
              </motion.div>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <h3 className="text-2xl font-playfair text-imperial-gold mb-4">Un Modello per l'Europa</h3>
                  <p className="text-warm-gray leading-relaxed">
                    Le leggi sociali introdotte da Bismarck sono considerate tra le prime forme di welfare state in Europa. Anche se ispirate da un approccio paternalista, esse riconobbero per la prima volta alcuni diritti fondamentali ai lavoratori.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <h3 className="text-2xl font-playfair text-imperial-gold mb-4">L'Ambivalenza del Modello</h3>
                  <p className="text-warm-gray leading-relaxed">
                    Queste riforme non miravano a includere i cittadini nella vita democratica, ma a contenerne le proteste. Ciononostante, gettarono le basi per una maggiore attenzione alla questione sociale da parte dello Stato tedesco e influenzarono profondamente i futuri sistemi di protezione sociale in Europa.
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-warm-gray/80 mt-6">
                  <FaChartLine className="text-imperial-gold text-xl" />
                  <span>Primo sistema di assicurazione malattia (1883)</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-warm-gray/80">
                  <FaUsers className="text-imperial-gold text-xl" />
                  <span>Protezione per infortuni e invalidità (1884)</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-warm-gray/80">
                  <FaLandmark className="text-imperial-gold text-xl" />
                  <span>Pensione di vecchiaia (1888)</span>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-prussian-blue/90 to-prussian-blue/70 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <blockquote className="text-center text-white/90 italic text-xl leading-relaxed">
                "Le riforme sociali di Bismarck rappresentano un punto di svolta nella storia dello Stato sociale, dimostrando come la modernizzazione economica richiedesse anche una risposta alle sfide sociali che essa stessa generava."
                <footer className="mt-4 text-imperial-gold font-medium">
                  — Storico delle istituzioni politiche
                </footer>
              </blockquote>
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-24"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-playfair mb-8 text-prussian-blue">
                Un'Epoca di Trasformazione
              </h2>
              <p className="text-xl text-warm-gray leading-relaxed mb-8">
                La politica interna di Bismarck rappresenta un capitolo cruciale nella storia tedesca, caratterizzato da una complessa interazione tra autoritarismo e riforme sociali. Se da un lato il cancelliere di ferro cercò di mantenere il controllo attraverso misure repressive, dall'altro gettò inconsapevolmente le basi per lo Stato sociale moderno.
              </p>
              <div className="w-24 h-1 bg-imperial-gold mx-auto my-12"></div>
              <p className="text-warm-gray/80">
                La sua eredità continua a influenzare il dibattito politico contemporaneo sul ruolo dello Stato nella protezione sociale e nel rapporto tra democrazia e riforme.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default InternalPolitics;