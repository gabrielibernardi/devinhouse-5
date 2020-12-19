import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/EstruturaDaPagina.css';
import './components/searchbar.css'
import PaginaDeControle from './pages/PaginaDeControle';
import { criarServidor } from './services/mirage-server';
import reportWebVitals from './reportWebVitals';

const ambiente = process.env.NODE_ENV;
if (ambiente !== "production") {
  criarServidor({ environment: ambiente });
}


ReactDOM.render(
  <React.StrictMode>
    <PaginaDeControle />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



