import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getProgressText } from './progress';
import { checkCount } from '../cardcheck';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartProgress() {
 
        const originalData = [checkCount.true, checkCount.false];

        const total = originalData.reduce((acc, value) => acc + value, 0);

        const percentages = originalData.map(value => (value / total * 100).toFixed(2));
        const percentageValue = parseFloat(percentages[0]);

        const textProgress = getProgressText(percentageValue);

        const data = {
            labels: false,
            datasets: [
                {
                    label: 'Progress',
                    data: originalData, 
                    backgroundColor: [
                        'rgba(255, 255, 255, 0.6)',
                        'rgba(128, 128, 128, 0.6)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        const options = {
            cutout: '50%',
         };

    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center">
                <p className='text-sm'>do-list staff :</p>
                <Box width={100}>
                    <Doughnut data={data} options={options} />
                </Box>
                <div className='text-center'>
                    <h1 className='font-semibold'>{percentages[0]}%</h1>
                    <p className='text-sm'>{textProgress}</p>
                </div>
            </Box>
        </>
    );
}
