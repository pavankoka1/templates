import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import './fonts/Roboto-Black.ttf';
import './fonts/Roboto-BlackItalic.ttf';
import './fonts/Roboto-Bold.ttf';
import './fonts/Roboto-BoldItalic.ttf';
import './fonts/Roboto-Italic.ttf';
import './fonts/Roboto-Light.ttf';
import './fonts/Roboto-LightItalic.ttf';
import './fonts/Roboto-Medium.ttf';
import './fonts/Roboto-MediumItalic.ttf';
import './fonts/Roboto-Regular.ttf';
import './fonts/Roboto-Thin.ttf';
import './fonts/Roboto-ThinItalic.ttf';
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-Regular.ttf';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
