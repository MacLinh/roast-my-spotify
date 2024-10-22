import React, { useEffect, useState } from 'react';
import spotifyService from './services/spotify.service';
import analyticsService from './services/analytics.service';
import analyzer from './services/analyzer';
import Carousel from 'react-bootstrap/Carousel';
import Radar from './components/radar';
import Bar from './components/bar';
import Card from 'react-bootstrap/Card';


import './App.css';

function App() {

  const [emotionsChartDataRecent, setEmotionsChartDataRecent] = useState([]);

  const [emotionsChartDataAlltime, setEmotionsChartDataAlltime] = useState([]);

  const [personalityChartData, setPersonalityChartData] = useState([]);

  const [error, setError] = useState('');

  useEffect(() => {
    _load().catch(err => {
      if (typeof err !== 'string') {
        err = JSON.stringify(err);
      }
      setError(err)
    });
  }, []);

  async function _load() {
    let data;
    
    data = await spotifyService.getTracks(20,'short_term');
    data = await analyticsService.analyzeEmotions(data, 10);
    data = analyzer.getEmotionOccurence(data);
    setEmotionsChartDataRecent(data);

    data = await spotifyService.getTracks(20,'long_term');
    data = await analyticsService.analyzeEmotions(data, 10);
    data = analyzer.getEmotionOccurence(data);
    setEmotionsChartDataAlltime(data);

    // personality will be based on long term data
    data = await analyticsService.analyzePersonality(data);
    data = analyzer.getPersonalityScores(data);
    setPersonalityChartData(data);
  }

  return (
    <div className="App">
      {
        error ?
          <Card>
            <Card.Body>
              <Card.Title>Error</Card.Title>
              <Card.Text>
                { error }
              </Card.Text>
            </Card.Body>
          </Card>
          :
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <header>Your Recent Songs Emotion Distribution</header>
            <Radar data={emotionsChartDataRecent} />
          </Carousel.Item>
          <Carousel.Item>
            <header>Your All Time Songs Emotion Distribution</header>
            <Radar data={emotionsChartDataAlltime} />
          </Carousel.Item>
          <Carousel.Item>
            <header>Your Big 5 Personality Scores</header>
            <Bar data={personalityChartData} />
          </Carousel.Item>
        </Carousel>
      }
    </div>
  );
}

export default App;
