import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaLandmark, FaHandshake, FaFlag, FaChartLine, FaUsers, FaNewspaper, FaGavel, FaUniversity, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';

const Radicalism: React.FC = () => {
  const [selectedMovement, setSelectedMovement] = useState<string | null>(null);

  const movements = [
    {
      title: "Socialismo",
      icon: FaUsers,
      description: "Il movimento operaio e la nascita del socialismo tedesco.",
      details: "Il socialismo tedesco emerse come una forza significativa durante l'era di Bismarck, guidato dalla figura di August Bebel e dal Partito Socialdemocratico Tedesco (SPD). Nonostante le leggi anti-socialiste del 1878, il movimento continuò a crescere, rappresentando gli interessi della classe operaia e promuovendo riforme sociali. La sua influenza portò Bismarck a introdurre le prime leggi sul welfare state come misura preventiva contro il radicalismo.",
      timeline: [
        { year: "1863", event: "Fondazione dell'Associazione Generale dei Lavoratori Tedeschi" },
        { year: "1869", event: "Nascita del Partito Socialdemocratico dei Lavoratori" },
        { year: "1875", event: "Unificazione dei partiti socialisti" },
        { year: "1878", event: "Leggi Anti-Socialiste" },
        { year: "1890", event: "Abolizione delle Leggi Anti-Socialiste" }
      ]
    },
    {
      title: "Liberalismo Radicale",
      icon: FaFlag,
      description: "La lotta per i diritti civili e le riforme costituzionali.",
      details: "Il liberalismo radicale rappresentava la borghesia progressista che cercava riforme costituzionali e maggiore partecipazione politica. Guidato da figure come Eugen Richter, il movimento promuoveva la separazione tra Chiesa e Stato, l'istruzione laica e i diritti individuali. Sebbene inizialmente alleato di Bismarck contro i conservatori, divenne poi un'opposizione significativa alle sue politiche autoritarie.",
      timeline: [
        { year: "1861", event: "Fondazione del Partito Progressista Tedesco" },
        { year: "1866", event: "Scissione del Partito Nazionale Liberale" },
        { year: "1871", event: "Opposizione al Kulturkampf" },
        { year: "1884", event: "Formazione del Partito Liberale Tedesco" }
      ]
    },
    {
      title: "Cattolicesimo Politico",
      icon: FaLandmark,
      description: "La resistenza al Kulturkampf e la difesa dei diritti religiosi.",
      details: "Il cattolicesimo politico emerse come reazione al Kulturkampf di Bismarck. Il Partito di Centro (Zentrum), guidato da Ludwig Windthorst, divenne un'importante forza di opposizione, difendendo i diritti della Chiesa cattolica e promuovendo una visione federalista della Germania. La sua resistenza pacifica ma determinata portò alla fine del Kulturkampf e all'emergere di un cattolicesimo politico moderno.",
      timeline: [
        { year: "1870", event: "Proclamazione dell'Infallibilità Papale" },
        { year: "1871", event: "Inizio del Kulturkampf" },
        { year: "1872", event: "Leggi contro i Gesuiti" },
        { year: "1878", event: "Fine del Kulturkampf" }
      ]
    },
    {
      title: "Nazionalismo",
      icon: FaShieldAlt,
      description: "L'emergere del nazionalismo tedesco e le sue diverse correnti.",
      details: "Il nazionalismo tedesco si sviluppò in diverse correnti durante l'era di Bismarck. Mentre il nazionalismo ufficiale celebrava l'unificazione e la potenza tedesca, emersero anche forme più radicali che promuovevano l'espansione territoriale e la superiorità culturale tedesca. Queste correnti influenzarono profondamente la politica estera e la società tedesca, preparando il terreno per sviluppi futuri.",
      timeline: [
        { year: "1871", event: "Proclamazione dell'Impero Tedesco" },
        { year: "1879", event: "Nascita della Lega Pangermanica" },
        { year: "1884", event: "Inizio della politica coloniale" },
        { year: "1890", event: "Crisi del sistema bismarckiano" }
      ]
    },
    {
      title: "Movimento Femminista",
      icon: FaUsers,
      description: "Le prime lotte per i diritti delle donne in Germania.",
      details: "Il movimento femminista tedesco emerse durante l'era di Bismarck, guidato da figure come Louise Otto-Peters e Hedwig Dohm. Le femministe lottavano per l'accesso all'istruzione superiore, i diritti politici e l'uguaglianza sociale. Nonostante l'opposizione conservatrice, il movimento riuscì a ottenere importanti conquiste, come l'accesso delle donne all'università e la creazione di organizzazioni femminili.",
      timeline: [
        { year: "1865", event: "Fondazione dell'Associazione Generale delle Donne Tedesche" },
        { year: "1870", event: "Prima petizione per il suffragio femminile" },
        { year: "1894", event: "Fondazione della Federazione delle Associazioni Femminili Tedesche" }
      ]
    },
    {
      title: "Movimento Operaio",
      icon: FaUsers,
      description: "La lotta per i diritti dei lavoratori e le riforme sociali.",
      details: "Il movimento operaio tedesco si sviluppò rapidamente durante l'industrializzazione, organizzando sindacati e promuovendo riforme sociali. Nonostante la repressione, i lavoratori riuscirono a ottenere importanti conquiste, come la riduzione dell'orario di lavoro e migliori condizioni di lavoro. Il movimento influenzò profondamente la politica sociale di Bismarck, portando all'introduzione delle prime leggi sul welfare state.",
      timeline: [
        { year: "1863", event: "Fondazione del primo sindacato tedesco" },
        { year: "1878", event: "Leggi Anti-Socialiste" },
        { year: "1883", event: "Legge sull'assicurazione contro le malattie" },
        { year: "1884", event: "Legge sull'assicurazione contro gli infortuni" }
      ]
    }
  ];

  const statistics = [
    {
      title: "Partiti",
      icon: FaFlag,
      value: "6",
      description: "Principali movimenti politici radicali"
    },
    {
      title: "Leggi",
      icon: FaGavel,
      value: "12",
      description: "Leggi repressive approvate"
    },
    {
      title: "Riforme",
      icon: FaChartLine,
      value: "8",
      description: "Principali riforme sociali ottenute"
    },
    {
      title: "Organizzazioni",
      icon: FaUsers,
      value: "15",
      description: "Organizzazioni politiche e sociali create"
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
        <div className="absolute inset-0 bg-[url('/images/workers-march.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-prussian-blue/80 to-prussian-blue" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-ivory"
          >
            <h1 className="text-4xl md:text-6xl font-playfair mb-4 text-ivory">Radicalismo</h1>
            <p className="text-xl md:text-2xl font-crimson italic text-ivory">I movimenti di opposizione nell'era di Bismarck</p>
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
          <h2 className="section-title text-warm-gray">Il Contesto Storico</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose prose-lg">
              <p className="text-warm-gray">
                L'era di Bismarck fu caratterizzata da profondi cambiamenti sociali e politici che 
                portarono all'emergere di vari movimenti radicali. L'industrializzazione, l'urbanizzazione 
                e le trasformazioni sociali crearono nuove tensioni e aspirazioni nella società tedesca.
              </p>
              <p className="text-warm-gray">
                Questi movimenti rappresentavano diverse correnti di pensiero e interessi sociali, 
                dalla classe operaia alla borghesia progressista, dai cattolici ai nazionalisti. 
                La loro interazione con le politiche di Bismarck plasmò profondamente lo sviluppo 
                della Germania moderna.
              </p>
              <p className="text-warm-gray">
                La risposta di Bismarck a questi movimenti fu spesso repressiva, ma anche pragmatica. 
                Le sue riforme sociali, sebbene motivate dalla volontà di prevenire il radicalismo, 
                contribuirono significativamente allo sviluppo del moderno stato sociale tedesco.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-imperial-gold/10 transform -rotate-3" />
              <img 
                src="/images/radical-meeting.jpg" 
                alt="Riunione di radicali" 
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Key Movements */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">I Movimenti Radicali</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movements.map((movement, index) => (
              <motion.div
                key={movement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:bg-parchment/50 cursor-pointer"
                onClick={() => setSelectedMovement(selectedMovement === movement.title ? null : movement.title)}
              >
                <movement.icon className="text-4xl text-imperial-gold mb-4" />
                <h3 className="text-xl font-playfair mb-2">{movement.title}</h3>
                <p className="text-warm-gray mb-4">{movement.description}</p>
                <AnimatePresence>
                  {selectedMovement === movement.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-warm-gray/80 text-sm mb-4">{movement.details}</p>
                      <div className="border-t border-warm-gray/20 pt-4">
                        <h4 className="text-sm font-semibold text-prussian-blue mb-2">Timeline</h4>
                        <ul className="space-y-2">
                          {movement.timeline.map((item) => (
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
          <h2 className="section-title text-warm-gray">L'Impatto Sociale</h2>
          <div className="bg-parchment p-8 rounded-lg border border-warm-gray/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-playfair text-prussian-blue mb-4">Conquiste</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Introduzione delle prime leggi sul welfare state</li>
                  <li>• Maggiore partecipazione politica</li>
                  <li>• Riforme sociali e lavorative</li>
                  <li>• Sviluppo del movimento operaio</li>
                  <li>• Emancipazione femminile</li>
                  <li>• Pluralismo politico</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-playfair text-prussian-blue mb-4">Sfide</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Repressione governativa</li>
                  <li>• Divisioni ideologiche</li>
                  <li>• Conflitti sociali</li>
                  <li>• Tensioni religiose</li>
                  <li>• Nazionalismo estremo</li>
                  <li>• Disuguaglianze persistenti</li>
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
          <h2 className="section-title text-warm-gray">L'Eredità del Radicalismo</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-warm-gray">
              I movimenti radicali dell'era di Bismarck hanno lasciato un'impronta duratura sulla 
              società tedesca. Le loro lotte per i diritti sociali, politici ed economici hanno 
              contribuito a plasmare il moderno stato sociale tedesco e la sua tradizione di 
              partecipazione democratica.
            </p>
            <p className="text-warm-gray">
              L'interazione tra questi movimenti e le politiche di Bismarck ha creato un modello 
              unico di sviluppo sociale e politico, caratterizzato da un equilibrio tra riforme 
              dall'alto e pressioni dal basso. Questo modello ha influenzato profondamente lo 
              sviluppo della Germania moderna e continua a ispirare movimenti sociali e politici 
              contemporanei.
            </p>
            <p className="text-warm-gray">
              Tuttavia, alcune correnti radicali, in particolare il nazionalismo estremo, hanno 
              anche contribuito a sviluppi problematici nella storia tedesca successiva. Questo 
              aspetto dell'eredità del radicalismo serve come monito sulla necessità di bilanciare 
              il cambiamento sociale con la stabilità politica e la coesione nazionale.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Radicalism; 