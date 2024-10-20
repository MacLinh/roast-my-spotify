import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import Spinner from 'react-bootstrap/Spinner';

 // TODO get dark theme working
 const theme = {
    axis: {
      textColor: '#eee',
      fontSize: '14px',
      tickColor: '#eee',
    },
    grid: {
      stroke: '#888',
      strokeWidth: 1
    },
  };

  const chartStyle = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center'
  }

export default function Radar(props) {
    const { data } = props;

    return (<div style={chartStyle}>
        {!!data.length ? <ResponsiveRadar
            data={data}
            keys={['Weight']}
            theme={theme}
            indexBy="emotion"
            valueFormat=">-.2f"
            margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
            borderColor={{ theme: 'background' }}
            colorBy="index"
            gridLabelOffset={18}
            gridLevels={3}
            enableDots={false}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            colors={{ scheme: 'accent' }}
            fillOpacity={0.55}
            // blendMode="lighten"
            motionConfig="wobbly"
        /> :
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
    </div>
    )
}