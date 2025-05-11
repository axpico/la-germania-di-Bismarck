import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBalanceScale, FaGavel, FaChurch, FaIndustry, FaSchool, FaUsers, FaChartLine, FaBook, FaLandmark, FaHandshake } from 'react-icons/fa';

const InternalPolitics: React.FC = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);

  const policies = [
    {
      title: "Kulturkampf",
      icon: FaChurch,
      description: "La lotta contro l'influenza della Chiesa Cattolica nella politica tedesca.",
      details: "Bismarck intraprese una serie di misure per limitare il potere della Chiesa Cattolica, temendo la sua influenza sulla minoranza polacca e sul Partito di Centro Cattolico. Le leggi di maggio del 1873 imposero il controllo statale sull'educazione e la nomina dei sacerdoti, mentre il Codice Penale del 1871 criminalizzò il discorso politico dal pulpito. Questa politica, sebbene inizialmente popolare tra i liberali, alla fine si rivelò controproducente, portando Bismarck a negoziare un compromesso con Papa Leone XIII nel 1887.",
      timeline: [
        { year: "1871", event: "Introduzione del Codice Penale che limita il potere della Chiesa" },
        { year: "1873", event: "Leggi di maggio per il controllo statale dell'educazione" },
        { year: "1875", event: "Leggi che limitano le attività degli ordini religiosi" },
        { year: "1887", event: "Compromesso con Papa Leone XIII" }
      ]
    },
    {
      title: "Leggi Anti-Socialiste",
      icon: FaUsers,
      description: "Le misure repressive contro il movimento socialista.",
      details: "Nel 1878, in seguito a due attentati contro l'Imperatore Guglielmo I, Bismarck fece approvare le leggi anti-socialiste (Sozialistengesetze). Queste leggi vietavano le organizzazioni socialiste, i loro giornali e le loro riunioni. Tuttavia, i socialdemocratici continuarono a operare clandestinamente, e il loro supporto elettorale crebbe costantemente. La legge fu rinnovata più volte fino al 1890, quando il nuovo Kaiser Guglielmo II la lasciò scadere, segnando una delle prime fratture con Bismarck.",
      timeline: [
        { year: "1878", event: "Primo attentato contro l'Imperatore" },
        { year: "1878", event: "Approvazione delle leggi anti-socialiste" },
        { year: "1880", event: "Rinnovo delle leggi con modifiche" },
        { year: "1890", event: "Scadenza definitiva delle leggi" }
      ]
    },
    {
      title: "Riforme Sociali",
      icon: FaIndustry,
      description: "Il primo sistema di welfare state moderno.",
      details: "Tra il 1883 e il 1889, Bismarck introdusse un sistema di assicurazioni sociali rivoluzionario. L'assicurazione contro le malattie (1883) copriva i lavoratori industriali, l'assicurazione contro gli infortuni (1884) era finanziata dai datori di lavoro, e l'assicurazione per l'invalidità e la vecchiaia (1889) forniva pensioni ai lavoratori. Queste riforme, ispirate sia da considerazioni umanitarie che da calcolo politico, miravano a prevenire la rivoluzione sociale e a indebolire l'appeal del socialismo. Il sistema divenne un modello per altri paesi europei.",
      timeline: [
        { year: "1883", event: "Assicurazione contro le malattie" },
        { year: "1884", event: "Assicurazione contro gli infortuni" },
        { year: "1889", event: "Assicurazione per invalidità e vecchiaia" }
      ]
    },
    {
      title: "Sistema Giudiziario",
      icon: FaGavel,
      description: "La modernizzazione del sistema legale tedesco.",
      details: "Bismarck supervisionò l'unificazione dei codici penali e civili tedeschi, creando un sistema giuridico moderno e uniforme. Il Codice Penale del 1871 e il Codice Civile del 1896 (BGB) stabilirono un quadro legale comune per l'intero Impero. Il sistema giudiziario fu reso indipendente dal potere esecutivo, con giudici nominati a vita. Questa riforma fu cruciale per la modernizzazione dello stato tedesco e per la creazione di un ambiente favorevole agli affari e all'industria.",
      timeline: [
        { year: "1871", event: "Introduzione del Codice Penale unificato" },
        { year: "1877", event: "Riforma del sistema giudiziario" },
        { year: "1896", event: "Codice Civile (BGB)" }
      ]
    },
    {
      title: "Istruzione",
      icon: FaSchool,
      description: "La riforma del sistema educativo.",
      details: "Il sistema educativo fu riformato per creare una forza lavoro qualificata e cittadini fedeli all'Impero. Le scuole elementari divennero obbligatorie e gratuite, mentre i ginnasi preparavano i futuri funzionari statali. Le università tedesche divennero centri di eccellenza nella ricerca scientifica e tecnologica. Questo sistema educativo, combinato con l'istruzione tecnica, fu fondamentale per lo sviluppo industriale della Germania e per la creazione di una classe media istruita e leale allo stato.",
      timeline: [
        { year: "1872", event: "Riforma delle scuole elementari" },
        { year: "1876", event: "Riforma dei ginnasi" },
        { year: "1880", event: "Espansione dell'istruzione tecnica" }
      ]
    },
    {
      title: "Federalismo",
      icon: FaBalanceScale,
      description: "L'equilibrio tra potere centrale e stati federati.",
      details: "La Costituzione del 1871 creò un sistema federale unico, con 25 stati mantenendo una significativa autonomia sotto la guida della Prussia. Il Bundesrat (Consiglio Federale) rappresentava gli stati, mentre il Reichstag era eletto a suffragio universale maschile. La Prussia controllava 17 dei 58 voti nel Bundesrat, garantendo la sua egemonia. Questo sistema bilanciò efficacemente le aspirazioni unitarie con le tradizioni federali tedesche, creando una struttura politica stabile che sopravvisse fino al 1918.",
      timeline: [
        { year: "1871", event: "Proclamazione dell'Impero Tedesco" },
        { year: "1871", event: "Adozione della Costituzione federale" },
        { year: "1873", event: "Riforma del Bundesrat" }
      ]
    }
  ];

  const statistics = [
    {
      title: "Crescita Industriale",
      icon: FaChartLine,
      value: "1871-1890",
      description: "La produzione industriale tedesca triplicò durante il periodo di Bismarck"
    },
    {
      title: "Istruzione",
      icon: FaBook,
      value: "90%",
      description: "Tasso di alfabetizzazione raggiunto nel 1890"
    },
    {
      title: "Assicurazioni",
      icon: FaHandshake,
      value: "13 milioni",
      description: "Lavoratori coperti dal sistema di assicurazioni sociali"
    },
    {
      title: "Stati Federati",
      icon: FaLandmark,
      value: "25",
      description: "Stati che componevano l'Impero Tedesco"
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
        <div className="absolute inset-0 bg-[url('/images/reichstag.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-prussian-blue/80 to-prussian-blue" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-ivory"
          >
            <h1 className="text-4xl md:text-6xl font-playfair mb-4 text-ivory">Politica Interna</h1>
            <p className="text-xl md:text-2xl font-crimson italic text-ivory">Le riforme e le trasformazioni</p>
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
          <h2 className="section-title text-warm-gray">La Visione di Bismarck</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose prose-lg">
              <p className="text-warm-gray">
                La politica interna di Bismarck fu caratterizzata da un approccio pragmatico e conservatore, 
                mirato a mantenere la stabilità dell'Impero e a contrastare le forze centrifughe che 
                minacciavano l'unità nazionale. Il suo obiettivo principale era creare uno stato forte e 
                centralizzato, guidato dalla Prussia, che potesse resistere sia alle pressioni interne che 
                alle minacce esterne.
              </p>
              <p className="text-warm-gray">
                Attraverso una combinazione di repressione e riforme sociali, il Cancelliere di Ferro 
                riuscì a creare un sistema politico che, pur mantenendo le strutture autoritarie, 
                introdusse elementi di modernità e progresso sociale. La sua strategia di "carota e bastone" 
                combinava misure repressive contro i nemici dello stato con riforme sociali innovative che 
                anticipavano il moderno welfare state.
              </p>
              <p className="text-warm-gray">
                La sua politica interna fu profondamente influenzata dalla Realpolitik, un approccio 
                pragmatico che privilegiava i risultati concreti rispetto alle ideologie. Questo approccio 
                gli permise di navigare abilmente tra le diverse forze politiche e sociali dell'epoca, 
                mantenendo un delicato equilibrio tra tradizione e modernizzazione.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-imperial-gold/10 transform -rotate-3" />
              <img 
                src="/images/reichstag-interior.jpg" 
                alt="Interno del Reichstag" 
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
          <h2 className="section-title text-warm-gray">Le Principali Politiche</h2>
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
          <h2 className="section-title text-warm-gray">L'Impatto Storico</h2>
          <div className="bg-parchment p-8 rounded-lg border border-warm-gray/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-playfair text-prussian-blue mb-4">Successi</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Creazione del primo sistema di welfare state moderno, che divenne un modello per l'Europa</li>
                  <li>• Unificazione del sistema giuridico tedesco, creando un quadro legale uniforme e moderno</li>
                  <li>• Modernizzazione dell'istruzione pubblica, producendo una forza lavoro altamente qualificata</li>
                  <li>• Stabilizzazione del sistema politico attraverso un federalismo equilibrato</li>
                  <li>• Sviluppo di un'economia industriale competitiva a livello mondiale</li>
                  <li>• Creazione di una burocrazia efficiente e professionale</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-playfair text-prussian-blue mb-4">Sfide</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Tensioni persistenti con la minoranza cattolica e il Partito di Centro</li>
                  <li>• Crescente opposizione socialista nonostante le leggi repressive</li>
                  <li>• Conflitti con le minoranze etniche, in particolare polacchi e alsaziani</li>
                  <li>• Resistenza al centralismo prussiano da parte degli stati meridionali</li>
                  <li>• Tensioni tra modernizzazione e conservatorismo sociale</li>
                  <li>• Conflitti con il nuovo Kaiser Guglielmo II</li>
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
          <h2 className="section-title text-warm-gray">L'Eredità delle Riforme</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-warm-gray">
              Le riforme interne di Bismarck hanno lasciato un'impronta duratura sulla società tedesca. 
              Il sistema di welfare state da lui creato divenne un modello per molti paesi europei, 
              mentre la struttura federale dell'Impero gettò le basi per la moderna Repubblica Federale Tedesca. 
              La sua visione di uno stato sociale autoritario, combinata con un'economia di mercato, 
              influenzò profondamente lo sviluppo politico ed economico della Germania nel XX secolo.
            </p>
            <p className="text-warm-gray">
              Nonostante le contraddizioni del suo approccio autoritario, le riforme sociali di Bismarck 
              rappresentano una delle più significative innovazioni politiche del XIX secolo, dimostrando 
              come il conservatorismo potesse essere compatibile con il progresso sociale. Il suo sistema 
              di assicurazioni sociali, in particolare, anticipò di decenni le riforme sociali in altri 
              paesi europei e gettò le basi per il moderno stato sociale.
            </p>
            <p className="text-warm-gray">
              La sua eredità politica continua a influenzare la Germania contemporanea, con il sistema 
              federale, il welfare state e l'approccio pragmatico alla politica che rimangono elementi 
              distintivi della democrazia tedesca. Tuttavia, il suo autoritarismo e la sua diffidenza 
              verso la democrazia parlamentare rappresentano anche un monito sulla necessità di bilanciare 
              efficienza e libertà nella governance moderna.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default InternalPolitics; 