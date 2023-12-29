import React, { useEffect, useRef, PureComponent } from 'react';
import classNames from 'classnames';
import Layout from '~/distribution_center/layout';
import styles from './StatisticDistributionEmployee.module.scss';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const cx = classNames.bind(styles);
const data = [
    {
        name: '5 ngày trước',
        Success: 4000,
        Failed: 2400,
        amt: 2400,
    },
    {
        name: '4 ngày trước',
        Success: 3000,
        Failed: 1398,
        amt: 2210,
    },
    {
        name: '3 ngày trước',
        Success: 2000,
        Failed: 9800,
        amt: 2290,
    },
    {
        name: '2 ngày trước',
        Success: 2780,
        Failed: 3908,
        amt: 2000,
    },
    {
        name: 'Hôm qua',
        Success: 1890,
        Failed: 4800,
        amt: 2181,
    },
    {
        name: 'Hôm nay',
        Success: 2390,
        Failed: 3800,
        amt: 2500,
    },
];

const StatisticDistributionEmployee = () => {
    return (
        <Layout>
            <div className={cx('chart')}>
                <div className={cx('title')}>
                    <h1 className={cx('content')}>THỐNG KẾ TÌNH TRẠNG CÁC ĐƠN HÀNG GẦN ĐÂY</h1>
                </div>
                <ResponsiveContainer width="90%" height="80vh" aspect={2 / 1}>
                    <BarChart
                        width={1000}
                        height={500}
                        data={data}
                        margin={{
                            top: 30,
                            right: 0,
                            left: 100,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Failed" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="Success" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Layout>
    );
};

export default StatisticDistributionEmployee;
