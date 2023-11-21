import React from 'react';
import Layout from '~/distribution_center/layout';
import styles from './ReceivedGoods.module.scss';
import classNames from 'classnames/bind';
import ReceivedHeader from './ReceivedHeader/ReceivedHeader';
import ReceivedTable from './ReceivedTable/ReceivedTable';
const cx = classNames.bind(styles);

const ReceivedGoods = () => {
    return (
        <Layout>
            <div className={cx('received-goods-page')}>
                <ReceivedHeader />
                <ReceivedTable />
            </div>
        </Layout>
    );
};

export default ReceivedGoods;
