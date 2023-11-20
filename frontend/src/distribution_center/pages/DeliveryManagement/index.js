import React from 'react';
import styles from './DeliveryManagement.module.scss';
import classNames from 'classnames/bind';
import Layout from '~/distribution_center/layout';
import DeliveryList from './DeliveryList/DeliveryList';
import DeliveryDetails from './DeliveryDetails/DeliveryDetails';
const cx = classNames.bind(styles);
const DeliveryManagement = () => {
    return (
        <Layout>
            <div className={cx('delivery-management-page')}>
                <div className={cx('list-delivery')}>
                    <DeliveryList />
                </div>
                <div className={cx('delivery-details')}>
                    <DeliveryDetails />
                </div>
            </div>
        </Layout>
    );
};

export default DeliveryManagement;
