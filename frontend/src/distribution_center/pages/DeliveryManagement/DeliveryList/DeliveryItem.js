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

const Button = ({ transactionStatus, onClickUpdate, item }) => {
    switch (transactionStatus) {
        case '1':
            return (
                <button
                    className={cx('btn-status')}
                    style={{ background: 'hsl(120, 60%, 50%)', cursor: 'pointer' }}
                    onClick={() => onClickUpdate({ status: '2', transactionId: item.transactionId })}
                >
                    Gửi đơn
                </button>
            );
        case '2':
            return (
                <button className={cx('btn-status')} style={{ background: 'hsl(187, 85%, 43%)' }}>
                    Đang giao hàng
                </button>
            );

        case '3':
            return (
                <button className={cx('btn-status')} style={{ background: 'hsl(120, 61%, 32%)' }}>
                    GD thành công
                </button>
            );
        case '4':
            return (
                <button className={cx('btn-status')} style={{ background: 'hsl(260, 50%, 60%)' }}>
                    Đã trả hàng
                </button>
            );
        case '0':
            return (
                <button className={cx('btn-status')} style={{ background: 'hsl(0, 70%, 60%)' }}>
                    Đã hủy
                </button>
            );
        default:
            return null; // Hoặc bạn có thể trả về một giá trị mặc định nếu không khớp với bất kỳ trường hợp nào.
    }
};

const DeliveryItem = (props) => {
    const { item, background, index, onClickItem, onClickDelete, onClickUpdate, transactionStatus } = props;
    return (
        <div className={cx('delivery-item')} style={{ background: background }} onClick={() => onClickItem(index)}>
            <div className={cx('delivery-item-subitem')}>
                <BsQrCodeScan className={cx('delivery-item-subitem-icon')} />
                <span className={cx('delivery-item-subitem-title')}>Mã đơn hàng:</span>
                <span className={cx('delivery-item-subitem-infor')}>{item.transactionId}</span>
            </div>
            <div className={cx('delivery-item-subitem')}>
                <BsPersonCheck className={cx('delivery-item-subitem-icon')} />
                <span className={cx('delivery-item-subitem-title')}>Người nhận:</span>
                <span className={cx('delivery-item-subitem-infor')}>{item.receiverName}</span>
            </div>
            <div className={cx('delivery-item-subitem')}>
                <PiPhoneCall className={cx('delivery-item-subitem-icon')} />
                <span className={cx('delivery-item-subitem-title')}>Số điện thoại:</span>
                <span className={cx('delivery-item-subitem-infor')}>{item.receiverPhone}</span>
            </div>
            <div className={cx('delivery-item-subitem')}>
                <BiCalendar className={cx('delivery-item-subitem-icon')} />
                <span className={cx('delivery-item-subitem-title')}>Ngày tạo:</span>
                <span className={cx('delivery-item-subitem-infor')}>{item.dateTime}</span>
            </div>
            <div className={cx('delivery-item-subitem')}>
                <MdOutlineAttachMoney className={cx('delivery-item-subitem-icon')} />
                <span className={cx('delivery-item-subitem-title')}>Tổng cước:</span>
                <span className={cx('delivery-item-subitem-infor')}>{item.total + 'VND'}</span>
            </div>

            <div className={cx('delivery-status')}>
                <Button transactionStatus={transactionStatus} onClickUpdate={onClickUpdate} item={item} />
                {(transactionStatus === '1' || transactionStatus === '2') && (
                    <button
                        className={cx('btn-cancel')}
                        onClick={() => onClickUpdate({ status: '0', transactionId: item.transactionId })}
                    >
                        Hủy đơn
                    </button>
                )}
                {(transactionStatus === '1' ||
                    transactionStatus === '0' ||
                    transactionStatus === '3' ||
                    transactionStatus === '4') && (
                    <RiDeleteBin6Line className={cx('icon-delete')} onClick={() => onClickDelete(item)} />
                )}
            </div>
        </div>
    );
};

export default DeliveryItem;
