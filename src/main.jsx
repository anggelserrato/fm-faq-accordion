import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FAQAccordion from './components/FAQAccordion';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FAQAccordion />
  </StrictMode>
);
