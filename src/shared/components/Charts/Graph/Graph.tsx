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
                series={[{ data: yData, area: true, showMark: false, color: '#141A7F' }]}
                xAxis={[{ data: xData, scaleType: 'point' }]}
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