import { React, useState, useEffect } from 'react';
import Layout from '~/distribution_center/layout';
import styles from './DashboardDistribution.module.scss';
import FadeLoader from 'react-spinners/FadeLoader';
import classNames from 'classnames/bind';
import DashboardHeader from '~/all/component/DashboardHeader/DashboardHeader';
import FeatureChart from '~/all/component/Chart/FeatureChart';
import { useDispatch, useSelector } from 'react-redux';
import DeliveryTable from '~/all/component/DeliveryTable/DeliveryTable';
import { GetDeliveryDay } from '~/all/features/EmployeeDistributionSlice';
const cx = classNames.bind(styles);
const DashboardDDD = () => {
    const dispatch = useDispatch();
    const { deliveriesDay, isSuccessHome, isLoadingHome } = useSelector((state) => state.employeeDistribution);
    useEffect(() => {
        if (!isSuccessHome) {
            const delay = setTimeout(() => {
                dispatch(GetDeliveryDay());
            }, 1000);
            return () => {
                clearTimeout(delay);
            };
        }
    }, [dispatch]);
    let content;
    if (isLoadingHome) {
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
    } else if (isSuccessHome) {
        content = (
            <Layout>
                <div className={cx('dashboard')}>
                    <DashboardHeader />
                    <div className={cx('dashboard-content')}>
                        <div className={cx('chart-component')}>
                            <FeatureChart />
                        </div>
                        <div className={cx('table-component')}>
                            <DeliveryTable deliveries={deliveriesDay} />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
    return <div>{content}</div>;
};

export default DashboardDDD;
