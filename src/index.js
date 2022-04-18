import React from 'react';
import {createRoot } from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';





const container = document.getElementById('root');
createRoot(container).render(<App />);
