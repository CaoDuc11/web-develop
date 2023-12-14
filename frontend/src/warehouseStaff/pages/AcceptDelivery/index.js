import React, { useState } from 'react';
import Layout from '~/warehouseStaff/layout';
import DeliveryListW from './DeliveryList/DeliveryListW';
import styles from './AcceptDelivery.module.scss';
import classNames from 'classnames/bind';
import DeliveryDetailsW from './DeliveryDetails/DeliveryDetailsW';

const cx = classNames.bind(styles);
const AcceptDelivery = () => {
    const [click, setClick] = useState(false);

    const handleButtonClick = () => {
        setClick(!click); // Toggle the state when the button is clicked
    };
    return (
        <Layout>
            <div className={cx('acceptDelivery')}>
                <div className={cx('list-delivery')} onClick={handleButtonClick}>
                    <DeliveryListW />
                </div>
                {click && (
                    <div className={cx('delivery-details')}>
                        <DeliveryDetailsW />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default AcceptDelivery;
