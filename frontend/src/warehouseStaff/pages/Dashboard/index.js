import { React, useState, useEffect } from 'react';
import Layout from '~/warehouseStaff/layout';
import styles from './DashboardWarehouseStaff.module.scss';
import classNames from 'classnames/bind';
import 'react-circular-progressbar/dist/styles.css';
import DashboardHeader from '~/all/component/DashboardHeader/DashboardHeader';
import FeatureChart from '~/all/component/Chart/FeatureChart';
import DeliveryTable from '~/all/component/DeliveryTable/DeliveryTable';
import { useDispatch, useSelector } from 'react-redux';
import { getDeliveries } from '~/all/features/EmployeeCollectionSlice';
import { FadeLoader } from 'react-spinners';

const cx = classNames.bind(styles);
const WarehouseStaff = () => {
    const dispatch = useDispatch();
    const { deliveries, isSuccess, isLoading } = useSelector((state) => state.employeeCollection);
    useEffect(() => {
        if (!isSuccess) {
            const delay = setTimeout(() => {
                dispatch(getDeliveries());
            }, 1000);
            return () => {
                clearTimeout(delay);
            };
        }
    }, [dispatch]);
    let content;
    if (isLoading) {
        content = (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                    background: 'hsl(200, 80%, 90%)',
                }}
            >
                <FadeLoader color="rgba(255, 255, 255, 1)" height="10" width="6" />
                <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
            </div>
        );
    } else if (isSuccess) {
        content = (
            <Layout>
                <div className={cx('dashboard')}>
                    <DashboardHeader />
                    <div className={cx('dashboard-content')}>
                        <div className={cx('chart-component')}>
                            <FeatureChart />
                        </div>
                        <div className={cx('table-component')}>
                            <DeliveryTable deliveries={deliveries} />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
    return <div>{content}</div>;
};

export default WarehouseStaff;
