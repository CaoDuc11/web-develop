import React from 'react';
import Layout from '~/warehouseStaff/layout';
import styles from './DashboardWarehouseStaff.module.scss';
import classNames from 'classnames/bind';
import { IoDocumentText } from 'react-icons/io5';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { MdShoppingCart } from 'react-icons/md';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { IoWarning } from 'react-icons/io5';
import ChangingProgressProvider from '../../../all/component/Chart/ChangingProgressProvider';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const cx = classNames.bind(styles);
const WarehouseStaff = () => {
    return (
        <Layout>
            <div className={cx('dashboard')}>
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
                <div className={cx('dashboard-content')}>
                    <div className={cx('featured')}>
                        <div className={cx('top')}>
                            <h1 className={cx('title')}>Hôm nay</h1>
                            <IoEllipsisVerticalSharp />
                        </div>
                        <div className={cx('bottom')}>
                            <div className={cx('featured-chart')}>
                                <ChangingProgressProvider values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}>
                                    {(percentage) => (
                                        <CircularProgressbar
                                            value={percentage}
                                            text={`${percentage}%`}
                                            styles={buildStyles({
                                                pathTransitionDuration: 0.95,
                                                trailColor: '#82ca9d',
                                                pathColor: '#210876',
                                                textColor: '#210876',
                                            })}
                                        />
                                    )}
                                </ChangingProgressProvider>
                            </div>
                            <p className={cx('title')}>Số đơn hàng hôm nay</p>
                            <p className={cx('amount')}>100</p>
                            <p className={cx('desc')}>Thông tin chi tiết</p>
                            <div className={cx('summary')}>
                                <div className={cx('items')}>
                                    <div className={cx('item-title')}>Hàng đi</div>
                                    <div className={cx('result-amount')}>
                                        <p className={cx('negative')}>50</p>
                                    </div>
                                </div>
                                <div className={cx('items')}>
                                    <div className={cx('item-title')}>Hàng đến</div>
                                    <div className={cx('result-amount')}>
                                        <p className={cx('positive')}>50</p>
                                    </div>
                                </div>
                                <div className={cx('items')}>
                                    <div className={cx('item-title')}>Đã xử lý</div>
                                    <div className={cx('result-amount')}>
                                        <p className={cx('neutral')}>69</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default WarehouseStaff;
