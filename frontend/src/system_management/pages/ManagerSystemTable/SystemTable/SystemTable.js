import styles from './SystemTable.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SystemTableFrom = ({ distributionList, collectionList, system }) => {
    return (
        <div className={cx('received-table')}>
            <table className={cx('table-list')}>
                <thead>
                    <tr className={cx('header-table')}>
                        <th style={{ textAlign: 'center' }}>STT</th>
                        <th>{system === 'collection' ? 'ĐIỂM TẬP KẾT' : 'ĐIỂM GIAO DỊCH'}</th>
                        <th style={{ textAlign: 'start' }}>ĐỊA CHỈ</th>
                        <th>TỈNH/THÀNH PHỐ</th>
                        <th>QUẬN/HUYỆN</th>
                        <th>XÃ/PHƯỜNG</th>
                        <th>QUẢN LÝ</th>
                        <th>HOTLINE</th>
                        <th style={{ textAlign: 'center' }}>TÙY CHỌN</th>
                    </tr>
                </thead>

                <tbody>
                    {(system === 'collection' ? collectionList : distributionList).map((item, index) => (
                        <tr className={cx('body-table')}>
                            <th style={{ textAlign: 'center' }}>{index + 1}</th>
                            <th>{item.systemName}</th>
                            <th style={{ textAlign: 'start' }}>{item.address}</th>
                            <th>{item.province}</th>
                            <th>{item.district}</th>
                            <th>{item.ward}</th>
                            <th>{item.adminName}</th>
                            <th>{item.hotline}</th>
                            <th style={{ textAlign: 'center' }}>
                                <div className={cx('btn-options')}>
                                    <button className={cx('edit-btn')}>Sửa</button>
                                    <button className={cx('delete-btn')}>Xóa</button>
                                </div>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SystemTableFrom;
