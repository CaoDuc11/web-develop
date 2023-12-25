import React from 'react';
import Layout from '~/warehouseStaff/layout';
import styles from './CreateDeliveryW.module.scss';
import classNames from 'classnames/bind';
import AcceptedList from './AcceptedList/AcceptedList';
import SearchBar from './SearchBar/SearchBar';

const cx = classNames.bind(styles);
const CreateDeliveryW = () => {
    return (
        <Layout>
            <div className={cx('acceptedDelivery')}>
                <SearchBar />
                <AcceptedList />
            </div>
        </Layout>
    );
};

export default CreateDeliveryW;
