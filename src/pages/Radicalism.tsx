import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBook, FaIndustry, FaBalanceScale, FaChartLine, FaFlag } from 'react-icons/fa';

const Radicalism: React.FC = () => {
  const movements = [
    {
      title: "Socialdemocrazia",
      icon: FaUsers,
      description: "Il movimento operaio e socialista.",
      details: "Il Partito Socialdemocratico Tedesco (SPD) emerse come la principale forza di opposizione radicale. Nonostante le leggi anti-socialiste del 1878, il partito crebbe costantemente, adottando il Programma di Erfurt nel 1891 che combinava marxismo teorico con riformismo pratico. La sua base operaia e la struttura organizzativa lo resero una forza politica significativa."
    },
    {
      title: "Movimento Femminista",
      icon: FaBook,
      description: "La lotta per i diritti delle donne.",
      details: "Il movimento femminista tedesco emerse come forza radicale, combattendo per il diritto di voto, l'accesso all'istruzione superiore e l'uguaglianza giuridica. Figure come Louise Otto-Peters e Hedwig Dohm guidarono la lotta per l'emancipazione femminile, sfidando le strutture sociali tradizionali dell'epoca."
    },
    {
      title: "Sindacalismo",
      icon: FaIndustry,
      description: "L'organizzazione dei lavoratori.",
      details: "I sindacati tedeschi crebbero rapidamente nonostante le restrizioni legali. La Commissione Generale dei Sindacati Tedeschi (ADGB) coordinò le lotte operaie per migliori condizioni di lavoro e diritti sindacali. Questo movimento radicale contribuì significativamente alla formazione della coscienza di classe operaia."
    },
    {
      title: "Liberalismo Radicale",
      icon: FaBalanceScale,
      description: "La lotta per le riforme costituzionali.",
      details: "I liberali radicali promossero riforme costituzionali, la separazione tra Chiesa e Stato, e l'espansione dei diritti civili. Il Partito Progressista Tedesco e il Partito Popolare Tedesco rappresentarono questa corrente, sfidando l'autoritarismo di Bismarck e promuovendo una maggiore democratizzazione."
    },
    {
      title: "Movimento Contadino",
      icon: FaChartLine,
      description: "La resistenza rurale.",
      details: "I contadini tedeschi organizzarono movimenti di protesta contro le politiche economiche che favorivano i grandi proprietari terrieri. La Lega dei Contadini Tedeschi emerse come forza politica significativa, combattendo per riforme agrarie e migliori condizioni per i piccoli agricoltori."
    },
    {
      title: "Nazionalismo Radicale",
      icon: FaFlag,
      description: "Le correnti nazionaliste estreme.",
      details: "Gruppi nazionalisti radicali emersero, promuovendo un'espansione coloniale aggressiva e una politica estera più assertiva. La Lega Pangermanica e altre organizzazioni simili rappresentarono questa corrente, influenzando la politica tedesca successiva."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] bg-prussian-blue overflow-hidden"
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
        {/* Introduction */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-warm-gray">Le Forze del Cambiamento</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose prose-lg">
              <p className="text-warm-gray">
                L'era di Bismarck vide l'emergere di numerosi movimenti radicali che sfidavano l'ordine 
                sociale e politico esistente. Questi movimenti, sebbene diversi nelle loro ideologie e 
                obiettivi, condividevano la volontà di trasformare la società tedesca attraverso riforme 
                significative o rivoluzioni.
              </p>
              <p className="text-warm-gray">
                La rapida industrializzazione e urbanizzazione della Germania crearono nuove classi sociali 
                e tensioni che alimentarono il radicalismo. I lavoratori industriali, le donne, i contadini 
                e altri gruppi emersero come forze politiche significative, sfidando l'autoritarismo di 
                Bismarck e le strutture sociali tradizionali.
              </p>
              <p className="text-warm-gray">
                Nonostante le misure repressive del governo, questi movimenti radicali riuscirono a 
                organizzarsi e a influenzare la politica tedesca. La loro eredità avrebbe plasmato 
                profondamente lo sviluppo della Germania nel XX secolo.
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
                className="card group hover:bg-parchment/50"
              >
                <movement.icon className="text-4xl text-imperial-gold mb-4" />
                <h3 className="text-xl font-playfair mb-2">{movement.title}</h3>
                <p className="text-warm-gray mb-4">{movement.description}</p>
                <p className="text-warm-gray/80 text-sm">{movement.details}</p>
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
                <h3 className="text-xl font-playfair text-prussian-blue mb-4">Conseguenze</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Formazione di una coscienza di classe operaia</li>
                  <li>• Avanzamento dei diritti delle donne</li>
                  <li>• Sviluppo del movimento sindacale</li>
                  <li>• Riforme costituzionali e democratiche</li>
                  <li>• Modernizzazione della società tedesca</li>
                  <li>• Emergenza di nuove forme di organizzazione politica</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-playfair text-prussian-blue mb-4">Sfide</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Repressione governativa</li>
                  <li>• Divisioni ideologiche interne</li>
                  <li>• Conflitti tra movimenti</li>
                  <li>• Resistenza delle élite tradizionali</li>
                  <li>• Limitazioni legali e politiche</li>
                  <li>• Tensioni tra riformismo e rivoluzione</li>
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
              I movimenti radicali dell'era di Bismarck hanno lasciato un'impronta duratura sulla società 
              tedesca. Le lotte per i diritti dei lavoratori, l'emancipazione femminile e le riforme 
              democratiche hanno contribuito a plasmare la Germania moderna. Il movimento operaio, in 
              particolare, ha influenzato profondamente lo sviluppo del welfare state e della democrazia 
              sociale in Germania.
            </p>
            <p className="text-warm-gray">
              Tuttavia, le tensioni tra riformismo e rivoluzione, così come le divisioni ideologiche, 
              hanno continuato a caratterizzare la politica tedesca. L'eredità di questi movimenti 
              radicali dimostra sia il potenziale trasformativo della mobilitazione sociale, sia le 
              sfide nel conciliare diverse visioni di cambiamento sociale.
            </p>
            <p className="text-warm-gray">
              La loro influenza si estende oltre la Germania, ispirando movimenti sociali e politici in 
              tutta Europa. Le loro lotte per la giustizia sociale, i diritti civili e la democrazia 
              continuano a risuonare nel mondo contemporaneo, offrendo lezioni importanti sulla natura 
              del cambiamento sociale e politico.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Radicalism; 