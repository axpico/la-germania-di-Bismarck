import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FaFlag, FaMapMarkedAlt, FaShieldAlt, FaBalanceScale, FaChartLine, FaHandshake, FaCrown, FaBook, FaPalette, FaMusic } from 'react-icons/fa';

const Revanchism: React.FC = () => {
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
          className="absolute inset-0 bg-[url('/images/irredentismo-italiano.jpg')] bg-cover bg-center"
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
              Il Revanscismo
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-crimson italic text-ivory/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              L'irredentismo italiano e le terre irredente
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
            Le Origini del Revanscismo
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-warm-gray">
                Il revanscismo italiano nacque come movimento politico e culturale alla fine dell'Ottocento, con l'obiettivo di rivendicare i territori considerati "irredenti" - terre abitate in maggioranza da popolazioni di lingua italiana ma rimaste sotto il controllo straniero dopo l'Unità d'Italia.
              </p>
              <p className="text-warm-gray">
                Le principali aree contese erano il Trentino-Alto Adige, la Venezia Giulia, la Dalmazia e la città di Nizza. Queste rivendicazioni territoriali erano sostenute da motivazioni storiche, culturali e linguistiche, e divennero un elemento centrale della politica estera italiana.
              </p>
              <p className="text-warm-gray">
                Il movimento trovò sostegno sia tra gli intellettuali che tra la popolazione, alimentando un sentimento nazionalista che avrebbe avuto un ruolo significativo negli eventi che portarono alla Prima Guerra Mondiale.
              </p>
            </motion.div>
            <motion.div 
              className="relative transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-imperial-gold/10 transform rotate-3 rounded-[2rem]" />
              <img 
                src="/images/terre-irredente.jpg" 
                alt="Le terre irredente italiane" 
                className="relative rounded-[2rem] shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Key Events */}
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
            I Protagonisti e gli Eventi
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: FaFlag, 
                title: "Le Origini dell'Irredentismo", 
                text: "Il movimento irredentista italiano emerse negli anni '70 dell'Ottocento, sostenendo l'annessione delle 'terre irredente' abitate da italiani ma rimaste sotto il dominio austriaco. Fu un movimento trasversale che coinvolse sia democratici che conservatori, uniti dall'obiettivo di completare l'Unità d'Italia.",
                details: [
                  "1877: Fondazione dell'Associazione in pro dell'Italia Irredenta",
                  "Matteo Renato Imbriani conia il termine 'terre irredente'",
                  "Coinvolgimento di intellettuali e studenti",
                  "Diffusione attraverso giornali e circoli culturali"
                ]
              },
              { 
                icon: FaMapMarkedAlt, 
                title: "Le Terre Contese", 
                text: "Le principali aree rivendicate erano il Trentino-Alto Adige, la Venezia Giulia, l'Istria e la Dalmazia. Queste regioni, con una significativa presenza di popolazione italiana, erano rimaste sotto il controllo dell'Impero austro-ungarico dopo il 1866.",
                details: [
                  "Trentino-Alto Adige: a maggioranza tedesca con minoranza italiana",
                  "Venezia Giulia: Trieste, Gorizia, l'Istria",
                  "Dalmazia: presenza italiana nelle città costiere",
                  "La questione di Nizza e della Corsica"
                ]
              },
              { 
                icon: FaShieldAlt, 
                title: "La Politica Estera Italiana", 
                text: "Il governo italiano cercò di bilanciare le aspirazioni irredentiste con la necessità di mantenere buoni rapporti con l'Austria-Ungheria. Questo portò a tensioni interne tra neutralisti e interventisti, specialmente all'avvicinarsi della Prima Guerra Mondiale.",
                details: [
                  "1882: Triplice Alleanza con Germania e Austria-Ungheria",
                  "Tensioni con l'Austria per le questioni irredentiste",
                  "Ruolo di personaggi come Francesco Crispi",
                  "L'evoluzione della politica estera italiana"
                ]
              },
              { 
                icon: FaBalanceScale, 
                title: "Verso la Grande Guerra", 
                text: "Lo scoppio della Prima Guerra Mondiale nel 1914 portò a una svolta. L'Italia inizialmente rimase neutrale, ma il movimento irredentista spinse per l'intervento a fianco dell'Intesa, vedendo l'opportunità di annettere le terre irredente.",
                details: [
                  "1915: Patto di Londra e ingresso in guerra",
                  "La questione adriatica e Fiume",
                  "Le conseguenze del Trattato di Saint-Germain",
                  "L'eredità del revanscismo nel dopoguerra"
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
            L'Impatto Storico
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">L'Irredentismo e la Prima Guerra Mondiale</h3>
              <p className="text-warm-gray mb-4">
                Il movimento irredentista italiano raggiunse il suo apice durante la Prima Guerra Mondiale. L'Italia inizialmente rimase neutrale, ma il desiderio di annettere le terre irredente divenne un fattore chiave nella decisione di entrare in guerra a fianco dell'Intesa nel 1915.
              </p>
              <p className="text-warm-gray mb-4 font-semibold">
                Le conseguenze principali:
              </p>
              <ul className="text-warm-gray space-y-3">
                {[
                  "Il Patto di Londra (1915) promise all'Italia il Trentino, il Tirolo meridionale, Trieste e altri territori in cambio del suo intervento in guerra",
                  "L'ingresso in guerra portò a pesanti perdite umane, con oltre 600.000 vittime italiane",
                  "La vittoria nella guerra permise l'annessione di Trento, Trieste e dell'Istria, ma non della Dalmazia come sperato",
                  "Le delusioni post-belliche alimentarono il malcontento che favorì l'ascesa del fascismo"
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
              <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">Una Società che Cambia</h3>
              <p className="text-warm-gray mb-4">
                Il revanscismo non rimase confinato nei palazzi del potere: penetrò in ogni aspetto della vita quotidiana, plasmando il modo in cui le persone pensavano, sentivano e vivevano la loro identità nazionale.
              </p>
              <p className="text-warm-gray mb-4 font-semibold">
                La vita delle persone comuni cambiò radicalmente:
              </p>
              <ul className="text-warm-gray space-y-3">
                {[
                  "A scuola di patriottismo: I bambini imparavano la storia come una successione di sconfitte da vendicare, con mappe che mostravano i 'territori perduti' da riconquistare",
                  "La stampa fomentava l'odio: I giornali dipingevano costantemente la nazione vicina come il nemico da sconfiggere, alimentando un clima di sospetto e ostilità",
                  "L'esercito divenne un modello: Il servizio militare obbligatorio trasformò milioni di cittadini in soldati, mentre le parate militari diventavano il principale intrattenimento popolare",
                  "Una generazione cresciuta nell'odio: I giovani venivano educati a vedere la guerra non come una tragedia, ma come un'opportunità per riscattare l'onore nazionale"
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
            Impatto Culturale
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: FaBook, 
                title: "Letteratura", 
                text: "L'irredentismo nella letteratura italiana",
                details: [
                  "Le opere di Giosuè Carducci e Giovanni Pascoli",
                  "I romanzi di Gabriele D'Annunzio",
                  "La poesia patriottica e civile",
                  "I manifesti politico-letterari"
                ]
              },
              { 
                icon: FaPalette, 
                title: "Arti Visive", 
                text: "L'arte al servizio dell'irredentismo",
                details: [
                  "I pittori del Divisionismo italiano",
                  "I monumenti ai caduti delle terre irredente",
                  "La cartografia propagandistica",
                  "I manifesti e la grafica politica"
                ]
              },
              { 
                icon: FaMusic, 
                title: "Musica e Teatro", 
                text: "La cultura popolare e l'identità nazionale",
                details: [
                  "Le canzoni popolari irredentiste",
                  "Le opere liriche di ispirazione risorgimentale",
                  "Le marce militari e gli inni",
                  "Il teatro di propaganda patriottica"
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
            className="prose prose-lg backdrop-blur-md bg-white/10 p-8 rounded-[2rem] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-4xl mx-auto"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-playfair mb-4 text-prussian-blue">L'Eredità dell'Irredentismo</h3>
            <p className="text-warm-gray mb-4">
              L'irredentismo ha lasciato un'impronta profonda nella storia d'Italia, con conseguenze che si protraggono fino a oggi:
            </p>
            <ul className="text-warm-gray space-y-2">
              {[
                "La questione del confine orientale e la memoria delle foibe",
                "L'influenza sul nazionalismo italiano",
                "Il dibattito storiografico",
                "La tutela delle minoranze linguistiche",
                "Le commemorazioni e la memoria storica"
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
        </motion.section>
      </div>
    </div>
  );
};

export default Revanchism; 