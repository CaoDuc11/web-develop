import React from 'react'
import { BiCalendar } from 'react-icons/bi';
import { BsPersonCheck, BsQrCodeScan } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { PiPhoneCall } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import styles from './DeliveryListW.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const DeliveryItemW = () => {
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
                <button className={cx('btn-status')}>Xác nhận</button>
                <button className={cx('btn-cancel')}>Phản hồi</button>
            </div>
        </div>
  )
}

export default DeliveryItemW
