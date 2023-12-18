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
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';

const cx = classNames.bind(styles);

const DeliveryList = (props) => {
    const {
        deliveries,
        position,
        onClickHandlePostion,
        onClickDelete,
        onClickUpdate,
        onClickChange,
        transactionStatus,
    } = props;
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

    const status = [
        { label: 'Mới tạo', value: '1' },
        { label: 'Đang giao hàng', value: '2' },
        { label: 'Đã giao hàng', value: '3' },
        { label: 'Đã trả hàng', value: '4' },
        { label: 'Đã hủy', value: '0' },
    ];

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
                    <DeliveryReceipt ref={componentRef} {...deliveries[position]} />
                </div>
                <PiPrinterFill className={cx('icon-header')} onClick={handlePrint} />
                <HiDocumentPlus className={cx('icon-header')} />
            </div>

            <div className={cx('selecter-container')}>
                <select className={cx('select-status')} onChange={(e) => onClickChange(e)}>
                    {status.map((item, index) => (
                        <option value={item.value}>{item.label}</option>
                    ))}
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
                        onClickUpdate={onClickUpdate}
                        transactionStatus={transactionStatus}
                    />
                ))}
            </div>
        </div>
    );
};

export default DeliveryList;
