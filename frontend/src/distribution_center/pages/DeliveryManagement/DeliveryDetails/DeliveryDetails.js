import React from 'react';
import styles from './DeliveryDetails.module.scss';
import classNames from 'classnames/bind';
import InforDetails from './InforDetails';
import DeliveryComment from './DeliveryComment';

const cx = classNames.bind(styles);

const DeliveryDetails = () => {
    return (
        <div className={cx('delivery-details')}>
            <div className={cx('delivery-details-header')}>
                <div className={cx('delivery-details-header-title')}>
                    <span className={cx('title')}>Thông tin chi tiết đơn hàng:</span>
                    <span className={cx('subtitle')}>A005442</span>
                </div>

                <div className={cx('delivery-details-header-button')}>
                    <button className={cx('journey-button', 'btn-infor')}>Hành trình đơn hàng</button>
                    <button className={cx('infor-button', 'btn-infor')}>Thông tin đơn hàng</button>
                    <button className={cx('comment-button', 'btn-infor')}>Bình luận đơn hàng</button>
                </div>
            </div>

            <div className={cx('delivery-details-main')}>
                <div className={cx('delivery-details-infor')}>
                    <InforDetails />
                </div>
                <div className={cx('delivery-details-comment')}>
                    <DeliveryComment />
                </div>
            </div>
        </div>
    );
};

export default DeliveryDetails;
