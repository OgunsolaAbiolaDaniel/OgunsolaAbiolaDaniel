
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
  offset: 100,
});

createRoot(document.getElementById("root")!).render(<App />);
