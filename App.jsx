import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SodicLandingPage from './src/pages/SodicLandingPage';
import CityGateLandingPage from './src/pages/CityGateLandingPage';

/**
 * Main Application Routing Configuration
 * Directives: Explicit Routes under ir-properties.com architecture
 * - /sodic: SODIC Signature Living
 * - /city-gate & /citygate: City Gate New Cairo by Qatari Diar
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
      </Routes>
    </BrowserRouter>
  );
}
