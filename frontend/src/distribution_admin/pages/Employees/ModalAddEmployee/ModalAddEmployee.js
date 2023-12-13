import React, { useEffect, useState } from 'react';
import styles from './ModalAddEmployee.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaAddressBook } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { CreateEmployee } from '~/all/features/AdminDistributionSlice';

const cx = classNames.bind(styles);

const ModalAddEmployee = ({ displayModal, onClickHandle }) => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');
    const dispatch = useDispatch();
    const { isError, isSuccess, isLoading, message, userList } = useSelector((state) => state.adminDistribution);

    useEffect(() => {
        if (isSuccess) {
        }
    }, [isSuccess]);

    const CreateUser = (e) => {
        e.preventDefault();
        dispatch(CreateEmployee({ fullname, email, username, password, password_confirm }));
        onClickHandle();
    };

    return (
        <div style={{ display: displayModal }} className={cx('modal-add-employee')}>
            <div className={cx('modal-background')}>
                <div className={cx('modal-container')}>
                    <div className={cx('modal-header')}>
                        <span>Thông tin nhân viên</span>
                    </div>
                    <form onSubmit={CreateUser}>
                        <div className={cx('modal-body')}>
                            <div className={cx('inforItem')}>
                                <label for="fullname">
                                    Họ và tên <i style={{ color: 'red' }}>*</i>
                                </label>
                                <input
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    placeholder=""
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                />
                            </div>
                            <div className={cx('inforItem')}>
                                <label for="email">
                                    email <i style={{ color: 'red' }}>*</i>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder=""
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={cx('inforItem')}>
                                <label for="username">
                                    Tài khoản <i style={{ color: 'red' }}>*</i>
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder=""
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className={cx('inforItem')}>
                                <label for="password">
                                    Mật khẩu <i style={{ color: 'red' }}>*</i>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={cx('inforItem')}>
                                <label for="password-confirm">
                                    Xác nhận mật khẩu <i style={{ color: 'red' }}>*</i>
                                </label>
                                <input
                                    type="password"
                                    name="password-confirm"
                                    id="password-confirm"
                                    placeholder=""
                                    value={password_confirm}
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('modal-footer')}>
                            <div className={cx('button-red')}>
                                <IoMdClose className={cx('icon')} />
                                <span>ĐÓNG</span>
                            </div>
                            <button className={cx('button-green')} type="submit">
                                <FaAddressBook className={cx('icon')} />
                                <span>THÊM</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalAddEmployee;
