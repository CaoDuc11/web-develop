import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DeliveryTable.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const DeliveryTable = ({ deliveries }) => {
    return (
        <div>
            <div className={cx('employees-table')}>
                <div className={cx('top')}>
                    <div className={cx('title')}>Danh sách đơn hàng hôm nay</div>
                </div>
                <div className={cx('bottom')}>
                    {deliveries.length > 0 ? (
                        <table className={cx('table-list')}>
                            <thead>
                                <tr className={cx('header-table')}>
                                    <th style={{ textAlign: 'center' }}>MÃ ĐƠN HÀNG</th>
                                    <th>KHÁCH HÀNG</th>
                                    <th>ĐỊA CHỈ</th>
                                    <th>SỐ ĐIỆN THOẠI</th>
                                </tr>
                            </thead>

                            <tbody>
                                {deliveries.map((item, index) => (
                                    <tr className={cx('body-table')}>
                                        <th style={{ textAlign: 'center' }}>{index + 1}</th>
                                        <th>{item.senderName}</th>
                                        <th>{item.senderAddress}</th>
                                        <th>0987898768</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <h1 className={cx('warning')}>Chưa có đơn hàng để hiển thị.</h1>
                    )}
                </div>
                <div className={cx('see-details')}>
                    <Link to="/distribution/deliverymanagement" className={cx('link')}>
                        <span>See Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DeliveryTable;
