import React from 'react';
import classNames from 'classnames/bind';
import styles from './AcceptedList.module.scss';
import { PiPrinterFill } from 'react-icons/pi';
import { IoPaperPlane } from 'react-icons/io5';
import { AiOutlineStop } from 'react-icons/ai';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
const cx = classNames.bind(styles);

const Button = ({ item, onClick }) => {
    switch (item.journeyStatus) {
        case ('2', '1'):
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
        case '3':
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
                    onClick={() => onClick(item)}
                >
                    Đã nhận được hàng!
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
                    onClick={() => onClick(item)}
                >
                    Giao hàng thành công!
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
                    onClick={() => onClick(item)}
                >
                    Giao hàng không thành công!
                </button>
            );
        default:
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
                    onClick={() => onClick(item)}
                >
                    Đã gửi hàng!
                </button>
            );
    }
};
const AcceptedList = (props) => {
    const { deliveries, onClick, handleOpen, collections, handleSelect } = props;

    return (
        <div className={cx('accepted-table')}>
            <table className={cx('table-list')}>
                <thead>
                    <tr className={cx('header-table')}>
                        {/* <th></th> */}
                        <th>MÃ ĐƠN HÀNG</th>
                        <th>KHÁCH HÀNG</th>
                        <th>NGƯỜI NHẬN</th>
                        <th style={{ width: '20rem', textAlign: 'start' }}>ĐỊA CHỈ GIAO HÀNG</th>
                        <th>SỐ ĐIỆN THOẠI</th>
                        <th>TRẠNG THÁI</th>
                        <th>CHỌN ĐIỂM ĐẾN</th>
                        <th>TÙY CHỌN</th>
                    </tr>
                </thead>

                <tbody>
                    {deliveries.map((item, index) => (
                        <tr className={cx('body-table')}>
                            {/* <th>
                                <input
                                    type="checkbox"
                                    style={{
                                        display: 'none',
                                        marginLeft: '0.5rem',
                                        width: '1.4rem',
                                        height: '1.4rem',
                                        textAlign: 'center',
                                        padding: '0',
                                    }}
                                />
                            </th> */}
                            <th
                                style={{ color: 'rgb(51,255,51)', cursor: 'pointer' }}
                                onClick={() => handleOpen(index)}
                            >
                                A200025
                            </th>
                            <th>{item.senderName}</th>
                            <th>{item.receiverName}</th>
                            <th style={{ textAlign: 'start', width: '20rem' }}>{item.receiverAddress}</th>
                            <th>{item.receiverPhone}</th>
                            <th>
                                <Button item={item} onClick={onClick} />
                            </th>
                            <th>
                                <div className={cx('select-container')}>
                                    {item.journeyStatus === '3' ? (
                                        <select className={cx('select-filter')} onChange={(e) => handleSelect(e)}>
                                            {collections.map((option, index) => (
                                                <option value={option.collectionName}>{option.collectionName}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <select disabled className={cx('select-filter')}>
                                            <option value="Mã đơn hàng">
                                                {item.collectionId
                                                    ? `Điểm tập kết ${item.collectionId}`
                                                    : 'Chờ xác nhận'}
                                            </option>
                                        </select>
                                    )}
                                </div>
                            </th>
                            <th>
                                <div className={cx('option-button')}>
                                    {item.journeyStatus === '3' && (
                                        <div className={cx('button-green')} onClick={() => onClick(item)}>
                                            <IoPaperPlane className={cx('icon')} />
                                            <span>GỬI ĐƠN</span>
                                        </div>
                                    )}
                                    {item.journeyStatus !== '3' && item.journeyStatus !== '9' && (
                                        <div className={cx('button-green')} style={{ background: 'rgb(255, 95, 31)' }}>
                                            <MdOutlineReportGmailerrorred className={cx('icon')} />
                                            <span>BÁO CÁO</span>
                                        </div>
                                    )}
                                    {item.journeyStatus === '9' && (
                                        <div className={cx('button-red')} onClick={() => onClick(item)}>
                                            <RiDeleteBin6Line className={cx('icon')} />
                                            <span>XÓA</span>
                                        </div>
                                    )}
                                </div>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AcceptedList;
