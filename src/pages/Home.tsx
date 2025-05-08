import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const features = [
  {
    name: 'Politica Interna',
    description: 'Esplora la complessa politica interna della Germania bismarckiana, dalle riforme sociali alle tensioni politiche.',
    href: '/politica-interna',
  },
  {
    name: 'Politica Estera',
    description: 'Scopri la strategia diplomatica di Bismarck e il suo ruolo nel mantenere l\'equilibrio europeo.',
    href: '/politica-estera',
  },
  {
    name: 'Revanscismo',
    description: 'Analizza il fenomeno del revanscismo e il suo impatto sulle relazioni internazionali.',
    href: '/revanscismo',
  },
  {
    name: 'Radicalismo',
    description: 'Approfondisci i movimenti radicali e le loro influenze sulla società tedesca.',
    href: '/radicalismo',
  },
]

export default function Home() {
  return (
    <div className="bg-ivory">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-prussian-blue">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          >
            <h1 className="mt-10 text-4xl font-playfair font-bold tracking-tight text-ivory sm:text-6xl">
              La Germania di Bismarck
            </h1>
            <p className="mt-6 text-lg leading-8 text-ivory/90">
              Un viaggio nella storia dell'Impero Tedesco, attraverso le politiche, le riforme e le sfide di uno dei periodi più significativi della storia europea.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/politica-interna"
                className="btn btn-primary"
              >
                Inizia l'esplorazione
              </Link>
              <Link
                to="/politica-estera"
                className="btn btn-secondary"
              >
                Scopri di più
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-prussian-blue">Esplora la Storia</h2>
          <p className="mt-2 text-3xl font-playfair font-bold tracking-tight text-dark-gray sm:text-4xl">
            Un periodo di grandi trasformazioni
          </p>
          <p className="mt-6 text-lg leading-8 text-warm-gray">
            La Germania di Bismarck rappresenta un momento cruciale nella storia europea, caratterizzato da profondi cambiamenti politici, sociali ed economici.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-prussian-blue">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-warm-gray">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      to={feature.href}
                      className="text-sm font-semibold leading-6 text-prussian-blue hover:text-imperial-gold"
                    >
                      Leggi di più <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 