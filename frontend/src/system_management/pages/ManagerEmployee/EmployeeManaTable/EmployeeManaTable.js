import styles from './EmployeeManaTable.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EmployeeManaTable = ({ adminUser }) => {
    return (
        <div className={cx('received-table')}>
            <table className={cx('table-list')}>
                <thead>
                    <tr className={cx('header-table')}>
                        <th style={{ textAlign: 'center' }}>STT</th>
                        <th>HỌ VÀ TÊN</th>
                        <th>TÀI KHOẢN</th>
                        <th style={{ textAlign: 'start' }}>EMAIL</th>
                        <th>NƠI LÀM VIỆC</th>
                        <th>VAI TRÒ</th>
                        <th style={{ textAlign: 'center' }}>TÙY CHỌN</th>
                    </tr>
                </thead>

                <tbody>
                    {adminUser.map((item, index) => (
                        <tr className={cx('body-table')}>
                            <th style={{ textAlign: 'center' }}>{index + 1}</th>
                            <th>{item.fullname}</th>
                            <th>{item.username}</th>
                            <th style={{ textAlign: 'start' }}>{item.email}</th>
                            <th>
                                {item.position === 'admin_distribution'
                                    ? `Điểm giao dịch ${item.workplace}`
                                    : `Điểm tập kết ${item.workplace}`}
                            </th>
                            <th>
                                {item.position === 'admin_distribution'
                                    ? `Quản lý điểm giao dịch`
                                    : `Quản lý điểm tập kết`}
                            </th>
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

export default EmployeeManaTable;
