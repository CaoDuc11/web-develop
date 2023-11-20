import React from 'react';
import styles from './DeliveryList.module.scss';
import classNames from 'classnames/bind';
import { BsQrCodeScan } from 'react-icons/bs';
import { BsPersonCheck } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { PiPhoneCall } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const cx = classNames.bind(styles);

const DeliveryItem = () => {
    return (
        <div className={cx('delivery-item')}>
            <div className={cx('delivery-item-subitem')}>
                <BsQrCodeScan className={cx('delivery-item-subitem-icon')} />
                <span className={cx('delivery-item-subitem-title')}>Mã đơn hàng:</span>
                <span className={cx('delivery-item-subitem-infor')}>A005442</span>
            </div>
            <div className={cx('delivery-item-subitem')}>
                <BsPersonCheck className={cx('delivery-item-subitem-icon')} />
                <span className={cx('delivery-item-subitem-title')}>Người nhận:</span>
                <span className={cx('delivery-item-subitem-infor')}>Nguyễn Thị Mai Anh</span>
            </div>
            <div className={cx('delivery-item-subitem')}>
                <PiPhoneCall className={cx('delivery-item-subitem-icon')} />
                <span className={cx('delivery-item-subitem-title')}>Số điện thoại:</span>
                <span className={cx('delivery-item-subitem-infor')}>0345678678</span>
            </div>
            <div className={cx('delivery-item-subitem')}>
                <BiCalendar className={cx('delivery-item-subitem-icon')} />
                <span className={cx('delivery-item-subitem-title')}>Ngày tạo:</span>
                <span className={cx('delivery-item-subitem-infor')}>17/11/2023 - 11:20</span>
            </div>
            <div className={cx('delivery-item-subitem')}>
                <MdOutlineAttachMoney className={cx('delivery-item-subitem-icon')} />
                <span className={cx('delivery-item-subitem-title')}>Tổng cước:</span>
                <span className={cx('delivery-item-subitem-infor')}>123.000 vnđ</span>
            </div>

            <div className={cx('delivery-status')}>
                <button className={cx('btn-status')}>Gửi đơn</button>
                <button className={cx('btn-cancel')}>Hủy đơn</button>
                <RiDeleteBin6Line className={cx('icon-delete')} />
            </div>
        </div>
    );
};

export default DeliveryItem;
