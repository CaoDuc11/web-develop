import React, { useRef, useState } from 'react';
import styles from './DeliveryList.module.scss';
import classNames from 'classnames/bind';
import { PiPrinterFill } from 'react-icons/pi';
import { HiDocumentPlus } from 'react-icons/hi2';
import { AiOutlineSearch } from 'react-icons/ai';
import DeliveryItem from './DeliveryItem';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useReactToPrint } from 'react-to-print';
import DeliveryReceipt from '../DeliveryReceipt/DeliveryReceipt';

const cx = classNames.bind(styles);

const DeliveryList = ({ deliveries, position, onClickHandlePostion, onClickDelete }) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: () => `@media print {
                           @page {
                              size: A6 landscape;
                              margin: 0;
                            }

                            body {
                              margin: 1.5cm;
                            }
                         }`,
    });

    return (
        <div className={cx('delivery-list')}>
            <div className={cx('search-header')}>
                <div className={cx('search')}>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Tìm kiếm"
                        className={cx('search-input')}
                    />
                    <AiOutlineSearch className={cx('icon-search')} />
                </div>
                <div style={{ display: 'none' }}>
                    <DeliveryReceipt ref={componentRef} />
                </div>
                <PiPrinterFill className={cx('icon-header')} onClick={handlePrint} />
                <HiDocumentPlus className={cx('icon-header')} />
            </div>

            <div className={cx('selecter-container')}>
                <select className={cx('select-status')}>
                    <option value="Mới tạo">Mới tạo</option>
                    <option value="Đang giao hàng">Đang giao hàng</option>
                    <option value="Đã giao hàng">Đã giao hàng</option>
                    <option value="Đã trả hàng">Đã trả hàng</option>
                    <option value="Đã hủy">Đã hủy</option>
                    <option value="Đã xóa">Đã xóa</option>
                </select>

                <span className={cx('pages')}>{`${position + 1} of ${deliveries.length}`}</span>
                <MdOutlineKeyboardArrowLeft className={cx('arrow-icon')} />
                <MdOutlineKeyboardArrowRight className={cx('arrow-icon')} />
            </div>

            <div className={cx('main-list')}>
                {deliveries.map((item, index) => (
                    <DeliveryItem
                        index={index}
                        item={item}
                        background={index === position ? 'hsl(200, 80%, 90%)' : 'white'}
                        onClickItem={onClickHandlePostion}
                        onClickDelete={onClickDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default DeliveryList;
