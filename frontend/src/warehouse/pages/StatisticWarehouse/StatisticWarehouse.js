import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Layout from '~/warehouse/layout';
import styles from './StatisticWarehouse.scss';

const StatisticWarehouse = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        if (chartRef && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [ 'Hàng đi', 'Hàng trong kho', 'Hàng đến'],
                    datasets: [
                        {
                            label: 'Đơn hàng',
                            data: [5, 10, 3],
                            backgroundColor: [
                                // 'rgba(255, 99, 132, 0.2)',
                                // 'rgba(54, 162, 235, 0.2)',
                                // 'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                // 'rgba(255, 99, 132, 1)',
                                // 'rgba(54, 162, 235, 1)',
                                // 'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <Layout>
          <div id = 'diagram'>
            <canvas ref={chartRef}/>
          </div>  
        </Layout>
          
    );
};

export default StatisticWarehouse;
