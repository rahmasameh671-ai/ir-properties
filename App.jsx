import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SodicLandingPage from './src/pages/SodicLandingPage';
import CityGateLandingPage from './src/pages/CityGateLandingPage';
import MadinetMasrLandingPage from './src/pages/MadinetMasrLandingPage';

/**
 * Main Application Routing Configuration
 * Directives: Explicit Routes under ir-properties.com / properties-s.com architecture
 * - /sodic: SODIC Signature Living
 * - /city-gate & /citygate: City Gate New Cairo by Qatari Diar
 * - /Madient-Masr: Madinet Masr Curated Portfolio (The Butterfly, Taj City Etaje, Sarai, Talala)
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dedicated SODIC Portfolio Route */}
        <Route path="/sodic" element={<SodicLandingPage />} />
        <Route path="/sodic/" element={<SodicLandingPage />} />

        {/* Dedicated City Gate New Cairo Routes (supports both hyphenated & non-hyphenated slugs) */}
        <Route path="/city-gate" element={<CityGateLandingPage />} />
        <Route path="/city-gate/" element={<CityGateLandingPage />} />
        <Route path="/citygate" element={<CityGateLandingPage />} />
        <Route path="/citygate/" element={<CityGateLandingPage />} />

        {/* Dedicated Madinet Masr Portfolio Route (Strict route: /Madient-Masr) */}
        <Route path="/Madient-Masr" element={<MadinetMasrLandingPage />} />
        <Route path="/Madient-Masr/" element={<MadinetMasrLandingPage />} />
        <Route path="/madient-masr" element={<MadinetMasrLandingPage />} />
        <Route path="/madient-masr/" element={<MadinetMasrLandingPage />} />
        <Route path="/madinet-masr" element={<MadinetMasrLandingPage />} />
        <Route path="/Madinet-Masr" element={<MadinetMasrLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
