import { LineChart } from '@mui/x-charts';
import React from 'react';
import { sharedStyles } from './GraphStyles';
import './Graph.scss';

interface GraphProps {
    xData: string[],
    yData: number[],
    leftAxis?: null;
}

const Graph = (props: GraphProps) => {
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