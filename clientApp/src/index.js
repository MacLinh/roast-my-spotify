import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

export const darkTheme = {
  // background: '#121212',
  // color: '#eee',
  // accentColor: '#3D84C6',
  // chronoTheme: {
  //   cardBgColor: '#1B1B1B',
  //   cardForeColor: '#eee',
  //   titleColor: 'black',
  // },
  // timelineLineColor: '#444',
  // cardBackground: '#060606',
  // cardFooterBackground: '#181818',
  // cardBorderColor: '#ffffff20',
  // navbarTheme: {
  //   linkColor: '#dedede',
  //   linkHoverColor: '#fefefe',
  //   linkActiveColor: '#fefefe',
  // },
  // bsPrimaryVariant: 'dark',
  // bsSecondaryVariant: 'light',
  // socialIconBgColor: '#fefefe',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={darkTheme}>
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
