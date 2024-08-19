import React from 'react';
import { createRoot } from 'react-dom';

function App() {
  return <h1>Hello, React 18!</h1>;
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
