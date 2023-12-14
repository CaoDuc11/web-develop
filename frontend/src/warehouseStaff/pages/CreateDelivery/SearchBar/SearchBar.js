import React from 'react';
import styles from './SearchBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SearchBar = () => {
    return (
        <div className={cx('search-header')}>
            <div className={cx('select-container')}>
                <select className={cx('select-filter')}>
                    <option value="Mã đơn hàng">Mã đơn hàng</option>
                    <option value="Trạng thái">Trạng thái</option>
                    <option value="Số điện thoại">Số điện thoại</option>
                    <option value="Tên khách hàng">Tên khách hàng</option>
                    <option value="Tên người nhận">Tên người nhận</option>
                </select>
            </div>

            <div className={cx('search')}>
                <input
                    name="search-input"
                    id="search"
                    className={cx('search-input')}
                    placeholder="Tìm kiếm theo mã đơn hàng, trạng thái, tên khách hàng,..."
                />
            </div>
        </div>
    );
};

export default SearchBar;
