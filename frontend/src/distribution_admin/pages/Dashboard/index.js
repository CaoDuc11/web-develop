import { React, useState, useEffect } from 'react';
import Layout from '~/distribution_admin/layout';
import styles from './AdminDistributionDashboard.module.scss';
import classNames from 'classnames/bind';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetEmployees } from '~/all/features/AdminDistributionSlice';
import DashboardHeader from '~/all/component/DashboardHeader/DashboardHeader';
import FeatureChart from '~/all/component/Chart/FeatureChart';
import EmployeeTable from '~/all/component/EmployeeTable/EmployeeTable';

const cx = classNames.bind(styles);
const AdminDistributionDashboard = () => {
    const dispatch = useDispatch();
    const [employeesList, setEmployees] = useState([]);
    const { usersList } = useSelector((state) => state.adminDistribution);

    useEffect(() => {
        if (usersList.length === 0) {
            dispatch(GetEmployees());
        } else {
            setEmployees(usersList);
        }
    }, [dispatch, usersList]);

    return (
        <Layout>
            <div className={cx('dashboard')}>
                <DashboardHeader />
                <div className={cx('dashboard-content')}>
                    <div className={cx('chart-component')}>
                        <FeatureChart />
                    </div>
                    <div className={cx('table-component')}>
                        <EmployeeTable employeesList={employeesList} manageLink="/admin/distribution/employees" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDistributionDashboard;
