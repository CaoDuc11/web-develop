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
    IoDocumentTextSharp,
} from 'react-icons/io5';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <section className={cx('sidebarSection')}>
            <div className={cx('sideBar')}>
                <div className={cx('siderHeader')}>
                    <span className={cx('sidebar_label')}>Chung</span>
                    <div className={cx('sidebar-list')}>
                        <ul className={cx('sidebar_list_ul')}>
                            <li>
                                <NavLink to={'/warehouse/staff/dashboard'} className={cx('sidebar-item')}>
                                    <IoHome className={cx('sidebar-icon')} />
                                    <span className={cx('sidebar_title')}>Trang chủ</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={'/warehouse/staff/createDelivery'} className={cx('sidebar-item')}>
                                    <IoDocumentTextSharp className={cx('sidebar-icon')} />
                                    <span className={cx('sidebar_title')}>Tạo đơn hàng</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={'/warehouse/staff/acceptDelivery'} className={cx('sidebar-item')}>
                                    <AiOutlineDeliveredProcedure className={cx('sidebar-icon')} />
                                    <span className={cx('sidebar_title')}>Xác nhận đơn hàng</span>
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
