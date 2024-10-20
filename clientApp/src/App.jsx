import React, { useEffect, useState } from 'react';
import spotifyService from './services/spotifyService';
import api from './services/api';
import analyzer from './services/analyzer';
import { ResponsiveRadar } from '@nivo/radar'
import Carousel from 'react-bootstrap/Carousel';
import Radar from './components/radar';
import Bar from './components/bar';


import './App.css';

function App() {
  const [info, setInfo] = useState([]);

  const [tracks, setTracks] = useState([]);

  const [emotionsChartData, setEmotionsChartData] = useState([]);

  const [personalityChartData, setPersonalityChartData] = useState([]);

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
    console.log(data);
    setEmotionsChartData(analyzer.getEmotionOccurence(data));
  }

  return (
    <div className="App">
      <Carousel data-bs-theme="dark">

        {/* begin emotions chart */}
        <Carousel.Item>
          <header>Your Top 50 Songs Emotion Distribution</header>
          <Radar data={emotionsChartData} />
        </Carousel.Item>
        {/* end emotions chart */}

        {/* begin genres chart */}
        <Carousel.Item>
        <header>Your Big 5 Personality Scores</header>
        <Bar data={personalityChartData}/>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default App;
