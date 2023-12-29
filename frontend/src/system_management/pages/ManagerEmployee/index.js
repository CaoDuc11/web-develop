import { React, useState, useEffect } from 'react';
import styles from './ManagerEmployee.module.scss';
import classNames from 'classnames/bind';
import Layout from '~/system_management/layout';
import { useDispatch, useSelector } from 'react-redux';
import { GetAdminUser } from '~/all/features/ManagerSystemSlice';
import FadeLoader from 'react-spinners/FadeLoader';
import EmployeeManaTable from './EmployeeManaTable/EmployeeManaTable';
const cx = classNames.bind(styles);
const ManagerEmployee = () => {
    const dispatch = useDispatch();
    const { isSuccessHome, isLoadingHome, adminUser } = useSelector((state) => state.managerSystem);
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
            <div className={cx('system-container')}>
                <Layout>
                    <div className={cx('sectionSystem')}>
                        <div className={cx('header-system')}>
                            <span className={cx('header-system_title1')}>Danh sách nhân viên</span>
                        </div>
                        <div className={cx('system-table')}>
                            <EmployeeManaTable adminUser={adminUser} />
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
    return <div>{content}</div>;
};

export default ManagerEmployee;
