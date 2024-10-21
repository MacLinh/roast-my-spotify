import React, { useEffect, useState } from 'react';
import spotifyService from './services/spotify.service';
import api from './services/api';
import analyticsService from './services/analytics.service';
import analyzer from './services/analyzer';
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

    const trackInfos = _tracks.map(t => { return t.name.replaceAll('"', '') + ' by ' + t.artists[0].name; })

    let data = await analyticsService.analyzeEmotions(trackInfos, 10);
    setInfo(data);

    setEmotionsChartData(analyzer.getEmotionOccurence(data));
    data = await api.post('analytics/personality', { map: data });

    console.log(data);
    setPersonalityChartData(analyzer.getPersonalityScores(data));
  }

  return (
    <div className="App">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <header>Your Top 50 Songs Emotion Distribution</header>
          <Radar data={emotionsChartData} />
        </Carousel.Item>
        <Carousel.Item>
        <header>Your Big 5 Personality Scores</header>
        <Bar data={personalityChartData}/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
