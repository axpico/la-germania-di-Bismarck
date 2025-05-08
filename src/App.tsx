import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import InternalPolitics from './pages/InternalPolitics'
import ForeignPolicy from './pages/ForeignPolicy'
import Revanchism from './pages/Revanchism'
import Radicalism from './pages/Radicalism'
import Bismarck from './pages/Bismarck'
import Quiz from './pages/Quiz'

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
)

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />
              <Route
                path="/bismarck"
                element={
                  <PageTransition>
                    <Bismarck />
                  </PageTransition>
                }
              />
              <Route
                path="/politica-interna"
                element={
                  <PageTransition>
                    <InternalPolitics />
                  </PageTransition>
                }
              />
              <Route
                path="/politica-estera"
                element={
                  <PageTransition>
                    <ForeignPolicy />
                  </PageTransition>
                }
              />
              <Route
                path="/revanscismo"
                element={
                  <PageTransition>
                    <Revanchism />
                  </PageTransition>
                }
              />
              <Route
                path="/radicalismo"
                element={
                  <PageTransition>
                    <Radicalism />
                  </PageTransition>
                }
              />
              <Route
                path="/quiz"
                element={
                  <PageTransition>
                    <Quiz />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 