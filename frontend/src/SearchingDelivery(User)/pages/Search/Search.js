import React from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Layout from '~/SearchingDelivery(User)/layout';

const cx = classNames.bind(styles);

const SearchOfUser = () => {
    return (
        <Layout>
            <div className={cx('searchEngine')}>
                <h1>Tra cứu vận đơn</h1>
                <form className={cx('orderForm')}>
                    <label className={cx('searchInput')} for="orderId">
                        Nhập mã đơn hàng:
                    </label>
                    <input className={cx('searchInput')} type="text" id="orderId" name="orderId" required />
                    <p>Nhập mã vận đơn của bạn (cách nhau bởi dấu phẩy), tối đa 10 vận đơn.</p>
                    <button className={cx('searchInput')} type="submit">
                        Tìm kiếm
                    </button>
                </form>

                <div id="orderDetails"></div>
            </div>
        </Layout>
    );
};

export default SearchOfUser;
