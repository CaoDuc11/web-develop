import React from 'react';
import styles from './DashboardHeader.module.scss';
import classNames from 'classnames/bind';
import { IoDocumentText } from 'react-icons/io5';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { MdShoppingCart } from 'react-icons/md';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { IoWarning } from 'react-icons/io5';
const cx = classNames.bind(styles);
const DashboardHeader = () => {
    return (
        <div className={cx('dashboard-header')}>
            <div className={cx('delivery-nhap', 'header-section')}>
                <div className={cx('header-content')}>
                    <div className={cx('title1')}>
                        <span className={cx('title-content')}>Đơn Hàng Đã Tạo</span>
                    </div>
                    <div className={cx('title2')}>
                        <span className={cx('number')}>100</span>
                        <div className={cx('rate')}>
                            <IoIosArrowRoundUp className={cx('arrow-icon')} />
                            <span>37%</span>
                        </div>
                        <span className={cx('since-last-month')}>Since last month</span>
                    </div>
                    <div className={cx('see-details')}>
                        <span>See Details</span>
                    </div>
                </div>
                <div className={cx('header-icon')}>
                    <div className={cx('div-icon')} style={{ background: '#d144fb' }}>
                        <IoDocumentText className={cx('icon')} />
                    </div>
                </div>
            </div>
            <div className={cx('delivery-gui', 'header-section')}>
                <div className={cx('header-content')}>
                    <div className={cx('title1')}>
                        <span className={cx('title-content')}>Đơn hàng đã nhận</span>
                    </div>
                    <div className={cx('title2')}>
                        <span className={cx('number')}>150</span>
                        <div className={cx('rate')}>
                            <IoIosArrowRoundUp className={cx('arrow-icon')} />
                            <span>20%</span>
                        </div>
                        <span className={cx('since-last-month')}>Since last month</span>
                    </div>
                    <div className={cx('see-details')}>
                        <span>See Details</span>
                    </div>
                </div>
                <div className={cx('header-icon')}>
                    <div className={cx('div-icon')} style={{ background: '#7369ff' }}>
                        <MdShoppingCart className={cx('icon')} />
                    </div>
                </div>
            </div>
            <div className={cx('delivery-success', 'header-section')}>
                <div className={cx('header-content')}>
                    <div className={cx('title1')}>
                        <span className={cx('title-content')}>Đã Giao Thành Công</span>
                    </div>
                    <div className={cx('title2')}>
                        <span className={cx('number')}>100</span>
                        <div className={cx('rate')}>
                            <IoIosArrowRoundUp className={cx('arrow-icon')} />
                            <span>37%</span>
                        </div>
                        <span className={cx('since-last-month')}>Since last month</span>
                    </div>
                    <div className={cx('see-details')}>
                        <span>See Details</span>
                    </div>
                </div>
                <div className={cx('header-icon')}>
                    <div className={cx('div-icon')} style={{ background: '#8afb7f' }}>
                        <FaRegCalendarCheck className={cx('icon')} />
                    </div>
                </div>
            </div>
            <div className={cx('delivery-cancel', 'header-section')}>
                <div className={cx('header-content')}>
                    <div className={cx('title1')}>
                        <span className={cx('title-content')}>Đã Hủy</span>
                    </div>
                    <div className={cx('title2')}>
                        <span className={cx('number')}>100</span>
                        <div className={cx('rate')}>
                            <IoIosArrowRoundUp className={cx('arrow-icon')} />
                            <span>37%</span>
                        </div>
                        <span className={cx('since-last-month')}>Since last month</span>
                    </div>
                    <div className={cx('see-details')}>
                        <span>See Details</span>
                    </div>
                </div>
                <div className={cx('header-icon')}>
                    <div className={cx('div-icon')} style={{ background: 'hsl(0, 70%, 60%)' }}>
                        <IoWarning className={cx('icon')} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
