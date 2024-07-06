import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useTheme } from '@mui/material/styles';

interface GraphProps {
    labels: string[];
    data: number[];
}

const Graph: React.FC<GraphProps> = ({ labels, data }) => {
    const theme = useTheme();
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null); // Track the Chart.js instance

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                // Destroy existing chart instance if it exists
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstance.current = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Funds Performance',
                                data: data,
                                fill: false,
                                borderColor: theme.palette.primary.main, // Example: Using primary color from theme
                                tension: 0.1,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Time',
                                },
                                display: true,
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Amount ($)',
                                },
                                display: true,
                            },
                        },
                    },
                });
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy(); // Cleanup on component unmount
            }
        };
    }, [labels, data, theme]);

    return <canvas ref={chartRef} />;
};

export default Graph;
