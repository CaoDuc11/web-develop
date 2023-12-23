import React from 'react';
import styles from './Delivery.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineCheck } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const DeliveryFee = ({ handleFee, handleSubmit }) => {
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
                <input type="text" name="cod" id="code" placeholder="Tiền COD (vnd) " onChange={handleFee} />
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
                <input type="text" name="feeMain" id="delivery-fee" placeholder="vnd" onChange={handleFee} />
            </div>

            <div className={cx('inforItem')}>
                <label for="delivery-sub-fee">
                    Phụ phí<i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="feeSub" id="delivery-sub-fee" placeholder="vnd " onChange={handleFee} />
            </div>

            <div className={cx('inforItem')}>
                <label for="gtgt">
                    Cước GTGT<i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="gtgt" id="gtgt" placeholder="vnd" onChange={handleFee} />
            </div>

            <div className={cx('inforItem')}>
                <label for="vat">
                    Tổng cước VAT<i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="vat" id="vat" placeholder="vnd" onChange={handleFee} />
            </div>

            <div className={cx('inforItem')}>
                <label for="other">
                    Phụ phí khác<i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="other" id="vat" placeholder="vnd" onChange={handleFee} />
            </div>

            <div className={cx('labelDiv')}>
                <label for="label-detail" className={cx('label-detail')}>
                    Tổng thu phí:
                </label>

                <span className={cx('total')}>123.000 (vnđ)</span>
            </div>

            <div className={cx('submit')}>
                <NavLink to={'/distribution/deliverymanagement'} className={cx('submit-button')} onClick={handleSubmit}>
                    <AiOutlineCheck className={cx('icon-pick')} />
                    <span>Đồng ý</span>
                </NavLink>
            </div>
        </div>
    );
};

export default DeliveryFee;
