import { motion } from 'framer-motion'

export default function ForeignPolicy() {
  return (
    <div className="bg-ivory min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-playfair font-bold text-prussian-blue mb-8">
            Politica Estera della Germania
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-warm-gray">
              Contenuto in fase di sviluppo...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 