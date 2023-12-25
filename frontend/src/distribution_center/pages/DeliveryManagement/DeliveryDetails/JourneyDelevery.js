import React from 'react';
import styles from './DeliveryDetails.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const JourneyDelevery = ({ item, index }) => {
    return (
        <div className={cx('delivery-journey')}>
            <table className={cx('table-list')}>
                <thead>
                    <tr className={cx('header-table')}>
                        <th>Trạng thái</th>
                        <th>Ngày trạng thái</th>
                        <th>Bưu cục xử lí</th>
                        <th>Nội dung</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className={cx('body-table')}>
                        <th>Ngày tạo</th>
                        <th>{item[index].dateTime}</th>
                        <th>{item[index].distriSend}</th>
                        <th></th>
                    </tr>
                    {(item[index].journeyStatus === '2' ||
                        item[index].journeyStatus === '3' ||
                        item[index].journeyStatus === '4' ||
                        item[index].journeyStatus === '5') && (
                        <tr className={cx('body-table')}>
                            <th>{`Gửi từ ${item[index].distriSend}`}</th>
                            <th>{item[index].sendFromDistribution1At}</th>
                            <th>{item[index].distriSend}</th>
                            <th></th>
                        </tr>
                    )}
                    {(item[index].journeyStatus === '3' ||
                        item[index].journeyStatus === '4' ||
                        item[index].journeyStatus === '5') && (
                        <tr className={cx('body-table')}>
                            <th>{`Đến ${item[index].collecSendName}`}</th>
                            <th>{item[index].collectionTime1}</th>
                            <th>{item[index].collecSendName}</th>
                            <th></th>
                        </tr>
                    )}
                    {(item[index].journeyStatus === '4' || item[index].journeyStatus === '5') && (
                        <tr className={cx('body-table')}>
                            <th>{`Gửi từ ${item[index].collecSendName}`}</th>
                            <th>{item[index].sendFromCollection1At}</th>
                            <th>{item[index].collecSendName}</th>
                            <th></th>
                        </tr>
                    )}
                    {item[index].journeyStatus === '5' && (
                        <tr className={cx('body-table')}>
                            <th>{`Đến ${item[index].collecSendName}`}</th>
                            <th>{item[index].collectionTime2}</th>
                            <th>{item[index].collecSendName}</th>
                            <th></th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default JourneyDelevery;
