import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SodicLandingPage from './src/pages/SodicLandingPage';

/**
 * Main Application Routing Configuration
 * Directives: Explicit Route for path="/sodic" under ir-properties.com architecture
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dedicated SODIC Portfolio Route */}
        <Route path="/sodic" element={<SodicLandingPage />} />
        <Route path="/sodic/" element={<SodicLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

