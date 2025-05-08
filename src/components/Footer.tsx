import React from 'react';
import { Link } from 'react-router-dom';
import { FaHistory, FaBook, FaUniversity, FaQuestionCircle, FaUsers, FaFlag } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-prussian-blue text-ivory">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-playfair mb-4">La Germania di Bismarck</h3>
            <p className="text-ivory/80 mb-4">
              Un viaggio attraverso l'era che ha plasmato la Germania moderna, 
              esplorando le politiche, le riforme e l'eredità di Otto von Bismarck.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Esplora</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/bismarck" className="flex items-center space-x-2 text-ivory/80 hover:text-ivory transition-colors">
                <FaHistory className="h-4 w-4" />
                <span>Bismarck</span>
              </Link>
              <Link to="/politica-interna" className="flex items-center space-x-2 text-ivory/80 hover:text-ivory transition-colors">
                <FaBook className="h-4 w-4" />
                <span>Politica Interna</span>
              </Link>
              <Link to="/politica-estera" className="flex items-center space-x-2 text-ivory/80 hover:text-ivory transition-colors">
                <FaUniversity className="h-4 w-4" />
                <span>Politica Estera</span>
              </Link>
              <Link to="/radicalismo" className="flex items-center space-x-2 text-ivory/80 hover:text-ivory transition-colors">
                <FaUsers className="h-4 w-4" />
                <span>Radicalismo</span>
              </Link>
              <Link to="/revanscismo" className="flex items-center space-x-2 text-ivory/80 hover:text-ivory transition-colors">
                <FaFlag className="h-4 w-4" />
                <span>Revanscismo</span>
              </Link>
              <Link to="/quiz" className="flex items-center space-x-2 text-ivory/80 hover:text-ivory transition-colors">
                <FaQuestionCircle className="h-4 w-4" />
                <span>Quiz</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ivory/20 mt-8 pt-8 text-center text-ivory/60">
          <p>© {new Date().getFullYear()} La Germania di Bismarck. Tutti i diritti riservati.</p>
          <p className="mt-2 text-sm">
            Un progetto educativo sulla storia della Germania nel XIX secolo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 