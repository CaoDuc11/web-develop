import React from 'react';
import Layout from '~/distribution_center/layout';
import styles from './CreateDelivery.module.scss';
import classNames from 'classnames/bind';
import { IoDocumentTextSharp } from 'react-icons/io5';
import InputInfor from './InputInfor/InputInfor';
import InputDetail from './InputDetails/InputDetail';

const cx = classNames.bind(styles);

const CreateDelivery = () => {
    return (
        <Layout>
            <div className={cx('sectionCreateDelivery')}>
                <div className={cx('header-label')}>
                    <IoDocumentTextSharp className={cx('header-icon')} />
                    <span className={cx('header-title')}>Tạo mới đơn hàng</span>
                </div>

                <div className={cx('mainCreateDelivery')}>
                    <div className={cx('receiverSenderInfor')}>
                        <InputInfor />
                        <InputInfor />
                    </div>

                    <div className={cx('itemDetail')}>
                        <InputDetail />
                    </div>

                    <div className={cx('deliveryFee')}>ccc</div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateDelivery;
