import React from 'react';
import classNames from 'classnames/bind';
import styles from './DeliveriesList.module.scss';
import { PiPrinterFill } from 'react-icons/pi';
import { IoPaperPlane } from 'react-icons/io5';
import { AiOutlineStop } from 'react-icons/ai';

const cx = classNames.bind(styles);

const Button = ({ item, onClick }) => {
    switch (item.journeyStatus) {
        case '4':
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
        case '5':
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
        case '6':
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
        default:
            return null;
    }
};

const DeliveriesList = (props) => {
    const { deliveries, onClick, handleOpen, distributions, handleSelect } = props;
    return (
        <div className={cx('accepted-table')}>
            <table className={cx('table-list')}>
                <thead>
                    <tr className={cx('header-table')}>
                        <th></th>
                        <th>MÃ ĐƠN HÀNG</th>
                        <th>KHÁCH HÀNG</th>
                        <th>NGƯỜI NHẬN</th>
                        <th style={{ width: '25rem', textAlign: 'start' }}>ĐỊA CHỈ GIAO HÀNG</th>
                        <th>SỐ ĐIỆN THOẠI</th>
                        <th>TRẠNG THÁI</th>
                        <th>CHỌN ĐIỂM ĐẾN</th>
                        <th>TÙY CHỌN</th>
                    </tr>
                </thead>

                <tbody>
                    {deliveries.map((item, index) => (
                        <tr className={cx('body-table')}>
                            <th>
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
                            </th>
                            <th
                                style={{ color: 'rgb(51,255,51)', cursor: 'pointer' }}
                                onClick={() => handleOpen(index)}
                            >
                                A200025
                            </th>
                            <th>{item.senderName}</th>
                            <th>{item.receiverName}</th>
                            <th style={{ textAlign: 'start' }}>{item.receiverAddress}</th>
                            <th>{item.receiverPhone}</th>
                            <th>
                                <Button item={item} onClick={onClick} />
                            </th>
                            <th>
                                <div className={cx('select-container')}>
                                    {item.journeyStatus === '5' ? (
                                        <select className={cx('select-filter')} onChange={(e) => handleSelect(e)}>
                                            {distributions.map((option, index) => (
                                                <option value={option.distributionName}>
                                                    {option.distributionName}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <select disabled className={cx('select-filter')}>
                                            <option value="Mã đơn hàng">
                                                {item.distributionId
                                                    ? `Điểm giao dịch ${item.distributionId}`
                                                    : 'Chờ xác nhận'}
                                            </option>
                                        </select>
                                    )}
                                </div>
                            </th>
                            <th>
                                <div className={cx('option-button')}>
                                    <div className={cx('button-green')}>
                                        <PiPrinterFill className={cx('icon')} />
                                        <span>PRINT</span>
                                    </div>

                                    {item.journeyStatus === '5' && (
                                        <div className={cx('button-green')} onClick={() => onClick(item)}>
                                            <IoPaperPlane className={cx('icon')} />
                                            <span>GỬI ĐƠN</span>
                                        </div>
                                    )}
                                    {item.journeyStatus === '6' && (
                                        <div className={cx('button-red')} onClick={() => onClick(item)}>
                                            <AiOutlineStop className={cx('icon')} />
                                            <span>HUỶ ĐƠN</span>
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

export default DeliveriesList;
