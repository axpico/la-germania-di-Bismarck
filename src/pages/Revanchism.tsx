import React from 'react';
import { motion } from 'framer-motion';
import { FaFlag, FaBalanceScale, FaShieldAlt, FaMapMarkedAlt, FaBook, FaChartLine } from 'react-icons/fa';

const Revanchism: React.FC = () => {
  const aspects = [
    {
      title: "Origini del Revanscismo",
      icon: FaFlag,
      description: "Le radici del desiderio di vendetta francese.",
      details: "Il revanscismo francese emerse dopo la sconfitta nella guerra franco-prussiana del 1870-71. La perdita dell'Alsazia e della Lorena, unita all'umiliazione della proclamazione dell'Impero tedesco nella Sala degli Specchi di Versailles, creò un profondo risentimento in Francia. Questo sentimento di vendetta divenne un elemento centrale della politica francese per decenni."
    },
    {
      title: "Politica di Bismarck",
      icon: FaBalanceScale,
      description: "La strategia tedesca di contenimento.",
      details: "Bismarck adottò una politica di 'saturazione' verso la Francia, mirando a mantenerla isolata diplomaticamente. Attraverso un complesso sistema di alleanze, cercò di prevenire la formazione di una coalizione anti-tedesca. La sua strategia combinava deterrenza militare con diplomazia, mantenendo la Francia debole ma non umiliata."
    },
    {
      title: "Riorganizzazione Militare",
      icon: FaShieldAlt,
      description: "Il riarmo francese e la preparazione.",
      details: "La Francia intraprese un massiccio programma di riorganizzazione militare. Il servizio militare obbligatorio fu esteso, l'artiglieria modernizzata e le fortificazioni di frontiera rafforzate. Questi preparativi militari, uniti alla propaganda revanscista, crearono una costante minaccia per la pace europea."
    },
    {
      title: "Questioni Territoriali",
      icon: FaMapMarkedAlt,
      description: "Le dispute sui territori perduti.",
      details: "L'Alsazia e la Lorena divennero il simbolo del revanscismo francese. Queste regioni, ricche di risorse e strategicamente importanti, furono al centro delle rivendicazioni francesi. La questione territoriale alimentò il nazionalismo su entrambi i lati del Reno, complicando le relazioni franco-tedesche."
    },
    {
      title: "Propaganda e Cultura",
      icon: FaBook,
      description: "L'influenza culturale del revanscismo.",
      details: "Il revanscismo permeò la cultura francese dell'epoca. Letteratura, arte e media promossero il culto della 'linea blu dei Vosgi' e la memoria delle province perdute. Questa propaganda culturale mantenne vivo il sentimento revanscista tra le generazioni successive."
    },
    {
      title: "Impatto Diplomatico",
      icon: FaChartLine,
      description: "Le conseguenze sulle relazioni internazionali.",
      details: "Il revanscismo francese influenzò profondamente la diplomazia europea. La ricerca di alleati contro la Germania portò la Francia ad avvicinarsi alla Russia e alla Gran Bretagna. Questa dinamica contribuì alla formazione dei blocchi di alleanze che avrebbero caratterizzato la Prima Guerra Mondiale."
    }
  ];

  const statistics = [
    {
      title: "Anni di Tensione",
      icon: FaFlag,
      value: "43",
      description: "Dal 1871 al 1914, la Francia visse in attesa della rivincita"
    },
    {
      title: "Territori Contesi",
      icon: FaMapMarkedAlt,
      value: "2",
      description: "Alsazia e Lorena, simboli del revanscismo francese"
    },
    {
      title: "Alleanze Formate",
      icon: FaBalanceScale,
      value: "3",
      description: "Triplice Intesa, Triplice Alleanza, Alleanza Franco-Russa"
    },
    {
      title: "Propagande",
      icon: FaBook,
      value: "100+",
      description: "Opere, manifesti e articoli a sostegno della rivincita"
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
        <div className="absolute inset-0 bg-[url('/images/versailles-hall.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-prussian-blue/80 to-prussian-blue" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-ivory"
          >
            <h1 className="text-4xl md:text-6xl font-playfair mb-4 text-ivory">Revanscismo</h1>
            <p className="text-xl md:text-2xl font-crimson italic text-ivory">La Francia e il desiderio di vendetta</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">Le Radici del Conflitto</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose prose-lg">
              <p className="text-warm-gray">
                Il revanscismo francese emerse come una forza potente nella politica europea dopo la 
                guerra franco-prussiana del 1870-71. La sconfitta francese e la perdita dell'Alsazia e 
                della Lorena crearono un profondo risentimento che avrebbe influenzato le relazioni 
                internazionali per decenni.
              </p>
              <p className="text-warm-gray">
                Bismarck, consapevole della minaccia rappresentata dal revanscismo francese, sviluppò 
                una complessa strategia diplomatica per mantenere la Francia isolata. La sua politica di 
                'saturazione' e il sistema di alleanze che creò furono progettati per prevenire una 
                guerra di vendetta.
              </p>
              <p className="text-warm-gray">
                Tuttavia, il revanscismo non era solo una questione di politica estera. Divenne un 
                elemento centrale dell'identità nazionale francese, influenzando la cultura, la società 
                e le istituzioni militari. Questa ossessione per la vendetta avrebbe contribuito 
                significativamente alla destabilizzazione dell'Europa.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-imperial-gold/10 transform -rotate-3" />
              <img 
                src="/images/alsace-lorraine.jpg" 
                alt="Mappa dell'Alsazia e Lorena" 
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.section>

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

        {/* Key Aspects */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">Aspetti del Revanscismo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aspects.map((aspect, index) => (
              <motion.div
                key={aspect.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:bg-parchment/50"
              >
                <aspect.icon className="text-4xl text-imperial-gold mb-4" />
                <h3 className="text-xl font-playfair mb-2">{aspect.title}</h3>
                <p className="text-warm-gray mb-4">{aspect.description}</p>
                <p className="text-warm-gray/80 text-sm">{aspect.details}</p>
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
                <h3 className="text-xl font-playfair text-prussian-blue mb-4">Conseguenze Immediate</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Isolamento diplomatico della Francia</li>
                  <li>• Riorganizzazione militare francese</li>
                  <li>• Tensioni costanti tra Francia e Germania</li>
                  <li>• Formazione di alleanze difensive</li>
                  <li>• Corsa agli armamenti</li>
                  <li>• Propaganda nazionalista</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-playfair text-prussian-blue mb-4">Eredità a Lungo Termine</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Contributo alla Prima Guerra Mondiale</li>
                  <li>• Formazione dei blocchi di alleanze</li>
                  <li>• Sviluppo del nazionalismo estremo</li>
                  <li>• Militarizzazione della società</li>
                  <li>• Tensioni etniche nelle regioni contese</li>
                  <li>• Influenza sulla diplomazia europea</li>
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
          <h2 className="section-title text-warm-gray">L'Eredità del Revanscismo</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-warm-gray">
              Il revanscismo francese ha lasciato un'impronta profonda sulla storia europea. La sua 
              influenza si estende ben oltre il periodo immediatamente successivo alla guerra 
              franco-prussiana, contribuendo significativamente alla destabilizzazione dell'Europa e 
              alla genesi della Prima Guerra Mondiale.
            </p>
            <p className="text-warm-gray">
              La politica di Bismarck, sebbene efficace nel breve termine, non riuscì a eliminare 
              definitivamente la minaccia revanscista. Il sistema di alleanze che creò, sebbene 
              progettato per mantenere la pace, contribuì in realtà alla polarizzazione dell'Europa 
              e alla formazione di blocchi contrapposti.
            </p>
            <p className="text-warm-gray">
              L'eredità del revanscismo dimostra i pericoli del nazionalismo estremo e della politica 
              della vendetta. Le sue conseguenze continuano a influenzare la comprensione delle 
              relazioni internazionali e della diplomazia europea, offrendo lezioni importanti sulla 
              necessità di riconciliazione e cooperazione internazionale.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Revanchism; 