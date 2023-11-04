import { LineChart } from '@mui/x-charts';
import React from 'react';
import './Graph.scss';

const Graph = () => {
    const uData: number[] = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const xLabels: string[] = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
    ];
    return (
        <div>
            <LineChart
                width={500}
                height={300}
                series={[{ data: uData, label: 'uv', area: true, showMark: false }]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                    '.MuiLineElement-root': {
                    display: 'none',
                    },
                }}
            />
        </div>
    );
};

export default Graph;