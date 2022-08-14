import { createRoot } from 'react-dom/client';

import { App } from './App';

const mountPoint = document.getElementById('mount-point');
if (mountPoint) {
  const root = createRoot(mountPoint);
  root.render(<App />);
} else {
  throw new Error('"mount-point" not found.');
}
