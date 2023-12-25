import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { CiLogout } from 'react-icons/ci';
import images from '~/assets';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <section className={cx('headerSection')}>
            <header className={cx('header')}>
                <div className="logoDiv">
                    <Link to="/warehouse/staff/dashboard" className={cx('logo-link')}>
                        <img src={images.logo} alt="logo" />
                        <h1 className={cx('logo-text')}>Magic Post</h1>
                    </Link>
                </div>

                <div className={cx('contant')}></div>

                <div className={cx('nav-end')}>
                    <div className={cx('buttons')}>
                        <button className="btn logout_button">
                            <CiLogout className={cx('icon logout_icon')} />
                            <span className={cx('title')}>Đăng Xuất</span>
                        </button>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Header;
