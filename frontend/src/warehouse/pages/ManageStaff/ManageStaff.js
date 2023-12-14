import React from 'react';
import Layout from '~/warehouse/layout';
import styles from './ManageStaff.scss';
import classNames from 'classnames/bind';
import Add from './Add/Add';
import { NavLink } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';

const cx = classNames.bind(styles);
const ManageStaff = () => {
    return (
        <Layout>
            <div id="StaffList">Danh sách nhân viên</div>

            <NavLink className={cx('nav-icon')}
                to={'/warehouse/managestaff/add'}
                style={{
                    background: 'rgb(51,255,51)',
                    color: 'white',
                    fontSize: '13px',
                    fontWeight: '500',
                    padding: '0.5rem 0.5rem',
                    border: 'none',
                    borderRadius: '10px',
                }}
            >
                Thêm mới
                <IoIosAdd />
            </NavLink>

            <div className={cx('received-table')}>
                <table className={cx('table-list')}>
                    <thead>
                        <tr className={cx('header-table')}>
                            <th style={{ textAlign: 'center' }}>STT</th>
                            <th>NHÂN VIÊN</th>
                            <th>TÊN ĐĂNG NHẬP</th>
                            <th>SỐ ĐIỆN THOẠI</th>
                            <th style={{ textAlign: 'center' }}>TUỲ CHỌN</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className={cx('body-table')}>
                            <th style={{ textAlign: 'center' }}>1</th>
                            <th>Trần Đức Khải</th>
                            <th>khaidt</th>
                            <th>0989789789</th>
                            <th style={{ textAlign: 'center' }}>
                                <button
                                    style={{
                                        background: 'blue',
                                        color: 'white',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        padding: '0.5rem 0.5rem',
                                        border: 'none',
                                        borderRadius: '2px',
                                    }}
                                >
                                    Xoá
                                </button>

                                <NavLink
                                    to={'/warehouse/managestaff/changeInfor'}
                                    style={{
                                        background: 'red',
                                        color: 'white',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        padding: '0.5rem 0.5rem',
                                        border: 'none',
                                        borderRadius: '2px',
                                    }}
                                >
                                    Chỉnh sửa
                                </NavLink>
                            </th>
                        </tr>

                        <tr className={cx('body-table')}>
                            <th style={{ textAlign: 'center' }}>1</th>
                            <th>Trần Đức Khải</th>
                            <th>khaidt</th>
                            <th>0989789789</th>
                            <th style={{ textAlign: 'center' }}>
                                <button
                                    style={{
                                        background: 'blue',
                                        color: 'white',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        padding: '0.5rem 0.5rem',
                                        border: 'none',
                                        borderRadius: '2px',
                                    }}
                                >
                                    Xoá
                                </button>
                                <NavLink
                                    to={'/warehouse/managestaff/changeInfor'}
                                    style={{
                                        background: 'red',
                                        color: 'white',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        padding: '0.5rem 0.5rem',
                                        border: 'none',
                                        borderRadius: '2px',
                                    }}
                                >
                                    Chỉnh sửa
                                </NavLink>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default ManageStaff;
