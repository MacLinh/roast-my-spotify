import React, { useEffect, useState } from 'react';
import spotifyService from './services/spotifyService';
import api from './services/api';
import analyzer from './services/analyzer';
import { ResponsiveRadar } from '@nivo/radar'
import './App.css';

function App() {
  const [info, setInfo] = useState([]);

  const [tracks, setTracks] = useState([]);

  const [chartData, setChartData] = useState([]);

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
    setChartData(analyzer.getEmotionOccurence(data));
  }

  function parseData() {
    const map = {}

    for (let song of info) {
      let emotions = song.emotions;
      for (let emotion of emotions) {
        if(!map[emotion.emotion]) {
          map[emotion.emotion] = 0;
        }
        map[emotion.emotion]++;
      }
    }

    console.log(map);
  }

  // useEffect(() => {
  //   spotifyService.getTracks()
  //     .then(data => setTracks(data));
  // }, []);
  const data = [
    {emotion: 'happy', foo: 40}, 
    {emotion: 'sad', foo: 30}, 
    {emotion: 'nostalgic', foo: 10}, 
    {emotion: 'energizing', foo: 40}, 
    {emotion: 'hopeful', foo: 20}, 
  ];

  for (let i = 1; i < 20; i++) {
    const e = 'foo'+i
    data.push({emotion: e, foo: i})
  }

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
        <div style={{height: 300}}>
        {!!chartData && <ResponsiveRadar
          data={chartData}
          keys={['foo']}
          indexBy="emotion"
          valueFormat=">-.2f"
          margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
          borderColor={{ from: 'color' }}
          gridLabelOffset={36}
          dotSize={10}
          dotColor={{ theme: 'background' }}
          dotBorderWidth={2}
          colors={{ scheme: 'nivo' }}
          blendMode="multiply"
          motionConfig="wobbly"
          legends={[
            {
              anchor: 'top-left',
              direction: 'column',
              translateX: -50,
              translateY: -40,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#999',
              symbolSize: 12,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000'
                  }
                }
              ]
            }
          ]}
        />}
        </div>
      </p>
    </div>
  );
}

export default App;
