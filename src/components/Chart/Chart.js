import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const maxExpense = Math.max(...dataPointValues);
	// Math.max() takes in comma separated values and not arrays hence we use spread operator
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={maxExpense}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
