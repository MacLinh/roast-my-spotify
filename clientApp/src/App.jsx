import React, { useEffect, useState } from 'react';
import spotifyService from './services/spotifyService';
import api from './services/api';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('unchanged');

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    api.get('hello')
      .then(data => setMessage(data.message));
  }, []);

  // useEffect(() => {
  //   spotifyService.getTracks()
  //     .then(data => setTracks(data));
  // }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message + ' : ' + JSON.stringify(tracks.length)}
        </p>
      </header>
    </div>
  );
}

export default App;
