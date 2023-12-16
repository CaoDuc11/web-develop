import React, { useEffect, useState } from 'react';
import styles from './InputInfor.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const InputInfor = ({ handleInforCustomer }) => {
    return (
        <div>
            <div className={cx('formInput')}>
                <div className={cx('objectSender')}>
                    <label for="name">Người gửi</label>
                    <input
                        type="text"
                        name="senderName"
                        id="name"
                        placeholder="Nguyễn Văn A"
                        onChange={handleInforCustomer}
                    />
                </div>

                <div className={cx('inforItem')}>
                    <label for="number-phone">
                        Số điện thoại <i style={{ color: 'red' }}>*</i>
                    </label>
                    <input
                        type="text"
                        name="senderPhone"
                        id="number-phone"
                        placeholder="Số điện thoại"
                        onChange={handleInforCustomer}
                    />
                </div>

                <div className={cx('inforItem')}>
                    <label for="address">
                        Địa chỉ <i style={{ color: 'red' }}>*</i>
                    </label>
                    <input
                        type="text"
                        name="senderAddress"
                        id="address"
                        placeholder="Đại học Công Nghệ - ĐHQGHN"
                        onChange={handleInforCustomer}
                    />
                </div>

                <div className={cx('inforItem')}>
                    <label for="province">
                        Tỉnh/Thành phố <i style={{ color: 'red' }}>*</i>
                    </label>
                    <input
                        type="text"
                        name="senderProvince"
                        id="province"
                        placeholder="Hà Nội"
                        onChange={handleInforCustomer}
                    />
                </div>

                <div className={cx('inforItem')}>
                    <label for="district">
                        Quận/Huyện <i style={{ color: 'red' }}>*</i>
                    </label>
                    <input
                        type="text"
                        name="senderDistrict"
                        id="district"
                        placeholder="Cầu Giấy"
                        onChange={handleInforCustomer}
                    />
                </div>

                <div className={cx('inforItem')}>
                    <label for="sub-district">
                        Phường/Xã <i style={{ color: 'red' }}>*</i>
                    </label>
                    <input
                        type="text"
                        name="senderWard"
                        id="sub-district"
                        placeholder="Dịch Vọng"
                        onChange={handleInforCustomer}
                    />
                </div>
            </div>

            <div className={cx('formInput')}>
                <div className={cx('objectSender')}>
                    <label for="name">Người nhận</label>
                    <input
                        type="text"
                        name="receiverName"
                        id="name"
                        placeholder="Nguyễn Văn A"
                        onChange={handleInforCustomer}
                    />
                </div>

                <div className={cx('inforItem')}>
                    <label for="number-phone">
                        Số điện thoại <i style={{ color: 'red' }}>*</i>
                    </label>
                    <input
                        type="text"
                        name="receiverPhone"
                        id="number-phone"
                        placeholder="Số điện thoại"
                        onChange={handleInforCustomer}
                    />
                </div>

                <div className={cx('inforItem')}>
                    <label for="address">
                        Địa chỉ <i style={{ color: 'red' }}>*</i>
                    </label>
                    <input
                        type="text"
                        name="receiverAddress"
                        id="address"
                        placeholder="Đại học Công Nghệ - ĐHQGHN"
                        onChange={handleInforCustomer}
                    />
                </div>

                <div className={cx('inforItem')}>
                    <label for="province">
                        Tỉnh/Thành phố <i style={{ color: 'red' }}>*</i>
                    </label>
                    <input
                        type="text"
                        name="receiverProvince"
                        id="province"
                        placeholder="Hà Nội"
                        onChange={handleInforCustomer}
                    />
                </div>

                <div className={cx('inforItem')}>
                    <label for="district">
                        Quận/Huyện <i style={{ color: 'red' }}>*</i>
                    </label>
                    <input
                        type="text"
                        name="receiverDistrict"
                        id="district"
                        placeholder="Cầu Giấy"
                        onChange={handleInforCustomer}
                    />
                </div>

                <div className={cx('inforItem')}>
                    <label for="sub-district">
                        Phường/Xã <i style={{ color: 'red' }}>*</i>
                    </label>
                    <input
                        type="text"
                        name="receiverWard"
                        id="sub-district"
                        placeholder="Dịch Vọng"
                        onChange={handleInforCustomer}
                    />
                </div>
            </div>
        </div>
    );
};

export default InputInfor;
