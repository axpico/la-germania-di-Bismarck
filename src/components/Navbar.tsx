import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-prussian-blue text-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-playfair font-bold">
            La Germania di Bismarck
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/bismarck" className="hover:text-imperial-gold transition-colors">
              Bismarck
            </Link>
            <Link to="/politica-interna" className="hover:text-imperial-gold transition-colors">
              Politica Interna
            </Link>
            <Link to="/politica-estera" className="hover:text-imperial-gold transition-colors">
              Politica Estera
            </Link>
            <Link to="/revanscismo" className="hover:text-imperial-gold transition-colors">
              Revanscismo
            </Link>
            <Link to="/radicalismo" className="hover:text-imperial-gold transition-colors">
              Radicalismo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-prussian-blue/80"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Apri menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link
                  to="/bismarck"
                  className="block px-3 py-2 hover:text-imperial-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bismarck
                </Link>
                <Link
                  to="/politica-interna"
                  className="block px-3 py-2 hover:text-imperial-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Politica Interna
                </Link>
                <Link
                  to="/politica-estera"
                  className="block px-3 py-2 hover:text-imperial-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Politica Estera
                </Link>
                <Link
                  to="/revanscismo"
                  className="block px-3 py-2 hover:text-imperial-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Revanscismo
                </Link>
                <Link
                  to="/radicalismo"
                  className="block px-3 py-2 hover:text-imperial-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Radicalismo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 