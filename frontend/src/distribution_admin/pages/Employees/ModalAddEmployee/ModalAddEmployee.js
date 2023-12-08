import React, { useState } from 'react';
import styles from './ModalAddEmployee.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaAddressBook } from 'react-icons/fa';

const cx = classNames.bind(styles);

const ModalAddEmployee = ({ displayModal, onClickHandle }) => {
    return (
        <div style={{ display: displayModal }} className={cx('modal-add-employee')}>
            <div className={cx('modal-background')}>
                <div className={cx('modal-container')}>
                    <div className={cx('modal-header')}>
                        <span>Thông tin nhân viên</span>
                    </div>
                    <div className={cx('modal-body')}>
                        <div className={cx('inforItem')}>
                            <label for="fullname">
                                Họ và tên <i style={{ color: 'red' }}>*</i>
                            </label>
                            <input type="text" name="fullname" id="fullname" placeholder="" />
                        </div>
                        <div className={cx('inforItem')}>
                            <label for="username">
                                Tên đăng nhập <i style={{ color: 'red' }}>*</i>
                            </label>
                            <input type="text" name="username" id="username" placeholder="" />
                        </div>
                        <div className={cx('inforItem')}>
                            <label for="password">
                                Mật khẩu <i style={{ color: 'red' }}>*</i>
                            </label>
                            <input type="password" name="password" id="password" placeholder="" />
                        </div>
                        <div className={cx('inforItem')}>
                            <label for="password-confirm">
                                Xác nhận mật khẩu <i style={{ color: 'red' }}>*</i>
                            </label>
                            <input type="password" name="password-confirm" id="password-confirm" placeholder="" />
                        </div>
                        <div className={cx('inforItem')}>
                            <label for="number-phone">
                                Số điện thoại <i style={{ color: 'red' }}>*</i>
                            </label>
                            <input type="text" name="numberphone" id="numberphone" placeholder="" />
                        </div>
                    </div>
                    <div className={cx('modal-footer')}>
                        <div className={cx('button-red')} onClick={onClickHandle}>
                            <IoMdClose className={cx('icon')} />
                            <span>ĐÓNG</span>
                        </div>
                        <div className={cx('button-green')}>
                            <FaAddressBook className={cx('icon')} />
                            <span>THÊM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAddEmployee;
