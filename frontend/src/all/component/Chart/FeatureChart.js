import React from 'react';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import classNames from 'classnames/bind';
import ChangingProgressProvider from './ChangingProgressProvider';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styles from './FeatureChart.module.scss';
const cx = classNames.bind(styles);
const FeatureChart = () => {
    return (
        <div>
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
    );
};

export default FeatureChart;
