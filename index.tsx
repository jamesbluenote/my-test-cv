
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

function init() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Critical Error: Root element '#root' not found in document.");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("App mounted successfully.");
  } catch (err) {
    console.error("Fatal Error during React render:", err);
  }
}

// Ensure the DOM is fully loaded before trying to mount
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
