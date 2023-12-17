import React from 'react';
import styles from './DeliveryDetails.module.scss';
import classNames from 'classnames/bind';
import { FaCommentDots } from 'react-icons/fa';

const cx = classNames.bind(styles);
const DeliveryComment = ({deliveryDetail,position}) => {
    return (
        <div className={cx('delivery-comment')}>
            <div className={cx('delivery-comment-content')}>
                <div className={cx('delivery-comment-content-header')}>
                    <FaCommentDots className={cx('icon-header')} />
                    <span className={cx('title-header')}>Phản hồi từ điểm tập kết </span>
                </div>
                <div className={cx('delivery-comment-content-main')}></div>
            </div>
        </div>
    );
};

export default DeliveryComment;
