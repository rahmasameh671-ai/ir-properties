import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SodicLandingPage from './src/pages/SodicLandingPage';

/**
 * Main Application Routing Configuration (TypeScript)
 * Directives: Explicit Route for path="/sodic" under ir-properties.com architecture
 */
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dedicated SODIC Portfolio Route */}
        <Route path="/sodic" element={<SodicLandingPage />} />
        <Route path="/sodic/" element={<SodicLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

