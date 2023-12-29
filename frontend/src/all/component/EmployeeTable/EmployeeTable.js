import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EmployeeTable.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const EmployeeTable = ({ employeesList, manageLink }) => {
    const Vaitro = (item) => {
        switch (item.position) {
            case 'employee_distribution':
                return <span>Nhân viên điểm giao dịch</span>;
            case 'admin_distribution':
                return <span>Quản lý điểm giao dịch</span>;
            case 'employee_collection':
                return <span>Nhân viên điểm tập kết</span>;
            case 'admin_collection':
                return <span>Quản lý điểm tập kết</span>;
            default:
                return null;
        }
    };
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
                                    <th>VAI TRÒ</th>
                                </tr>
                            </thead>

                            <tbody>
                                {employeesList.map((item, index) => (
                                    <tr className={cx('body-table')}>
                                        <th style={{ textAlign: 'center' }}>{index + 1}</th>
                                        <th>{item.fullname}</th>
                                        <th>{item.email}</th>
                                        <th>{Vaitro(item)}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <h1 className={cx('warning')}>Chưa có nhân viên để hiển thị.</h1>
                    )}
                </div>
                <div className={cx('see-details')}>
                    <Link to={manageLink} className={cx('link')}>
                        <span>See Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmployeeTable;
