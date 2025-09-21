import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Estilos globais
import App from './App';  // Componente principal
import { CssBaseline } from '@mui/material';  // Para resetar estilos

// Renderizando o App no DOM
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
