import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import WebsiteBuilder from './pages/WebsiteBuilder';
import SEO from './pages/SEO';
import AIConsulting from './pages/AIConsulting';
import CGV from './pages/CGV';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import NotFound from './pages/NotFound';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const is404 = location.pathname !== '/' && !location.pathname.match(/^\/(about|services|services\/.*|cgv|mentions-legales|politique-confidentialite)$/);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {!is404 && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!is404 && <Footer />}
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/website-builder" element={<WebsiteBuilder />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/ai-consulting" element={<AIConsulting />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;