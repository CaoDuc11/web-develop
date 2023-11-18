import React from 'react';
import styles from './Delivery.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineCheck } from 'react-icons/ai';

const cx = classNames.bind(styles);

const DeliveryFee = () => {
    return (
        <div className={cx('formDeliveryFee')}>
            <div className={cx('labelDiv')}>
                <label for="label-detail" className={cx('label-detail')}>
                    4. Dịch vụ cộng thêm
                </label>
            </div>

            <div className={cx('inforItem')}>
                <label for="code">
                    Tiền COD<i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="code" id="code" placeholder="Tiền COD (vnd) " />
            </div>

            <div className={cx('labelDiv')}>
                <label for="label-detail" className={cx('label-detail')}>
                    5. Cước phí
                </label>
            </div>

            <div className={cx('inforItem')}>
                <label for="delivery-fee">
                    Cước chính<i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="delivery-fee" id="delivery-fee" placeholder="vnd" />
            </div>

            <div className={cx('inforItem')}>
                <label for="delivery-sub-fee">
                    Phụ phí<i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="delivery-sub-fee" id="delivery-sub-fee" placeholder="vnd " />
            </div>

            <div className={cx('inforItem')}>
                <label for="gtgt">
                    Cước GTGT<i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="gtgt" id="gtgt" placeholder="vnd" />
            </div>

            <div className={cx('inforItem')}>
                <label for="vat">
                    Tổng cước VAT<i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="vat" id="vat" placeholder="vnd" />
            </div>

            <div className={cx('labelDiv')}>
                <label for="label-detail" className={cx('label-detail')}>
                    Tổng thu phí:
                </label>

                <span className={cx('total')}>123.000 (vnđ)</span>
            </div>

            <div className={cx('submit')}>
                <button className={cx('submit-button')}>
                    <AiOutlineCheck className={cx('icon-pick')} />
                    <span>Đồng ý</span>
                </button>
            </div>
        </div>
    );
};

export default DeliveryFee;
