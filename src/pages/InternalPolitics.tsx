import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FaBalanceScale, FaShieldAlt, FaHandshake, FaBook, FaChartLine, FaUsers, FaLandmark, FaArrowDown } from 'react-icons/fa';

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
              Politica Interna
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-crimson italic text-ivory/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              La trasformazione della società tedesca
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
            La Visione Sociale
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-warm-gray">
                La politica interna di Bismarck fu caratterizzata da una visione pragmatica e innovativa. 
                Attraverso una serie di riforme sociali e istituzionali, trasformò profondamente la società tedesca, 
                creando le basi per uno stato moderno e progressista.
              </p>
              <p className="text-warm-gray">
                Il suo approccio combinava conservatorismo politico con riforme sociali avanzate, 
                anticipando molti dei concetti dello stato sociale moderno.
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
            Le Riforme Chiave
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaShieldAlt, title: "Assicurazione Malattia", text: "Primo sistema di assicurazione malattia obbligatoria (1883)" },
              { icon: FaHandshake, title: "Assicurazione Infortuni", text: "Protezione dei lavoratori contro gli infortuni sul lavoro (1884)" },
              { icon: FaBook, title: "Istruzione", text: "Riforma del sistema educativo e promozione della cultura tedesca" },
              { icon: FaUsers, title: "Pensioni", text: "Introduzione del sistema pensionistico (1889)" }
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
                <p className="text-warm-gray text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Economic Policies */}
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
            Le Politiche Economiche
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Protezionismo e Sviluppo Industriale</h3>
              <p className="text-warm-gray">
                Bismarck implementò una politica economica protezionista attraverso l'introduzione di dazi doganali nel 1879. 
                Questa strategia mirava a proteggere l'industria tedesca dalla concorrenza straniera e a favorire lo sviluppo 
                economico interno. Il risultato fu una rapida industrializzazione e la nascita di grandi conglomerati industriali.
              </p>
              <p className="text-warm-gray">
                La politica economica di Bismarck contribuì significativamente alla trasformazione della Germania in una 
                potenza industriale di primo piano, con particolare attenzione allo sviluppo delle infrastrutture e 
                delle reti ferroviarie.
              </p>
            </motion.div>
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Riforme Sociali Avanzate</h3>
              <p className="text-warm-gray">
                Le riforme sociali di Bismarck furono rivoluzionarie per l'epoca. Oltre al sistema di assicurazione malattia, 
                infortuni e pensioni, introdusse anche:
              </p>
              <ul className="text-warm-gray list-disc pl-6 space-y-2">
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Giornata lavorativa di 8 ore per i minatori (1891)
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Divieto del lavoro minorile
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Regolamentazione del lavoro femminile
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Assicurazione contro la disoccupazione
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Cultural Impact */}
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
            L'Impatto Culturale
          </motion.h2>
          <motion.div 
            className="backdrop-blur-md bg-white/10 p-12 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.02, rotateY: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.blockquote 
              className="text-3xl font-crimson italic text-warm-gray mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              "La cultura tedesca deve essere il fondamento della nostra unità nazionale."
            </motion.blockquote>
            <motion.p 
              className="text-warm-gray text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Bismarck promosse attivamente la cultura tedesca come elemento unificante della nazione. 
              Sostenne le arti, le scienze e l'istruzione, creando le basi per il prestigio culturale 
              della Germania nel mondo moderno.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Cultural and Educational Policies */}
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
            Politiche Culturali e Istruzione
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Riforma del Sistema Educativo</h3>
              <p className="text-warm-gray">
                Bismarck promosse una riforma completa del sistema educativo tedesco, con particolare attenzione a:
              </p>
              <ul className="text-warm-gray list-disc pl-6 space-y-2">
                {[
                  "Istruzione obbligatoria per tutti i bambini",
                  "Miglioramento della formazione professionale",
                  "Espansione dell'istruzione superiore",
                  "Promozione della ricerca scientifica"
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
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Unità Culturale</h3>
              <p className="text-warm-gray">
                Per rafforzare l'identità nazionale, Bismarck:
              </p>
              <ul className="text-warm-gray list-disc pl-6 space-y-2">
                {[
                  "Promosse la lingua tedesca come lingua ufficiale",
                  "Sostenne le arti e le scienze tedesche",
                  "Favorì lo sviluppo di una cultura nazionale unificata",
                  "Incoraggiò la ricerca storica e filologica"
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

        {/* Religious Policies */}
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
            Politiche Religiose e Kulturkampf
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">La Lotta Culturale</h3>
              <p className="text-warm-gray">
                Il Kulturkampf (1871-1878) fu una serie di misure legislative volte a:
              </p>
              <ul className="text-warm-gray list-disc pl-6 space-y-2">
                {[
                  "Limitare l'influenza della Chiesa cattolica",
                  "Rafforzare il controllo statale sull'istruzione",
                  "Regolamentare il matrimonio civile",
                  "Promuovere la laicità dello stato"
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
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Riconciliazione e Tolleranza</h3>
              <p className="text-warm-gray">
                Dopo il Kulturkampf, Bismarck adottò un approccio più conciliante:
              </p>
              <ul className="text-warm-gray list-disc pl-6 space-y-2">
                {[
                  "Ripristino delle relazioni con la Chiesa cattolica",
                  "Promozione della tolleranza religiosa",
                  "Rispetto per le diverse confessioni",
                  "Equilibrio tra stato e istituzioni religiose"
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
              { icon: FaChartLine, title: "Sviluppo Economico", text: "Creazione di un'economia moderna e competitiva" },
              { icon: FaUsers, title: "Welfare State", text: "Fondazione del primo stato sociale moderno" },
              { icon: FaLandmark, title: "Istituzioni", text: "Sistema istituzionale che ha influenzato l'Europa" }
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
                <p className="text-warm-gray text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default InternalPolitics; 