import { React, useState, useEffect } from 'react';
import Layout from '~/warehouse/layout';
import styles from './DashboardWarehouse.module.scss';
import classNames from 'classnames/bind';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetEmployees } from '~/all/features/AdminCollectionSlice';
import DashboardHeader from '~/all/component/DashboardHeader/DashboardHeader';
import FeatureChart from '~/all/component/Chart/FeatureChart';
import EmployeeTable from '~/all/component/EmployeeTable/EmployeeTable';

const cx = classNames.bind(styles);
const Warehouse = () => {
    const dispatch = useDispatch();
    const [employeesList, setEmployees] = useState([]);
    const { usersList } = useSelector((state) => state.adminCollection);

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
                        <EmployeeTable employeesList={employeesList} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Warehouse;
