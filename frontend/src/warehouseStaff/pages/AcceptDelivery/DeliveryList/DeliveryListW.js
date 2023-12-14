import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import DeliveryItemW from './DeliveryItemW'
import classNames from 'classnames/bind';
import styles from './DeliveryListW.module.scss'

const cx = classNames.bind(styles);
const DeliveryListW = () => {
  return (
    <div className={cx('delivery-list')}>
            <div className={cx('search-header')}>
                <div className={cx('search')}>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Tìm kiếm"
                        className={cx('search-input')}
                    />
                    <AiOutlineSearch className={cx('icon-search')} />
                </div>
            </div>

            <div className={cx('main-list')}>
                <DeliveryItemW />
                <DeliveryItemW />
                <DeliveryItemW />
            </div>
        </div>
  )
}

export default DeliveryListW
