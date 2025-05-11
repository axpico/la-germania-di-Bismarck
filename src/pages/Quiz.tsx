import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaQuestionCircle, FaCheck, FaTimes } from 'react-icons/fa';

const Quiz: React.FC = () => {
  const questions = [
    {
      question: "In quale anno fu proclamato l'Impero Tedesco?",
      options: ["1866", "1871", "1878", "1890"],
      correct: 1
    },
    {
      question: "Quale fu la prima riforma sociale introdotta da Bismarck?",
      options: [
        "Assicurazione contro gli infortuni",
        "Assicurazione contro le malattie",
        "Pensione di vecchiaia",
        "Assicurazione contro la disoccupazione"
      ],
      correct: 1
    },
    {
      question: "Quale fu il principale obiettivo della Kulturkampf?",
      options: [
        "Limitare l'influenza della Chiesa Cattolica",
        "Combattere il socialismo",
        "Promuovere l'industrializzazione",
        "Espandere le colonie"
      ],
      correct: 0
    },
    {
      question: "Quale alleanza formò Bismarck nel 1882?",
      options: [
        "Lega dei Tre Imperatori",
        "Triplice Alleanza",
        "Duplice Alleanza",
        "Alleanza Balcanica"
      ],
      correct: 1
    },
    {
      question: "In quale città si tenne il Congresso del 1878?",
      options: ["Parigi", "Vienna", "Berlino", "Roma"],
      correct: 2
    },
    {
      question: "Quale fu l'ultimo Kaiser sotto cui servì Bismarck?",
      options: [
        "Guglielmo I",
        "Federico III",
        "Guglielmo II",
        "Federico Guglielmo IV"
      ],
      correct: 2
    },
    {
      question: "Quale territorio fu annesso alla Germania dopo la guerra franco-prussiana?",
      options: [
        "Alsazia-Lorena",
        "Schleswig-Holstein",
        "Boemia",
        "Lombardia"
      ],
      correct: 0
    },
    {
      question: "Quale partito politico emerse come principale opposizione a Bismarck?",
      options: [
        "Partito di Centro Cattolico",
        "Partito Socialdemocratico",
        "Partito Nazionale Liberale",
        "Partito Conservatore"
      ],
      correct: 1
    },
    {
      question: "Quale fu l'anno della guerra austro-prussiana?",
      options: ["1864", "1866", "1870", "1871"],
      correct: 1
    },
    {
      question: "Quale fu l'anno della guerra franco-prussiana?",
      options: ["1866", "1870", "1871", "1878"],
      correct: 1
    },
    {
      question: "Quale fu l'anno della Kulturkampf?",
      options: ["1871", "1872", "1873", "1874"],
      correct: 2
    },
    {
      question: "Quale fu l'anno della Triplice Alleanza?",
      options: ["1879", "1880", "1881", "1882"],
      correct: 3
    },
    {
      question: "Quale fu l'anno della morte di Bismarck?",
      options: ["1890", "1895", "1898", "1900"],
      correct: 2
    },
    {
      question: "Quale fu l'anno della proclamazione dell'Impero Tedesco?",
      options: ["1866", "1870", "1871", "1878"],
      correct: 2
    },
    {
      question: "Quale fu l'anno della Kulturkampf?",
      options: ["1871", "1872", "1873", "1874"],
      correct: 2
    },
    {
      question: "Quale fu l'anno della Triplice Alleanza?",
      options: ["1879", "1880", "1881", "1882"],
      correct: 3
    },
    {
      question: "Quale fu l'anno della morte di Bismarck?",
      options: ["1890", "1895", "1898", "1900"],
      correct: 2
    },
    {
      question: "Quale fu l'anno della proclamazione dell'Impero Tedesco?",
      options: ["1866", "1870", "1871", "1878"],
      correct: 2
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] bg-prussian-blue overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-prussian-blue/80 to-prussian-blue" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-ivory"
          >
            <h1 className="text-4xl md:text-6xl font-playfair mb-4 text-ivory">Quiz Storico</h1>
            <p className="text-xl md:text-2xl font-crimson italic text-ivory">Metti alla prova la tua conoscenza dell'era di Bismarck</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Quiz Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {!showScore ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-parchment p-8 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <FaQuestionCircle className="text-2xl text-imperial-gold mr-2" />
                  <span className="text-warm-gray">Domanda {currentQuestion + 1} di {questions.length}</span>
                </div>
                <div className="text-prussian-blue font-bold">
                  Punteggio: {score}
                </div>
              </div>

              <h2 className="text-2xl font-playfair text-prussian-blue mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                    disabled={showFeedback}
                    className={`w-full p-4 text-left rounded-lg transition-all ${
                      selectedAnswer === index
                        ? index === questions[currentQuestion].correct
                          ? 'bg-green-100 border-green-500'
                          : 'bg-red-100 border-red-500'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                    } border-2`}
                  >
                    <div className="flex items-center">
                      {showFeedback && selectedAnswer === index && (
                        <span className="mr-2">
                          {index === questions[currentQuestion].correct ? (
                            <FaCheck className="text-green-500" />
                          ) : (
                            <FaTimes className="text-red-500" />
                          )}
                        </span>
                      )}
                      {option}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-parchment p-8 rounded-lg shadow-lg text-center"
            >
              <FaTrophy className="text-6xl text-imperial-gold mx-auto mb-6" />
              <h2 className="text-3xl font-playfair text-prussian-blue mb-4">
                Quiz Completato!
              </h2>
              <p className="text-xl text-warm-gray mb-8">
                Il tuo punteggio: {score} su {questions.length}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetQuiz}
                className="bg-prussian-blue text-ivory px-8 py-3 rounded-lg font-bold hover:bg-prussian-blue/90 transition-colors"
              >
                Riprova
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz; 