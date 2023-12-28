import React from 'react';
import styles from './ReceivedTable.module.scss';
import classNames from 'classnames/bind';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoPaperPlane } from 'react-icons/io5';

const cx = classNames.bind(styles);
const Button = ({ item, onClick }) => {
    switch (item.journeyStatus) {
        case '6':
            return (
                <button
                    style={{
                        background: 'rgb(255, 95, 31)',
                        color: 'white',
                        fontSize: '13px',
                        fontWeight: '500',
                        padding: '0.4rem 0.5rem',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: 'pointer',
                    }}
                    onClick={() => onClick(item)}
                >
                    Xác nhận
                </button>
            );
        case '7':
            return (
                <button
                    style={{
                        background: 'white',
                        color: 'rgb(51,255,51)',
                        fontSize: '14px',
                        fontWeight: '500',
                        padding: '0.4rem 0.5rem',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: 'pointer',
                    }}
                >
                    Đã tới điểm giao dịch!
                </button>
            );
        case '8':
            return (
                <button
                    style={{
                        background: 'white',
                        color: 'hsl(187, 85%, 43%)',
                        fontSize: '14px',
                        fontWeight: '500',
                        padding: '0.4rem 0.5rem',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: 'pointer',
                    }}
                >
                    Đã chuyển hàng tới Shipper!
                </button>
            );
        case '9':
            return (
                <button
                    style={{
                        background: 'white',
                        color: 'hsl(260, 50%, 60%)',
                        fontSize: '14px',
                        fontWeight: '500',
                        padding: '0.4rem 0.5rem',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: 'pointer',
                    }}
                >
                    Giao dịch thành công!
                </button>
            );
        case '0':
            return (
                <button
                    style={{
                        background: 'white',
                        color: 'rgb(222, 46, 46)',
                        fontSize: '14px',
                        fontWeight: '500',
                        padding: '0.4rem 0.5rem',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: 'pointer',
                    }}
                >
                    Giao dịch không thành công!
                </button>
            );
        default:
            return null;
    }
};

const Content = ({ item, onClick, selectConfirm }) => {
    switch (item.journeyStatus) {
        case '6':
            return (
                <select disabled className={cx('select-filter')}>
                    <option value="Mã đơn hàng">Chờ xác nhận</option>
                </select>
            );
        case '7':
            return (
                <button
                    style={{
                        background: 'rgb(51,255,51)',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '500',
                        padding: '0.4rem 0.5rem',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: 'pointer',
                    }}
                    onClick={() => onClick(item)}
                >
                    Gửi tới khách hàng
                </button>
            );
        case '8':
            return (
                <select className={cx('select-filter')} onChange={(e) => selectConfirm(e, item)}>
                    <option value="">---XÁC NHẬN GIAO DỊCH---</option>
                    <option value="success">GIAO DỊCH THÀNH CÔNG</option>
                    <option value="error">GIAO DỊCH THẤT BẠI</option>
                </select>
            );
        case '9':
            return (
                <div className={cx('button-XL')} style={{ background: 'rgb(222, 46, 46)' }}>
                    <RiDeleteBin6Line className={cx('icon')} />
                    <span>XÓA</span>
                </div>
            );
        case '0':
            return (
                <div className={cx('button-XL')} style={{ background: 'rgb(10, 130, 60)' }}>
                    <IoPaperPlane className={cx('icon')} />
                    <span>HOÀN ĐƠN</span>
                </div>
            );
        default:
            return null;
    }
};

const ReceivedTable = (props) => {
    const { deliveriesShip, handleOpen, onClick, selectConfirm } = props;
    return (
        <div className={cx('received-table')}>
            <table className={cx('table-list')}>
                <thead>
                    <tr className={cx('header-table')}>
                        <th>MÃ ĐƠN HÀNG</th>
                        <th>KHÁCH HÀNG</th>
                        <th>NGƯỜI NHẬN</th>
                        <th style={{ width: '20rem', textAlign: 'start' }}>ĐỊA CHỈ GIAO HÀNG</th>
                        <th>SỐ ĐIỆN THOẠI</th>
                        <th>TÌNH TRẠNG</th>
                        <th>XỬ LÝ</th>
                    </tr>
                </thead>

                <tbody>
                    {deliveriesShip.map((item, index) => (
                        <tr className={cx('body-table')}>
                            <th
                                style={{ color: 'rgb(51,255,51)', cursor: 'pointer' }}
                                onClick={() => handleOpen(index)}
                            >
                                A000452
                            </th>
                            <th>{item.senderName}</th>
                            <th>{item.receiverName}</th>
                            <th style={{ textAlign: 'start', width: '20rem' }}>{item.receiverAddress}</th>
                            <th>{item.receiverPhone}</th>
                            <th style={{ textAlign: 'center' }}>
                                <Button item={item} onClick={onClick} />
                            </th>
                            <th>
                                <div className={cx('select-container')}>
                                    <Content item={item} onClick={onClick} selectConfirm={selectConfirm} />
                                </div>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReceivedTable;
