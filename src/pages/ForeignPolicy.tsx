import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBalanceScale, FaHandshake, FaMapMarkedAlt, FaShieldAlt, FaChessKnight, FaGlobeEurope, FaChartLine, FaBook, FaLandmark, FaFlag, FaShip } from 'react-icons/fa';

const ForeignPolicy: React.FC = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);

  const policies = [
    {
      title: "Sistema di Alleanze",
      icon: FaHandshake,
      description: "La rete di alleanze per mantenere l'equilibrio europeo.",
      details: "Bismarck creò un complesso sistema di alleanze per isolare la Francia e mantenere la pace in Europa. La Lega dei Tre Imperatori (1873) unì Germania, Austria-Ungheria e Russia. Il Trattato di Duplice Alleanza (1879) con l'Austria-Ungheria e la Triplice Alleanza (1882) con Italia e Austria-Ungheria formarono il nucleo della sua diplomazia. Queste alleanze furono progettate per prevenire una guerra su due fronti e mantenere la Germania al centro del sistema europeo.",
      timeline: [
        { year: "1873", event: "Lega dei Tre Imperatori" },
        { year: "1879", event: "Trattato di Duplice Alleanza con l'Austria-Ungheria" },
        { year: "1882", event: "Triplice Alleanza con Italia e Austria-Ungheria" },
        { year: "1887", event: "Trattato di Riassicurazione con la Russia" }
      ]
    },
    {
      title: "Isolamento della Francia",
      icon: FaShieldAlt,
      description: "La strategia per contenere la potenza francese.",
      details: "Dopo la guerra franco-prussiana, Bismarck lavorò per isolare diplomaticamente la Francia. Attraverso il Congresso di Berlino (1878) e varie alleanze, impedì alla Francia di trovare alleati in Europa. La sua politica di 'saturazione' mirava a mantenere la Francia debole ma non umiliata, prevenendo così il revanscismo francese mentre la Germania consolidava la sua posizione di potenza continentale.",
      timeline: [
        { year: "1871", event: "Fine della guerra franco-prussiana" },
        { year: "1875", event: "Crisi di guerra in vista" },
        { year: "1878", event: "Congresso di Berlino" },
        { year: "1882", event: "Triplice Alleanza per isolare la Francia" }
      ]
    },
    {
      title: "Politica Coloniale",
      icon: FaMapMarkedAlt,
      description: "L'espansione dell'influenza tedesca oltre l'Europa.",
      details: "Sebbene inizialmente scettico, Bismarck fu coinvolto nella corsa alle colonie per ragioni politiche interne. La Germania acquisì territori in Africa (Togo, Camerun, Africa Sud-Occidentale, Africa Orientale Tedesca) e nel Pacifico. Questa espansione coloniale, sebbene limitata rispetto ad altre potenze, servì a soddisfare le aspirazioni nazionaliste e a dimostrare lo status di grande potenza della Germania.",
      timeline: [
        { year: "1884", event: "Conferenza di Berlino sul Congo" },
        { year: "1884", event: "Acquisizione di Togo e Camerun" },
        { year: "1885", event: "Africa Orientale Tedesca" },
        { year: "1890", event: "Trattato di Helgoland-Zanzibar" }
      ]
    },
    {
      title: "Congresso di Berlino",
      icon: FaChessKnight,
      description: "La mediazione nella crisi balcanica.",
      details: "Nel 1878, Bismarck ospitò il Congresso di Berlino per risolvere la crisi balcanica. Come 'onesto mediatore', riuscì a prevenire una guerra tra le grandi potenze, ridisegnando i confini balcanici e mantenendo l'equilibrio di potere. Questo congresso dimostrò la crescente influenza diplomatica della Germania e la capacità di Bismarck di mediare tra potenze rivali.",
      timeline: [
        { year: "1877", event: "Guerra russo-turca" },
        { year: "1878", event: "Trattato di San Stefano" },
        { year: "1878", event: "Congresso di Berlino" },
        { year: "1878", event: "Trattato di Berlino" }
      ]
    },
    {
      title: "Relazioni con la Russia",
      icon: FaGlobeEurope,
      description: "Il delicato equilibrio con l'Impero zarista.",
      details: "Bismarck mantenne relazioni complesse con la Russia, alternando tra la Lega dei Tre Imperatori e il Trattato di Riassicurazione (1887). Cercò di prevenire un'alleanza franco-russa che avrebbe minacciato la Germania su due fronti. La sua diplomazia bilanciò le tensioni tra Russia e Austria-Ungheria nei Balcani, mantenendo la Germania come mediatore neutrale.",
      timeline: [
        { year: "1873", event: "Lega dei Tre Imperatori" },
        { year: "1881", event: "Rinnovo della Lega dei Tre Imperatori" },
        { year: "1887", event: "Trattato di Riassicurazione" },
        { year: "1890", event: "Fine del Trattato di Riassicurazione" }
      ]
    },
    {
      title: "Politica di Potenza",
      icon: FaBalanceScale,
      description: "L'equilibrio tra diplomazia e forza militare.",
      details: "La politica estera di Bismarck combinò diplomazia abile e deterrenza militare. Mantenne un esercito forte come garanzia di sicurezza, ma preferì risolvere le crisi attraverso la diplomazia. La sua Realpolitik bilanciò gli interessi nazionali con la stabilità europea, evitando guerre maggiori durante il suo cancellierato.",
      timeline: [
        { year: "1871", event: "Unificazione tedesca" },
        { year: "1875", event: "Crisi di guerra in vista" },
        { year: "1887", event: "Crisi bulgara" },
        { year: "1890", event: "Dimissioni di Bismarck" }
      ]
    }
  ];

  const statistics = [
    {
      title: "Anni di Pace",
      icon: FaFlag,
      value: "19",
      description: "Anni di pace mantenuta in Europa durante il cancellierato"
    },
    {
      title: "Trattati",
      icon: FaHandshake,
      value: "12",
      description: "Trattati diplomatici principali negoziati"
    },
    {
      title: "Colonie",
      icon: FaShip,
      value: "4",
      description: "Principali colonie africane acquisite"
    },
    {
      title: "Alleanze",
      icon: FaChartLine,
      value: "3",
      description: "Principali alleanze strategiche create"
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] bg-prussian-blue overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/congress-berlin.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-prussian-blue/80 to-prussian-blue" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-ivory"
          >
            <h1 className="text-4xl md:text-6xl font-playfair mb-4 text-ivory">Politica Estera</h1>
            <p className="text-xl md:text-2xl font-crimson italic text-ivory">L'architetto dell'equilibrio europeo</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Statistics Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-parchment p-6 rounded-lg shadow-lg border border-warm-gray/20"
              >
                <stat.icon className="text-4xl text-imperial-gold mb-4" />
                <h3 className="text-xl font-playfair text-prussian-blue mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold text-warm-gray mb-2">{stat.value}</p>
                <p className="text-warm-gray/80">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Introduction */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">La Visione Diplomatica</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose prose-lg">
              <p className="text-warm-gray">
                La politica estera di Bismarck fu caratterizzata da un approccio pragmatico e realista, 
                mirato a mantenere la pace in Europa e a proteggere gli interessi della Germania. Dopo 
                l'unificazione, il suo obiettivo principale era consolidare la posizione della Germania 
                come potenza continentale senza provocare una grande guerra.
              </p>
              <p className="text-warm-gray">
                Attraverso un complesso sistema di alleanze e una diplomazia abile, Bismarck riuscì a 
                mantenere l'equilibrio di potere in Europa per quasi due decenni. La sua strategia di 
                'saturazione' e 'equilibrio' prevenne la formazione di coalizioni anti-tedesche e mantenne 
                la Germania al centro del sistema internazionale.
              </p>
              <p className="text-warm-gray">
                La sua Realpolitik combinava interessi nazionali con considerazioni strategiche, 
                dimostrando una straordinaria capacità di navigare tra le complesse relazioni tra le 
                potenze europee. Questo approccio, sebbene talvolta cinico, garantì un periodo di 
                relativa stabilità in Europa dopo i tumultuosi anni dell'unificazione tedesca.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-imperial-gold/10 transform -rotate-3" />
              <img 
                src="/images/bismarck-diplomat.jpg" 
                alt="Bismarck come diplomatico" 
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Key Policies */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">Le Strategie Diplomatiche</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:bg-parchment/50 cursor-pointer"
                onClick={() => setSelectedPolicy(selectedPolicy === policy.title ? null : policy.title)}
              >
                <policy.icon className="text-4xl text-imperial-gold mb-4" />
                <h3 className="text-xl font-playfair mb-2">{policy.title}</h3>
                <p className="text-warm-gray mb-4">{policy.description}</p>
                <AnimatePresence>
                  {selectedPolicy === policy.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-warm-gray/80 text-sm mb-4">{policy.details}</p>
                      <div className="border-t border-warm-gray/20 pt-4">
                        <h4 className="text-sm font-semibold text-prussian-blue mb-2">Timeline</h4>
                        <ul className="space-y-2">
                          {policy.timeline.map((item) => (
                            <li key={item.year} className="text-sm text-warm-gray/80">
                              <span className="font-semibold">{item.year}:</span> {item.event}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">L'Impatto Internazionale</h2>
          <div className="bg-parchment p-8 rounded-lg border border-warm-gray/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-playfair text-prussian-blue mb-4">Successi</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Mantenimento della pace in Europa per quasi due decenni</li>
                  <li>• Isolamento diplomatico della Francia</li>
                  <li>• Creazione di un sistema di alleanze stabile</li>
                  <li>• Prevenzione di una guerra su due fronti</li>
                  <li>• Consolidamento della posizione della Germania come potenza continentale</li>
                  <li>• Mediazione efficace nelle crisi internazionali</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-playfair text-prussian-blue mb-4">Sfide</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Tensioni crescenti con la Russia</li>
                  <li>• Complessità del sistema di alleanze</li>
                  <li>• Pressioni per l'espansione coloniale</li>
                  <li>• Rivalità con la Gran Bretagna</li>
                  <li>• Instabilità nei Balcani</li>
                  <li>• Difficoltà nel mantenere l'equilibrio di potere</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Legacy */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">L'Eredità Diplomatica</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-warm-gray">
              La politica estera di Bismarck ha lasciato un'impronta duratura sulla diplomazia europea. 
              Il suo sistema di alleanze e la sua Realpolitik influenzarono profondamente le relazioni 
              internazionali del XX secolo. La sua capacità di mantenere l'equilibrio di potere attraverso 
              una complessa rete di alleanze e trattati divenne un modello per la diplomazia moderna.
            </p>
            <p className="text-warm-gray">
              Tuttavia, la complessità del suo sistema di alleanze e la sua dipendenza dalla sua 
              straordinaria abilità diplomatica resero il sistema fragile dopo la sua partenza. 
              La sua eredità dimostra sia i vantaggi di una diplomazia pragmatica e realista, sia 
              i rischi di un sistema internazionale troppo dipendente dalla personalità di un singolo 
              statista.
            </p>
            <p className="text-warm-gray">
              La sua visione di un'Europa stabile basata sull'equilibrio di potere e sulla diplomazia 
              multilaterale continua a influenzare il pensiero strategico contemporaneo. Tuttavia, 
              il suo approccio autoritario e la sua diffidenza verso le istituzioni internazionali 
              rappresentano anche un monito sulla necessità di bilanciare interessi nazionali e 
              cooperazione internazionale.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ForeignPolicy; 