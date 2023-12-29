import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EmployeeTable.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const EmployeeTable = ({ employeesList }) => {
    return (
        <div>
            <div className={cx('employees-table')}>
                <div className={cx('top')}>
                    <div className={cx('title')}>Danh sách nhân viên</div>
                </div>
                <div className={cx('bottom')}>
                    {employeesList.length > 0 ? (
                        <table className={cx('table-list')}>
                            <thead>
                                <tr className={cx('header-table')}>
                                    <th style={{ textAlign: 'center' }}>SỐ THỨ TỰ</th>
                                    <th>HỌ VÀ TÊN</th>
                                    <th>EMAIL</th>
                                    <th>SỐ ĐIỆN THOẠI</th>
                                </tr>
                            </thead>

                            <tbody>
                                {employeesList.map((item, index) => (
                                    <tr className={cx('body-table')}>
                                        <th style={{ textAlign: 'center' }}>{index + 1}</th>
                                        <th>{item.fullname}</th>
                                        <th>{item.email}</th>
                                        <th>0987898768</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <h1 className={cx('warning')}>Chưa có nhân viên để hiển thị.</h1>
                    )}
                </div>
                <div className={cx('see-details')}>
                    <Link to="/warehouse/managestaff" className={cx('link')}>
                        <span>See Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmployeeTable;
