import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import New from './NewFunction';

function MyApp() {
  return (
    <div>
      <h1>I am a straight Function coming from main.jsx and initialized in main.jsx too</h1>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <New />
    <MyApp />
  </StrictMode> // Make sure this is closed properly
);
