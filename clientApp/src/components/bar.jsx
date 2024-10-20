import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Spinner from 'react-bootstrap/Spinner';

const chartStyle = {
    height: '80vh',
    width: '100vw',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center'
}

export default function Bar(props) {
    const { data } = props;

    return (<div style={chartStyle}>
        {!!data.length ? <ResponsiveBar
            data={data}
            keys={[
                'Score'
            ]}
            indexBy="big5"
            margin={{ top: 50, right: 130, bottom: 50, left: 130 }}
            padding={0.3}
            groupMode="grouped"
            layout="vertical"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            // defs={[
            //     {
            //         id: 'dots',
            //         type: 'patternDots',
            //         background: 'inherit',
            //         color: '#38bcb2',
            //         size: 4,
            //         padding: 1,
            //         stagger: true
            //     },
            //     {
            //         id: 'lines',
            //         type: 'patternLines',
            //         background: 'inherit',
            //         color: '#eed312',
            //         rotation: -45,
            //         lineWidth: 6,
            //         spacing: 10
            //     }
            // ]}
            // fill={[
            //     {
            //         match: {
            //             id: 'fries'
            //         },
            //         id: 'dots'
            //     },
            //     {
            //         match: {
            //             id: 'sandwich'
            //         },
            //         id: 'lines'
            //     }
            // ]}
            // borderColor={{
            //     from: 'color',
            //     modifiers: [
            //         [
            //             'darker',
            //             1.6
            //         ]
            //     ]
            // }}
            // axisTop={null}
            // axisRight={null}
            // axisBottom={{
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     legend: 'country',
            //     legendPosition: 'middle',
            //     legendOffset: 32,
            //     truncateTickAt: 0
            // }}
            // axisLeft={{
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     legend: 'food',
            //     legendPosition: 'middle',
            //     legendOffset: -40,
            //     truncateTickAt: 0
            // }}
            // labelSkipWidth={12}
            // labelSkipHeight={12}
            // labelTextColor={{
            //     from: 'color',
            //     modifiers: [
            //         [
            //             'darker',
            //             1.6
            //         ]
            //     ]
            // }}
          
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
        /> :
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
    </div>
    )
}