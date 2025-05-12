import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHistory, FaBook, FaUniversity, FaUsers, FaFlag } from 'react-icons/fa';

const Home: React.FC = () => {
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
      description: 'La diplomazia, le alleanze europee e la questione balcanica',
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
    <div className="min-h-screen bg-gradient-to-br from-ivory via-ivory/95 to-ivory/90 overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[100vh] overflow-hidden perspective-1000"
      >
        <motion.div 
          style={{ y, opacity, scale }}
          className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-prussian-blue/95 via-prussian-blue/85 to-prussian-blue/75" />
        
        {/* Interactive 3D background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
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
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl backdrop-blur-md bg-white/10 p-16 rounded-[2rem] border border-white/20 shadow-2xl transform-gpu"
            style={{
              rotateX: useTransform(springY, [0, 1000], [-5, 5]),
              rotateY: useTransform(springX, [0, 1000], [-5, 5]),
            }}
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-playfair mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-ivory via-imperial-gold to-ivory"
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              La Germania di Bismarck
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-crimson italic text-ivory/90 mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Un viaggio attraverso l'era che ha plasmato la Germania moderna
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/bismarck"
                className="inline-block bg-gradient-to-r from-imperial-gold via-imperial-gold/90 to-imperial-gold text-prussian-blue px-12 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Inizia l'Esplorazione</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>
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
          className="mb-24 text-center"
        >
          <motion.div 
            className="backdrop-blur-md bg-white/10 p-16 rounded-[2rem] border border-white/20 shadow-2xl transform-gpu"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h2 
              className="text-5xl font-playfair mb-8 bg-clip-text text-transparent bg-gradient-to-r from-prussian-blue via-prussian-blue/80 to-prussian-blue"
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              L'Era di Bismarck
            </motion.h2>
            <p className="text-xl text-warm-gray max-w-4xl mx-auto leading-relaxed">
              Esplora il periodo cruciale della storia tedesca attraverso le politiche, 
              le riforme e l'eredità di Otto von Bismarck, il Cancelliere di Ferro che 
              ha plasmato il destino della Germania moderna.
            </p>
          </motion.div>
        </motion.section>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index >= 3 ? 'lg:col-span-1' : ''}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link to={section.path} className="block h-full">
                <motion.div 
                  className="relative h-full rounded-[2rem] overflow-hidden group backdrop-blur-md bg-white/10 border border-white/20 transform-gpu transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,41,112,0.2)]"
                  whileHover={{ rotateX: 5, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-prussian-blue/90 to-prussian-blue/70 group-hover:from-prussian-blue/80 group-hover:to-prussian-blue/60 transition-all duration-500" />
                  <div className="relative p-12 h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="mb-8"
                      >
                        <section.icon className="text-6xl text-imperial-gold" />
                      </motion.div>
                      <h3 className="text-3xl font-playfair text-ivory mb-4">
                        {section.title}
                      </h3>
                      <p className="text-ivory/90 text-lg leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <motion.div 
            className="backdrop-blur-md bg-white/10 p-16 rounded-[2rem] border border-white/20 shadow-2xl transform-gpu"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h2 
              className="text-4xl font-playfair mb-8 bg-clip-text text-transparent bg-gradient-to-r from-prussian-blue via-prussian-blue/80 to-prussian-blue"
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Metti alla Prova la Tua Conoscenza
            </motion.h2>
            <p className="text-warm-gray text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Partecipa al nostro quiz interattivo e scopri quanto conosci 
              l'era di Bismarck e il suo impatto sulla storia europea.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/quiz"
                className="inline-block bg-gradient-to-r from-prussian-blue via-prussian-blue/90 to-prussian-blue text-ivory px-12 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(0,41,112,0.3)] transition-all duration-300 shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Inizia il Quiz</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home; 