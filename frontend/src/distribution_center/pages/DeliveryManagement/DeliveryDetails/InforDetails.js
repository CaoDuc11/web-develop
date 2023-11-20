import React from 'react';
import styles from './DeliveryDetails.module.scss';
import classNames from 'classnames/bind';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdLocalShipping } from 'react-icons/md';
import { MdOutlineAttachMoney } from 'react-icons/md';

const cx = classNames.bind(styles);

const InforDetails = () => {
    return (
        <div className={cx('delivery-infor-details')}>
            <div className={cx('infor-client')}>
                <div className={cx('infor-client-header')}>
                    <BsFillPersonLinesFill className={cx('icon-header')} />
                    <span className={cx('title-header')}>Thông tin danh bạ đơn hàng</span>
                </div>

                <div className={cx('infor-client-main')}>
                    <div className={cx('infor-sender', 'infor-section')}>
                        <span className={cx('title')}>* Người gửi</span>
                        <div className={cx('title-fullname', 'title-infor')}>
                            <span className={cx('title-fullname-header', 'title-infor-header')}>Họ và tên:</span>
                            <span className={cx('title-fullname-main', 'title-infor-main')}>Trần Hoài Nam</span>
                        </div>
                        <div className={cx('title-numberphone', 'title-infor')}>
                            <span className={cx('title-numberphone-header', 'title-infor-header')}>Số điện thoại:</span>
                            <span className={cx('title-numberphone-main', 'title-infor-main')}>0987678678</span>
                        </div>
                        <div className={cx('title-address', 'title-infor')}>
                            <span className={cx('title-address-header', 'title-infor-header')}>Địa chỉ:</span>
                            <span className={cx('title-address-main', 'title-infor-main')}>
                                Dịch Vọng, Cầu Giấy, Hà Nội
                            </span>
                        </div>
                    </div>

                    <div className={cx('infor-receiver', 'infor-section')}>
                        <span className={cx('title')}>* Người nhận</span>
                        <div className={cx('title-fullname', 'title-infor')}>
                            <span className={cx('title-fullname-header', 'title-infor-header')}>Họ và tên :</span>
                            <span className={cx('title-fullname-main', 'title-infor-main')}>Trần Hoài Nam</span>
                        </div>
                        <div className={cx('title-numberphone', 'title-infor')}>
                            <span className={cx('title-numberphone-header', 'title-infor-header')}>Số điện thoại:</span>
                            <span className={cx('title-numberphone-main', 'title-infor-main')}>0987678678</span>
                        </div>
                        <div className={cx('title-address', 'title-infor')}>
                            <span className={cx('title-address-header', 'title-infor-header')}>Địa chỉ:</span>
                            <span className={cx('title-address-main', 'title-infor-main')}>
                                Dịch Vọng, Cầu Giấy, Hà Nội
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
                            <span className={cx('title-producttype-header', 'title-infor-header')}>Loại hàng hóa:</span>
                            <span className={cx('title-producttype-main', 'title-infor-main')}>Tài liệu</span>
                        </div>
                        <div className={cx('title-productdetails', 'title-infor')}>
                            <span className={cx('title-productdetails-header', 'title-infor-header')}>
                                Nội dung hàng hóa:
                            </span>
                            <span className={cx('title-productdetails-main', 'title-infor-main')}>
                                Tài liệu học tập
                            </span>
                        </div>
                        <div className={cx('title-weight', 'title-infor')}>
                            <span className={cx('title-weight-header', 'title-infor-header')}>Trọng lượng (gram):</span>
                            <span className={cx('title-weight-main', 'title-infor-main')}>200</span>
                        </div>
                    </div>

                    <div className={cx('infor-section')}>
                        <div className={cx('title-length', 'title-infor')}>
                            <span className={cx('title-length-header', 'title-infor-header')}>Chiều dài:</span>
                            <span className={cx('title-length-main', 'title-infor-main')}>0</span>
                        </div>
                        <div className={cx('title-width', 'title-infor')}>
                            <span className={cx('title-width-header', 'title-infor-header')}>Chiều rộng:</span>
                            <span className={cx('title-width-main', 'title-infor-main')}>0</span>
                        </div>
                        <div className={cx('title-height', 'title-infor')}>
                            <span className={cx('title-height-header', 'title-infor-header')}>Chiều cao:</span>
                            <span className={cx('title-height-main', 'title-infor-main')}>0</span>
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
                            <span className={cx('title-feemain-header', 'title-infor-header')}>Cước chính (vnđ):</span>
                            <span className={cx('title-feemain-main', 'title-infor-main')}>20.000</span>
                        </div>
                        <div className={cx('title-subfee', 'title-infor')}>
                            <span className={cx('title-subfee-header', 'title-infor-header')}>Phụ phí (vnđ):</span>
                            <span className={cx('title-subfee-main', 'title-infor-main')}>20.000</span>
                        </div>
                        <div className={cx('title-cod', 'title-infor')}>
                            <span className={cx('title-cod-header', 'title-infor-header')}>Cước COD (vnđ):</span>
                            <span className={cx('title-cod-main', 'title-infor-main')}>20.000</span>
                        </div>

                        <div className={cx('title-total', 'title-infor')}>
                            <span className={cx('title-total-header', 'title-infor-header')} style={{ color: 'red' }}>
                                Tổng thanh toán (vnđ):
                            </span>
                            <span className={cx('title-total-main', 'title-infor-main')}>120.000</span>
                        </div>
                    </div>

                    <div className={cx('infor-section')}>
                        <div className={cx('title-gtgt', 'title-infor')}>
                            <span className={cx('title-gtgt-header', 'title-infor-header')}>Cước GTGT (vnđ):</span>
                            <span className={cx('title-gtgt-main', 'title-infor-main')}>200</span>
                        </div>
                        <div className={cx('title-vat', 'title-infor')}>
                            <span className={cx('title-vat-header', 'title-infor-header')}>Tổng cước VAT:</span>
                            <span className={cx('title-vat-main', 'title-infor-main')}>0</span>
                        </div>
                        <div className={cx('title-orther', 'title-infor')}>
                            <span className={cx('title-orther-header', 'title-infor-header')}>Các phí khác:</span>
                            <span className={cx('title-orther-main', 'title-infor-main')}>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InforDetails;
