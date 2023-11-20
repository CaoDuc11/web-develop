import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { MdShoppingCart, MdOutlineShoppingCart } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';
import { TiArrowSortedDown } from 'react-icons/ti';
import { TiArrowSortedUp } from 'react-icons/ti';
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
    const [donhangClass, setDonHangClass] = useState('');
    const [displaySublist, setDisplaySubList] = useState('');
    const [subTitleClass, setSubTitleClass] = useState('');

    function addDonHangClass() {
        if (donhangClass === 'donhang-item') {
            setDonHangClass('');
            setDisplaySubList('');
            setSubTitleClass('');
        } else {
            setDonHangClass('donhang-item');
            setDisplaySubList('display');
        }
    }

    function addSubTitleClass(item, event) {
        event.stopPropagation();
        // eslint-disable-next-line default-case
        switch (item) {
            case 1:
                setSubTitleClass('create-order');
                break;
            case 2:
                setSubTitleClass('manage-inventory');
                break;
            case 3:
                setSubTitleClass('manage-status');
                break;
        }
    }

    return (
        <section className={cx('sidebarSection')}>
            <div className={cx('sideBar')}>
                <div className={cx('siderHeader')}>
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
                    <span className={cx('sidebar_label')}>Xử lí hàng hóa</span>
                    <div className={cx('sidebar-list')}>
                        <ul className={cx('sidebar_list_ul')}>
                            <li>
                                <div className={cx(donhangClass)} onClick={addDonHangClass}>
                                    <NavLink to={''} className={cx('sidebar-item')}>
                                        {donhangClass === 'donhang-item' ? (
                                            <IoDocumentTextOutline
                                                style={{ color: 'hsl(199, 100%, 33%)' }}
                                                className={cx('sidebar-icon')}
                                            />
                                        ) : (
                                            <IoDocumentText className={cx('sidebar-icon')} />
                                        )}
                                        <span className={cx('sidebar_title', 'subclass')}>Đơn hàng</span>
                                        {donhangClass === 'donhang-item' ? (
                                            <TiArrowSortedUp
                                                style={{ color: 'hsl(199, 100%, 33%)' }}
                                                className={cx('sidebar-icon-updown')}
                                            />
                                        ) : (
                                            <TiArrowSortedDown className={cx('sidebar-icon-updown')} />
                                        )}
                                    </NavLink>

                                    <div className={cx('sidebar-sublist', displaySublist)}>
                                        <ul className={cx('sidebar_list_ul')}>
                                            <li className={cx('subtitle1', subTitleClass)}>
                                                <NavLink
                                                    to={'/distribution/createdelivery'}
                                                    className={cx('sidebar-item')}
                                                    onClick={(e) => addSubTitleClass(1, e)}
                                                >
                                                    <RiArrowRightSLine className={cx('sidebar-icon')} />
                                                    <span className={cx('sidebar_title')}>Tạo đơn hàng</span>
                                                </NavLink>
                                            </li>

                                            <li className={cx('subtitle2', subTitleClass)}>
                                                <NavLink
                                                    to={'/distribution/deliverymanagement'}
                                                    className={cx('sidebar-item')}
                                                    onClick={(e) => addSubTitleClass(2, e)}
                                                >
                                                    <RiArrowRightSLine className={cx('sidebar-icon')} />
                                                    <span className={cx('sidebar_title')}>Quản lý đơn hàng</span>
                                                </NavLink>
                                            </li>

                                            <li className={cx('subtitle3', subTitleClass)}>
                                                <NavLink
                                                    to={''}
                                                    className={cx('sidebar-item')}
                                                    onClick={(e) => addSubTitleClass(3, e)}
                                                >
                                                    <RiArrowRightSLine className={cx('sidebar-icon')} />
                                                    <span className={cx('sidebar_title')}>Quản lý trạng thái</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <NavLink to={'/distribution/dashboard'} className={cx('sidebar-item')}>
                                    <MdShoppingCart className={cx('sidebar-icon')} />
                                    <span className={cx('sidebar_title')}>Hàng nhận</span>
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
