import { createRoot } from 'react-dom/client';
import { Router } from './router';
import Root from './Root.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Root />
  </Router>
);
