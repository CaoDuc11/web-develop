import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { IoMdPerson } from 'react-icons/io';
import { IoHome, IoStatsChart } from 'react-icons/io5';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <section className={cx('sidebarSection')}>
            <div className={cx('sideBar')}>
                <div className={cx('siderHeader')} style={{ marginTop: '3rem' }}>
                    <span className={cx('sidebar_label')}>Chung</span>
                    <div className={cx('sidebar-list')}>
                        <ul className={cx('sidebar_list_ul')}>
                            <li>
                                <NavLink to={'/distribution/dashboard'} className={cx('sidebar-item')}>
                                    <IoHome className={cx('sidebar-icon')} />
                                    <span className={cx('sidebar_title')}>Trang chủ</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={'/distribution/dashboard'} className={cx('sidebar-item')}>
                                    <IoStatsChart className={cx('sidebar-icon')} />
                                    <span className={cx('sidebar_title')}>Thống kê</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={cx('siderMain')}>
                    <span className={cx('sidebar_label')}>Quản lý nhân viên</span>
                    <div className={cx('sidebar-list')}>
                        <ul className={cx('sidebar_list_ul')}>
                            <li>
                                <NavLink to={'/admin/distribution/employees'} className={cx('sidebar-item')}>
                                    <IoMdPerson className={cx('sidebar-icon')} />
                                    <span className={cx('sidebar_title')}>Nhân viên</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
