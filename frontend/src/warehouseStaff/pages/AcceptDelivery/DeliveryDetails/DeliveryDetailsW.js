import React from 'react';
import styles from './DeliveryDetailsW.module.scss';
import classNames from 'classnames/bind';
import InforDetailsW from './InforDetailsW';
import DeliveryCommentW from './DeliveryCommentW';

const cx = classNames.bind(styles);

const DeliveryDetailsW = () => {
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
                    <InforDetailsW />
                </div>
                <div className={cx('delivery-details-comment')}>
                    <DeliveryCommentW />
                </div>
            </div>
        </div>
    );
};

export default DeliveryDetailsW;