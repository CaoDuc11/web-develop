import React from 'react';
import styles from './ModalDetails.module.scss';
import classNames from 'classnames/bind';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdLocalShipping } from 'react-icons/md';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { PiPrinterFill } from 'react-icons/pi';
const cx = classNames.bind(styles);
const ModalDetailsCollection = ({ display, deliveries, handleClose, index }) => {
    return (
        <div style={{ display: display }} className={cx('modal-details')}>
            <div className={cx('modal-background')}>
                <div className={cx('modal-container')}>
                    <div className={cx('modal-header')}>Thông tin đơn hàng</div>
                    <div className={cx('modal-body')}>
                        <div className={cx('infor-client')}>
                            <div className={cx('infor-client-header')}>
                                <BsFillPersonLinesFill className={cx('icon-header')} />
                                <span className={cx('title-header')}>Thông tin danh bạ đơn hàng</span>
                            </div>

                            <div className={cx('infor-client-main')}>
                                <div className={cx('infor-sender', 'infor-section')}>
                                    <span className={cx('title')}>* Người gửi</span>
                                    <div className={cx('title-fullname', 'title-infor')}>
                                        <span className={cx('title-fullname-header', 'title-infor-header')}>
                                            Họ và tên:
                                        </span>
                                        <span className={cx('title-fullname-main', 'title-infor-main')}>
                                            {deliveries[index].senderName}
                                        </span>
                                    </div>
                                    <div className={cx('title-numberphone', 'title-infor')}>
                                        <span className={cx('title-numberphone-header', 'title-infor-header')}>
                                            Số điện thoại:
                                        </span>
                                        <span className={cx('title-numberphone-main', 'title-infor-main')}>
                                            {deliveries[index].senderPhone}
                                        </span>
                                    </div>
                                    <div className={cx('title-address', 'title-infor')}>
                                        <span className={cx('title-address-header', 'title-infor-header')}>
                                            Địa chỉ:
                                        </span>
                                        <span className={cx('title-address-main', 'title-infor-main')}>
                                            {deliveries[index].senderAddress}
                                        </span>
                                    </div>
                                </div>

                                <div className={cx('infor-receiver', 'infor-section')}>
                                    <span className={cx('title')}>* Người nhận</span>
                                    <div className={cx('title-fullname', 'title-infor')}>
                                        <span className={cx('title-fullname-header', 'title-infor-header')}>
                                            Họ và tên :
                                        </span>
                                        <span className={cx('title-fullname-main', 'title-infor-main')}>
                                            {deliveries[index].receiverName}
                                        </span>
                                    </div>
                                    <div className={cx('title-numberphone', 'title-infor')}>
                                        <span className={cx('title-numberphone-header', 'title-infor-header')}>
                                            Số điện thoại:
                                        </span>
                                        <span className={cx('title-numberphone-main', 'title-infor-main')}>
                                            {deliveries[index].receiverPhone}
                                        </span>
                                    </div>
                                    <div className={cx('title-address', 'title-infor')}>
                                        <span className={cx('title-address-header', 'title-infor-header')}>
                                            Địa chỉ:
                                        </span>
                                        <span className={cx('title-address-main', 'title-infor-main')}>
                                            {deliveries[index].receiverAddress}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('infor-transportation')}>
                            <div className={cx('infor-transportation-header')}>
                                <MdLocalShipping className={cx('icon-header')} />
                                <span className={cx('title-header')}>Thông tin hàng hóa</span>
                            </div>

                            <div className={cx('infor-transportation-main')}>
                                <div className={cx('infor-section')}>
                                    <div className={cx('title-producttype', 'title-infor')}>
                                        <span className={cx('title-producttype-header', 'title-infor-header')}>
                                            Loại hàng hóa:
                                        </span>
                                        <span className={cx('title-producttype-main', 'title-infor-main')}>
                                            {deliveries[index].parcelType}
                                        </span>
                                    </div>
                                    <div className={cx('title-productdetails', 'title-infor')}>
                                        <span className={cx('title-productdetails-header', 'title-infor-header')}>
                                            Nội dung hàng hóa:
                                        </span>
                                        <span className={cx('title-productdetails-main', 'title-infor-main')}>
                                            {deliveries[index].parcelContent}
                                        </span>
                                    </div>
                                    <div className={cx('title-weight', 'title-infor')}>
                                        <span className={cx('title-weight-header', 'title-infor-header')}>
                                            Trọng lượng (gram):
                                        </span>
                                        <span className={cx('title-weight-main', 'title-infor-main')}>
                                            {deliveries[index].parcelWeight}
                                        </span>
                                    </div>
                                </div>

                                <div className={cx('infor-section')}>
                                    <div className={cx('title-length', 'title-infor')}>
                                        <span className={cx('title-length-header', 'title-infor-header')}>
                                            Chiều dài:
                                        </span>
                                        <span className={cx('title-length-main', 'title-infor-main')}>
                                            {deliveries[index].parcelLength}
                                        </span>
                                    </div>
                                    <div className={cx('title-width', 'title-infor')}>
                                        <span className={cx('title-width-header', 'title-infor-header')}>
                                            Chiều rộng:
                                        </span>
                                        <span className={cx('title-width-main', 'title-infor-main')}>
                                            {deliveries[index].parcelWidth}
                                        </span>
                                    </div>
                                    <div className={cx('title-height', 'title-infor')}>
                                        <span className={cx('title-height-header', 'title-infor-header')}>
                                            Chiều cao:
                                        </span>
                                        <span className={cx('title-height-main', 'title-infor-main')}>
                                            {deliveries[index].parcelHeight}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('infor-fee')}>
                            <div className={cx('infor-fee-header')}>
                                <MdOutlineAttachMoney className={cx('icon-header')} />
                                <span className={cx('title-header')}>Thông tin cước phí</span>
                            </div>

                            <div className={cx('infor-fee-main')}>
                                <div className={cx('infor-section')}>
                                    <div className={cx('title-feemain', 'title-infor')}>
                                        <span className={cx('title-feemain-header', 'title-infor-header')}>
                                            Cước chính (vnđ):
                                        </span>
                                        <span className={cx('title-feemain-main', 'title-infor-main')}>
                                            {deliveries[index].feeMain}
                                        </span>
                                    </div>
                                    <div className={cx('title-subfee', 'title-infor')}>
                                        <span className={cx('title-subfee-header', 'title-infor-header')}>
                                            Phụ phí (vnđ):
                                        </span>
                                        <span className={cx('title-subfee-main', 'title-infor-main')}>
                                            {deliveries[index].feeSub}
                                        </span>
                                    </div>
                                    <div className={cx('title-cod', 'title-infor')}>
                                        <span className={cx('title-cod-header', 'title-infor-header')}>
                                            Cước COD (vnđ):
                                        </span>
                                        <span className={cx('title-cod-main', 'title-infor-main')}>
                                            {deliveries[index].cod}
                                        </span>
                                    </div>

                                    <div className={cx('title-total', 'title-infor')}>
                                        <span
                                            className={cx('title-total-header', 'title-infor-header')}
                                            style={{ color: 'red' }}
                                        >
                                            Tổng thanh toán (vnđ):
                                        </span>
                                        <span className={cx('title-total-main', 'title-infor-main')}>
                                            {deliveries[index].total}
                                        </span>
                                    </div>
                                </div>

                                <div className={cx('infor-section')}>
                                    <div className={cx('title-gtgt', 'title-infor')}>
                                        <span className={cx('title-gtgt-header', 'title-infor-header')}>
                                            Cước GTGT (vnđ):
                                        </span>
                                        <span className={cx('title-gtgt-main', 'title-infor-main')}>
                                            {deliveries[index].gtgt}
                                        </span>
                                    </div>
                                    <div className={cx('title-vat', 'title-infor')}>
                                        <span className={cx('title-vat-header', 'title-infor-header')}>
                                            Tổng cước VAT:
                                        </span>
                                        <span className={cx('title-vat-main', 'title-infor-main')}>
                                            {deliveries[index].vat}
                                        </span>
                                    </div>
                                    <div className={cx('title-orther', 'title-infor')}>
                                        <span className={cx('title-orther-header', 'title-infor-header')}>
                                            Các phí khác:
                                        </span>
                                        <span className={cx('title-orther-main', 'title-infor-main')}>
                                            {deliveries[index].other}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('modal-footer')}>
                        <div className={cx('button-red')} onClick={handleClose}>
                            <IoMdClose className={cx('icon')} />
                            <span>ĐÓNG</span>
                        </div>
                        <div className={cx('button-green')}>
                            <PiPrinterFill className={cx('icon')} />
                            <span>IN</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDetailsCollection;
