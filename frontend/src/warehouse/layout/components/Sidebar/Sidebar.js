import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { MdShoppingCart, MdOutlineShoppingCart } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';
import { TiArrowSortedDown } from 'react-icons/ti';
import { TiArrowSortedUp } from 'react-icons/ti';
import { GrUserManager } from 'react-icons/gr';
import {
    IoHome,
    IoStatsChart,
    IoDocumentText,
    IoHomeOutline,
    IoStatsChartOutline,
    IoDocumentTextOutline,
} from 'react-icons/io5';

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
                                <NavLink to={'/warehouse/dashboard'} className={cx('sidebar-item')}>
                                    <IoHome className={cx('sidebar-icon')} />
                                    <span className={cx('sidebar_title')}>Trang chủ</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={'/warehouse/statistic'} className={cx('sidebar-item')}>
                                    <IoStatsChart className={cx('sidebar-icon')} />
                                    <span className={cx('sidebar_title')}>Thống kê</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={cx('siderMain')}>
                    <span className={cx('sidebar_label')}>Quản lí nhân viên</span>
                    <div className={cx('sidebar-list')}>
                        <ul className={cx('sidebar_list_ul')}>
                            <li>
                                <NavLink to={'/warehouse/managestaff'} className={cx('sidebar-item')}>
                                    <GrUserManager className={cx('sidebar-icon')} />
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
