import React from 'react';
import classNames from 'classnames';
import styles from './Search.scss';

const cx = classNames.bind(styles);

function SearchOfUser() {
    return (
        <div className={cx('searchEngine')}>
            <h1>Tra cứu đơn hàng</h1>
            <form id="orderForm">
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
    );
}

export default SearchOfUser;
