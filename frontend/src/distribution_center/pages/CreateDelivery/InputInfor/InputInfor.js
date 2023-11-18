import React from 'react';
import styles from './InputInfor.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const InputInfor = ({ text }) => {
    return (
        <div className={cx('formInput')}>
            <div className={cx('objectSender')}>
                <label for="name">{text}</label>
                <input type="text" name="name" id="name" placeholder="Nguyễn Văn A" />
            </div>

            <div className={cx('inforItem')}>
                <label for="number-phone">
                    Số điện thoại <i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="number-phone" id="number-phone" placeholder="Số điện thoại" />
            </div>

            <div className={cx('inforItem')}>
                <label for="address">
                    Địa chỉ <i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="address" id="address" placeholder="Đại học Công Nghệ - ĐHQGHN" />
            </div>

            <div className={cx('inforItem')}>
                <label for="province">
                    Tỉnh/Thành phố <i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="province" id="province" placeholder="Hà Nội" />
            </div>

            <div className={cx('inforItem')}>
                <label for="district">
                    Quận/Huyện <i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="district" id="district" placeholder="Cầu Giấy" />
            </div>

            <div className={cx('inforItem')}>
                <label for="sub-district">
                    Phường/Xã <i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="sub-district" id="sub-district" placeholder="Dịch Vọng" />
            </div>
        </div>
    );
};

export default InputInfor;
