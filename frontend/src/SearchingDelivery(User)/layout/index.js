import React from 'react';
import Header from './components/Header/Header';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className={cx('layout')}>
                <Header />
                <div className={cx('container')}>
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
