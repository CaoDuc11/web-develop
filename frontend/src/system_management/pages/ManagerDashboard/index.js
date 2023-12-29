import Layout from '~/system_management/layout';
import { React, useState, useEffect } from 'react';
import styles from './ManagerDashboard.module.scss';
import classNames from 'classnames/bind';
import DashboardHeader from '~/all/component/DashboardHeader/DashboardHeader';
import FeatureChart from '~/all/component/Chart/FeatureChart';
import { useDispatch, useSelector } from 'react-redux';
import { GetAdminUser } from '~/all/features/ManagerSystemSlice';
import FadeLoader from 'react-spinners/FadeLoader';
import EmployeeTable from '~/all/component/EmployeeTable/EmployeeTable';
const cx = classNames.bind(styles);
const ManagerDashboard = () => {
    const dispatch = useDispatch();
    const { adminUser, isSuccessHome, isLoadingHome } = useSelector((state) => state.managerSystem);
    useEffect(() => {
        if (!isSuccessHome) {
            const delay = setTimeout(() => {
                dispatch(GetAdminUser());
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
                            <EmployeeTable employeesList={adminUser} />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
    return <div>{content}</div>;
};

export default ManagerDashboard;
