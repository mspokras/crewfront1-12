import { LineChart } from '@mui/x-charts';
import React from 'react';
import './Graph.scss';

interface GraphProps {
    xData: string[],
    yData: number[],
    leftAxis?: null;
}

const Graph = (props: GraphProps) => {
    const sharedStyles = {
        '.MuiLineElement-root': {
            stroke: '#141A7F',
        },
        '.MuiAreaElement-root': {
            fill: '#F5F2FC',
            stroke: 'none',
            marginTop: '25px',
        },
        '.MuiChartsAxis-tickLabel': {
            fontFamily: 'IBM Plex Sans',
            fontSize: '12px',
            fill: '#475467 !important'
        },
        '.MuiChartsAxis-line': {
            stroke: 'none !important',
        },
        '.MuiChartsAxis-tick': {
            stroke: 'none !important',
        },
        '.MuiHighlightElement-root': {
            fill: '#141A7F',
        },
        '.MuiChartsAxis-bottom': {
            transform: 'translateY(206px)',
        },
        '.MuiChartsXAxis-bottom .MuiChartsXAxis-label': {
            marginLeft: '24px !important',
        },
    };

    const { xData, yData, leftAxis } = props;

    return (
        <div className='graph'>
            <LineChart
                className='line-chart'
                width={1016}
                height={240}
                series={[{ data: yData, area: true, showMark: false, color: '#141A7F' }]}
                xAxis={[{ data: xData, scaleType: 'point' }]}
                sx={{ ...sharedStyles}}
                leftAxis={leftAxis}
            />
        </div>
    );
};

export default Graph;