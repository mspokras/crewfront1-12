import { LineChart } from '@mui/x-charts';
import React from 'react';
import './Graph.scss';

interface GraphProps {
    xData: string[],
    yData: number[]
}

const Graph = (props: GraphProps) => {
    const { xData, yData } = props;
    return (
        <div className='graph'>
            <LineChart
                className='line-chart'
                width={1016}
                height={240}
                series={[{ data: yData, area: true, showMark: false }]}
                xAxis={[{ data: xData, scaleType: 'point' }]}
                sx={{
                    '.MuiLineElement-root': {
                        stroke: '#141A7F',
                    },
                    '.MuiAreaElement-root': {
                        fill: '#F5F2FC',
                    },
                    '.MuiChartsAxis-tickLabel': {
                        fontFamily: 'IBM Plex Sans',
                        fill: '#475467 !important'
                    },
                    'MuiChartsAxis-line': {
                        stroke: '0 !important',
                        strokeWidth: '0 !important'
                    },
                    'MuiChartsAxis-tick': {
                        stroke: '0'
                    }
                }}
            />
        </div>
    );
};

export default Graph;