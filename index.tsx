
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

function mount() {
  console.log("Initializing Application...");
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error("Target container 'root' not found.");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React Application mounted successfully.");
  } catch (error) {
    console.error("Rendering failed:", error);
    rootElement.innerHTML = `<div style="padding: 20px; color: red;">Failed to load application. Please check the console for details.</div>`;
  }
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  mount();
} else {
  window.addEventListener('DOMContentLoaded', mount);
}
