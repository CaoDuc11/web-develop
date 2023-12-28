import React from 'react';
import styles from './SearchBar.module.scss';
import classNames from 'classnames/bind';
import { PiPrinterFill } from 'react-icons/pi';
import { IoPaperPlane } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineStop } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';

const cx = classNames.bind(styles);

const SearchBar = () => {
    return (
        <div>
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
            <div className={cx('handle-button')}>
                <div className={cx('button-green')}>
                    <PiPrinterFill className={cx('icon')} />
                    <span>IN</span>
                </div>

                <div className={cx('button-green')}>
                    <IoPaperPlane className={cx('icon')} />
                    <span>GỬI ĐƠN</span>
                </div>

                <div className={cx('button-red')}>
                    <IoMdClose className={cx('icon')} />
                    <span>XÓA ĐƠN</span>
                </div>

                <div className={cx('button-red')}>
                    <AiOutlineStop className={cx('icon')} />
                    <span>HỦY VẬN ĐƠN</span>
                </div>

                <div className={cx('button-pink')}>
                    <RiDeleteBin6Line className={cx('icon')} />
                    <span>LỊCH SỬ XÓA</span>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
