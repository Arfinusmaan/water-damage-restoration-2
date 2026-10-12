import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import CuratedNavbar from './components/CuratedNavbar';
import CuratedFooter from './components/CuratedFooter';

// Pages for AQUAVANT Water Damage Restoration Website
import CuratedHomePage from './pages/CuratedHomePage';
import CuratedWorksPage from './pages/CuratedWorksPage';
import CuratedServiceDetailPage from './pages/CuratedServiceDetailPage';
import CuratedMaterialityPage from './pages/CuratedMaterialityPage';
import CuratedManifestoPage from './pages/CuratedManifestoPage';
import CuratedContactPage from './pages/CuratedContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#111111] text-[#DBDBDB] font-sans selection:bg-blue-500 selection:text-white">
        <CuratedNavbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<CuratedHomePage />} />
            
            {/* Services & Case Studies */}
            <Route path="/services" element={<CuratedWorksPage />} />
            <Route path="/services/:slug" element={<CuratedServiceDetailPage />} />
            <Route path="/works" element={<CuratedWorksPage />} />
            <Route path="/cases" element={<CuratedWorksPage />} />
            
            {/* Equipment Fleet & Drying Science */}
            <Route path="/equipment" element={<CuratedMaterialityPage />} />
            <Route path="/materiality" element={<CuratedMaterialityPage />} />
            
            {/* Restoration Protocol & Standards */}
            <Route path="/protocol" element={<CuratedManifestoPage />} />
            <Route path="/manifesto" element={<CuratedManifestoPage />} />
            
            {/* 24/7 Emergency Dispatch & Claim Intake */}
            <Route path="/emergency" element={<CuratedContactPage />} />
            <Route path="/inquire" element={<CuratedContactPage />} />
            
            {/* Real Legal Terms & Privacy */}
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <CuratedFooter />
      </div>
    </Router>
  );
}
