import React from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets';
import { IoPerson, IoKeySharp } from 'react-icons/io5';

const cx = classNames.bind(styles);

const Login = () => {
    return (
        <div className={cx('loginSection')}>
            <div className={cx('login-background')}>
                <img src={images.login} alt="login" />
            </div>
            <div className={cx('login-container')}>
                <div className={cx('login-header')}>
                    <img src={images.logo} alt="logo" />
                    <h3 className={cx('title')}>Magic Post</h3>
                </div>

                <div className={cx('login-body')}>
                    <form action="">
                        <div className={cx('account', 'field')}>
                            <label className={cx('account-label', 'label')}>
                                <IoPerson />
                                <span>Tài khoản</span>
                            </label>
                            <div className={cx('control')}>
                                <input type="text" className={cx('input-account', 'input')} placeholder="Tài khoản" />
                            </div>
                        </div>

                        <div className={cx('password', 'field')}>
                            <label className={cx('account-label', 'label')}>
                                <IoKeySharp />
                                <span>Mật khẩu</span>
                            </label>
                            <div className={cx('control')}>
                                <input type="text" className={cx('password-account', 'input')} placeholder="Mật khẩu" />
                            </div>
                        </div>
                        <button type="submit" id="button" className={cx('btn-login')}>
                            <span>Đăng nhập</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
