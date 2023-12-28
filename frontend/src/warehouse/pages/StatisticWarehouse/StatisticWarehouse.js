import React, { useEffect, useRef, PureComponent } from 'react';
import classNames from 'classnames';
import Chart from 'chart.js/auto';
import Layout from '~/warehouse/layout';
import styles from './StatisticWarehouse.scss';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const cx = classNames.bind(styles);
const data = [
  {
    name: '5 ngày trước',
    Received: 4000,
    Sent: 2400,
    amt: 2400,
  },
  {
    name: '4 ngày trước',
    Received: 3000,
    Sent: 1398,
    amt: 2210,
  },
  {
    name: '3 ngày trước',
    Received: 2000,
    Sent: 9800,
    amt: 2290,
  },
  {
    name: '2 ngày trước',
    Received: 2780,
    Sent: 3908,
    amt: 2000,
  },
  {
    name: 'Hôm qua',
    Received: 1890,
    Sent: 4800,
    amt: 2181,
  },
  {
    name: 'Hôm nay',
    Received: 2390,
    Sent: 3800,
    amt: 2500,
  },
];


const StatisticWarehouse = () => {
    return (
        <Layout>
            <div className={cx('chart')}>
                <div className={cx('title')}><h1 className={cx('content')}>THỐNG KẾ SỐ LƯỢNG ĐƠN HÀNG LƯU CHUYỂN GẦN ĐÂY</h1></div>
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
                      <Bar dataKey="Sent" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                      <Bar dataKey="Received" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Layout>
    );
};

export default StatisticWarehouse;