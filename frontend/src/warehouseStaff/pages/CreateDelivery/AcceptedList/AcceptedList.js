import React from 'react'
import classNames from 'classnames/bind';
import styles from './AcceptedList.module.scss'

const cx = classNames.bind(styles);

const AcceptedList = () => {
  return (
    <div className={cx('accepted-table')}>
    <table className={cx('table-list')}>
        <thead>
            <tr className={cx('header-table')}>
                <th style={{ textAlign: 'center' }}>STT</th>
                <th>MÃ ĐƠN HÀNG</th>
                <th>KHÁCH HÀNG</th>
                <th>NGƯỜI NHẬN</th>
                <th style={{ width: '25rem', textAlign: 'start' }}>ĐỊA CHỈ GIAO HÀNG</th>
                <th>SỐ ĐIỆN THOẠI</th>
                <th style={{ textAlign: 'center' }}>TRẠNG THÁI</th>
            </tr>
        </thead>

        <tbody>
            <tr className={cx('body-table')}>
                <th style={{ textAlign: 'center' }}>1</th>
                <th style={{ color: 'rgb(51,255,51)', cursor: 'pointer' }}>A000452</th>
                <th>Trần Đức Khải</th>
                <th>Nguyễn Phú Trọng</th>
                <th>Số nhà 23 Đường Hai Bà Trưng, Quận Hai Bà Trưng, Thủ Đức Thành phố nhà bè</th>
                <th>0989789789</th>
                <th style={{ textAlign: 'center' }}>
                    <button
                        style={{
                            background: 'rgb(255,0,0)',
                            color: 'white',
                            fontSize: '13px',
                            fontWeight: '500',
                            padding: '0.5rem 0.5rem',
                            border: 'none',
                            borderRadius: '2px',
                        }}
                    >
                        Tạo đơn
                    </button>
                </th>
            </tr>

            <tr className={cx('body-table')}>
                <th style={{ textAlign: 'center' }}>1</th>
                <th style={{ color: 'rgb(51,255,51)', cursor: 'pointer' }}>A000452</th>
                <th>Trần Đức Khải</th>
                <th>Nguyễn Phú Trọng</th>
                <th>Số nhà 23 Đường Hai Bà Trưng, Quận Hai Bà Trưng, Thủ Đức Thành phố nhà bè</th>
                <th>0989789789</th>
                <th style={{ textAlign: 'center' }}>
                    <button
                        style={{
                            background: 'rgb(51,255,51)',
                            color: 'white',
                            fontSize: '13px',
                            fontWeight: '500',
                            padding: '0.5rem 0.5rem',
                            border: 'none',
                            borderRadius: '2px',
                        }}
                    >
                        Đã tạo đơn
                    </button>
                </th>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default AcceptedList
