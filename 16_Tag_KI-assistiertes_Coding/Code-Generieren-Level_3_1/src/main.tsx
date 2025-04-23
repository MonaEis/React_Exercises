// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Pfad überprüfen
import './index.css'; // Pfad überprüfen

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);