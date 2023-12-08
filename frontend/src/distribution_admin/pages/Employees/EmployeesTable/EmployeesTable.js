import React from 'react';
import styles from './EmployeesTable.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EmployeesTable = () => {
    return (
        <div className={cx('received-table')}>
            <table className={cx('table-list')}>
                <thead>
                    <tr className={cx('header-table')}>
                        <th style={{ textAlign: 'center' }}>STT</th>
                        <th>HỌ VÀ TÊN</th>
                        <th>TÊN ĐĂNG NHẬP</th>
                        <th>SỐ ĐIỆN THOẠI</th>
                        <th style={{ textAlign: 'center' }}>TÙY CHỌN</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className={cx('body-table')}>
                        <th style={{ textAlign: 'center' }}>1</th>
                        <th>Trần Đức Khải</th>
                        <th>khaitd-0340</th>
                        <th>0989789789</th>
                        <th style={{ textAlign: 'center' }}>
                            <div className={cx('btn-options')}>
                                <button className={cx('edit-btn')}>Sửa</button>
                                <button className={cx('delete-btn')}>Xóa</button>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EmployeesTable;
