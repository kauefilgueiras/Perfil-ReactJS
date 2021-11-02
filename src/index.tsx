import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Photo from './components/photo';
import Column from './components/colunas';
import './components/photo/index.css';
import './components/nav/index';
import {Nav} from "react-bootstrap";
import Header from "./components/nav";
import Alerts from "./components/Alerts";

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <App />
    <Photo />
      <Alerts />
    <Column />
  </React.StrictMode>,

  
  document.getElementById('root')
);
