import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaCheck, FaTimes, FaTrophy, FaHistory, FaBook, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  // Domande su Bismarck e la sua politica
  {
    id: 1,
    question: "Quale fu il principale obiettivo della politica estera di Bismarck?",
    options: [
      "L'espansione coloniale",
      "Il mantenimento dell'equilibrio europeo",
      "La creazione di un impero mondiale",
      "L'isolamento della Russia"
    ],
    correctAnswer: 1,
    explanation: "Bismarck mirava principalmente a mantenere l'equilibrio europeo e prevenire una guerra su due fronti."
  },
  {
    id: 2,
    question: "Quale fu la principale riforma sociale introdotta da Bismarck?",
    options: [
      "L'istruzione obbligatoria",
      "L'assicurazione contro gli infortuni",
      "Il suffragio universale",
      "La libertà di stampa"
    ],
    correctAnswer: 1,
    explanation: "Bismarck introdusse l'assicurazione contro gli infortuni come parte del suo programma di welfare state."
  },
  {
    id: 3,
    question: "Quale fu il risultato della guerra franco-prussiana?",
    options: [
      "La vittoria francese",
      "La proclamazione dell'Impero tedesco",
      "Un trattato di pace senza annessioni",
      "La divisione della Germania"
    ],
    correctAnswer: 1,
    explanation: "La guerra franco-prussiana portò alla proclamazione dell'Impero tedesco nella Sala degli Specchi di Versailles."
  },
  
  // Domande sulla politica interna
  {
    id: 4,
    question: "Quale fu la principale sfida interna che Bismarck dovette affrontare?",
    options: [
      "La questione religiosa",
      "Il movimento operaio",
      "La crisi economica",
      "La corruzione politica"
    ],
    correctAnswer: 1,
    explanation: "Bismarck dovette affrontare la crescita del movimento operaio e del socialismo, che contrastò con le leggi anti-socialiste."
  },
  {
    id: 5,
    question: "Quale fu l'obiettivo principale della Kulturkampf?",
    options: [
      "Limitare l'influenza della Chiesa Cattolica",
      "Combattere il socialismo",
      "Promuovere l'industrializzazione",
      "Espandere le colonie"
    ],
    correctAnswer: 0,
    explanation: "La Kulturkampf (lotta culturale) fu una campagna di Bismarck per limitare l'influenza della Chiesa Cattolica in Germania."
  },
  
  // Domande sulla politica estera
  {
    id: 6,
    question: "Quale fu il sistema di alleanze creato da Bismarck?",
    options: [
      "La Triplice Intesa",
      "La Triplice Alleanza",
      "L'Alleanza Franco-Russa",
      "La Lega dei Tre Imperatori"
    ],
    correctAnswer: 1,
    explanation: "Bismarck creò la Triplice Alleanza tra Germania, Austria-Ungheria e Italia per mantenere l'equilibrio europeo."
  },
  {
    id: 7,
    question: "Quale fu la politica di Bismarck verso le colonie?",
    options: [
      "Promosse attivamente l'espansione coloniale",
      "Fu inizialmente contrario all'espansione coloniale",
      "Non si interessò mai alle colonie",
      "Sostenne solo le colonie in Africa"
    ],
    correctAnswer: 1,
    explanation: "Bismarck fu inizialmente contrario all'espansione coloniale, temendo che potesse complicare le relazioni europee."
  },
  
  // Domande sull'Impero Tedesco
  {
    id: 8,
    question: "In quale anno fu proclamato l'Impero Tedesco?",
    options: [
      "1866",
      "1871",
      "1878",
      "1890"
    ],
    correctAnswer: 1,
    explanation: "L'Impero Tedesco fu proclamato il 18 gennaio 1871 nella Sala degli Specchi di Versailles."
  },
  
  // Domande sul Congresso di Berlino
  {
    id: 9,
    question: "Quale fu il Congresso di Berlino del 1878?",
    options: [
      "Un incontro per risolvere la questione balcanica",
      "Una conferenza sul commercio internazionale",
      "Un summit sulla questione coloniale",
      "Un congresso sulla riforma sociale"
    ],
    correctAnswer: 0,
    explanation: "Il Congresso di Berlino del 1878 fu convocato da Bismarck per risolvere la questione balcanica e rivedere il Trattato di Santo Stefano."
  },
  
  // Domande sul sistema politico
  {
    id: 10,
    question: "Quale fu il sistema elettorale introdotto da Bismarck?",
    options: [
      "Suffragio universale maschile",
      "Suffragio censitario",
      "Suffragio per classi",
      "Suffragio indiretto"
    ],
    correctAnswer: 0,
    explanation: "Bismarck introdusse il suffragio universale maschile per il Reichstag, sebbene con poteri limitati."
  },
  
  // Domande sulle conseguenze della caduta di Bismarck
  {
    id: 11,
    question: "Quale fu la principale conseguenza della caduta di Bismarck?",
    options: [
      "La fine dell'Impero Tedesco",
      "Un cambio nella politica estera tedesca",
      "La rivoluzione tedesca",
      "La perdita delle colonie"
    ],
    correctAnswer: 1,
    explanation: "La caduta di Bismarck portò a un significativo cambio nella politica estera tedesca, abbandonando il suo sistema di alleanze."
  },
  
  // Nuove domande sulla politica interna
  {
    id: 12,
    question: "Quale fu l'obiettivo delle leggi anti-socialiste di Bismarck?",
    options: [
      "Limitare l'influenza del movimento operaio",
      "Promuovere i sindacati",
      "Rafforzare i partiti di sinistra",
      "Aumentare i salari degli operai"
    ],
    correctAnswer: 0,
    explanation: "Le leggi anti-socialiste miravano a limitare l'influenza del movimento operaio e del Partito Socialdemocratico."
  },
  
  // Domande sul revanscismo
  {
    id: 13,
    question: "Cosa si intendeva con il termine 'terre irredente' nel contesto dell'irredentismo italiano?",
    options: [
      "Territori italiani occupati dalla Francia",
      "Territori a maggioranza italiana sotto il dominio austriaco",
      "Colonie italiane in Africa",
      "Regioni appena annesse al Regno d'Italia"
    ],
    correctAnswer: 1,
    explanation: "Le 'terre irredente' erano territori abitati in maggioranza da popolazioni italofone ma che rimanevano sotto il dominio austriaco dopo l'Unità d'Italia, come il Trentino-Alto Adige, la Venezia Giulia e l'Istria."
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
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

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-ivory/95 to-ivory/90">
      {/* Hero Section */}
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] overflow-hidden perspective-1000"
      >
        <motion.div 
          style={{ y, opacity, scale }}
          className="absolute inset-0 bg-[url('/images/bismarck-quiz.jpg')] bg-cover bg-center"
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
              Quiz
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-crimson italic text-ivory/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Metti alla prova le tue conoscenze sull'era di Bismarck
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Quiz Content */}
      <div className="container mx-auto px-4 py-24">
        <AnimatePresence mode="wait">
          {!quizCompleted ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="backdrop-blur-md bg-white/10 p-12 rounded-[2rem] border border-white/20 shadow-2xl"
            >
              <div className="mb-8">
                <motion.h2 
                  className="text-4xl font-playfair mb-4 text-prussian-blue bg-clip-text text-transparent bg-gradient-to-r from-prussian-blue via-prussian-blue/80 to-prussian-blue"
                  animate={{
                    backgroundPosition: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  Domanda {currentQuestion + 1} di {questions.length}
                </motion.h2>
                <motion.p 
                  className="text-2xl font-crimson text-warm-gray"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {questions[currentQuestion].question}
                </motion.p>
              </div>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => !selectedAnswer && handleAnswer(index)}
                    className={`w-full p-6 text-left rounded-[1rem] backdrop-blur-md border transition-all duration-300 ${
                      selectedAnswer === null
                        ? 'bg-white/10 border-white/20 hover:bg-white/20'
                        : selectedAnswer === index
                        ? index === questions[currentQuestion].correctAnswer
                          ? 'bg-green-500/20 border-green-500/50'
                          : 'bg-red-500/20 border-red-500/50'
                        : index === questions[currentQuestion].correctAnswer
                        ? 'bg-green-500/20 border-green-500/50'
                        : 'bg-white/10 border-white/20'
                    }`}
                    disabled={selectedAnswer !== null}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl font-playfair text-prussian-blue mr-4">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-lg text-warm-gray">{option}</span>
                      {selectedAnswer === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto"
                        >
                          {index === questions[currentQuestion].correctAnswer ? (
                            <FaCheck className="text-green-500 text-2xl" />
                          ) : (
                            <FaTimes className="text-red-500 text-2xl" />
                          )}
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 rounded-[1rem] backdrop-blur-md bg-white/10 border border-white/20"
                >
                  <p className="text-warm-gray text-lg">
                    {questions[currentQuestion].explanation}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="mt-6 px-8 py-3 bg-prussian-blue text-ivory rounded-full font-playfair text-lg hover:bg-prussian-blue/90 transition-colors"
                  >
                    {currentQuestion < questions.length - 1 ? 'Prossima Domanda' : 'Vedi Risultati'}
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="backdrop-blur-md bg-white/10 p-12 rounded-[2rem] border border-white/20 shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center mb-8"
              >
                <FaTrophy className="text-6xl text-imperial-gold mx-auto mb-6" />
                <motion.h2 
                  className="text-4xl font-playfair mb-4 text-prussian-blue bg-clip-text text-transparent bg-gradient-to-r from-prussian-blue via-prussian-blue/80 to-prussian-blue"
                  animate={{
                    backgroundPosition: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  Quiz Completato!
                </motion.h2>
                <p className="text-2xl font-crimson text-warm-gray">
                  Il tuo punteggio: {score} su {questions.length}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: FaHistory, title: "Storia", text: "Approfondisci gli eventi storici" },
                  { icon: FaBook, title: "Studia", text: "Ripassa i concetti chiave" },
                  { icon: FaChartLine, title: "Progressi", text: "Migliora le tue conoscenze" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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

              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRestart}
                  className="px-8 py-3 bg-prussian-blue text-ivory rounded-full font-playfair text-lg hover:bg-prussian-blue/90 transition-colors"
                >
                  Riprova
                </motion.button>
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-imperial-gold text-prussian-blue rounded-full font-playfair text-lg hover:bg-imperial-gold/90 transition-colors"
                  >
                    Torna alla Home
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz; 