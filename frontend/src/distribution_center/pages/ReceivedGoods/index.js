import React from 'react';
import Layout from '~/distribution_center/layout';
import styles from './ReceivedGoods.module.scss';
import classNames from 'classnames/bind';
import ReceivedHeader from './ReceivedHeader/ReceivedHeader';
import ReceivedTable from './ReceivedTable/ReceivedTable';
import ModalDetails from './ModalDetails/ModalDetails';
const cx = classNames.bind(styles);

const ReceivedGoods = () => {
    return (
        <div className={cx('receved-goods-container')}>
            <Layout>
                <div className={cx('received-goods-page')}>
                    <ReceivedHeader />
                    <ReceivedTable />
                </div>
            </Layout>
            <ModalDetails className={cx('modal-details')} />
        </div>
    );
};

export default ReceivedGoods;
