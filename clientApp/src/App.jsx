import React, { useEffect, useState } from 'react';
import spotifyService from './services/spotifyService';
import api from './services/api';
import logo from './logo.svg';
import './App.css';

function App() {
  const [info, setInfo] = useState([]);

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    _init().catch(err => console.log(err));
  }, []);

  async function _init() {
    const _tracks = await spotifyService.getTracks();
    setTracks(_tracks);
    console.log(JSON.stringify(_tracks));
    const trackInfos = _tracks.map(t => { return t.name.replaceAll('"', '') + ' by ' + t.artists[0].name; })
    console.log(trackInfos);
    const data = await api.post('analytics/emotions', { list: trackInfos });
    setInfo(data);
  }

  // useEffect(() => {
  //   spotifyService.getTracks()
  //     .then(data => setTracks(data));
  // }, []);


  return (
    <div className="App">
      <p>
        <table>
          <thead>
            <tr>
              <th>song</th>
              <th>artist</th>
              <th>emotion 1</th>
              <th>emotion 2</th>
            </tr>
          </thead>
          <tbody>
            {info.map(v => {
              return (
                <tr>
                  <td>{v.title}</td>
                  <td>{v.artist}</td>
                  <td>{v.emotions[0].emotion}</td>
                  <td>{v.emotions[1].emotion}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </p>
    </div>
  );
}

export default App;
