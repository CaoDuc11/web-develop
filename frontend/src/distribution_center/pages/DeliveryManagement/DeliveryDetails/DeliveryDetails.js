import { React, useState } from 'react';
import styles from './DeliveryDetails.module.scss';
import classNames from 'classnames/bind';
import InforDetails from './InforDetails';
import DeliveryComment from './DeliveryComment';
import JourneyDelevery from './JourneyDelevery';

const cx = classNames.bind(styles);

const DeliveryDetails = ({ deliveryDetail, position }) => {
    const [displayDetail, setDisplayDetail] = useState(true);
    const onClickHandle = () => {
        setDisplayDetail(!displayDetail);
    };
    return (
        <div className={cx('delivery-details')}>
            <div className={cx('delivery-details-header')}>
                <div className={cx('delivery-details-header-title')}>
                    <span className={cx('title')}>Thông tin chi tiết đơn hàng:</span>
                    <span className={cx('subtitle')}>A005442</span>
                </div>

                <div className={cx('delivery-details-header-button')}>
                    <button
                        className={cx('journey-button', 'btn-infor')}
                        style={{
                            color: !displayDetail && 'hsl(199, 100%, 33%)',
                            borderColor: !displayDetail && 'hsl(199, 100%, 33%)',
                        }}
                        onClick={onClickHandle}
                    >
                        Hành trình đơn hàng
                    </button>
                    <button
                        className={cx('infor-button', 'btn-infor')}
                        style={{
                            color: displayDetail && 'hsl(199, 100%, 33%)',
                            borderColor: displayDetail && 'hsl(199, 100%, 33%)',
                        }}
                        onClick={onClickHandle}
                    >
                        Thông tin đơn hàng
                    </button>
                    <button className={cx('comment-button', 'btn-infor')}>Bình luận đơn hàng</button>
                </div>
            </div>

            <div className={cx('delivery-details-main')}>
                <div className={cx('delivery-details-infor')}>
                    {displayDetail ? (
                        <InforDetails item={deliveryDetail} index={position} />
                    ) : (
                        <JourneyDelevery item={deliveryDetail} index={position} />
                    )}
                </div>
                <div className={cx('delivery-details-comment')}>
                    <DeliveryComment item={deliveryDetail} index={position} />
                </div>
            </div>
        </div>
    );
};

export default DeliveryDetails;
