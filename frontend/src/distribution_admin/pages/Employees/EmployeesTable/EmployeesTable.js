import styles from './EmployeesTable.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EmployeesTable = ({ employeesList, handleDeleteEmployee }) => {
    const onClickDeleteEmployee = (item) => {
        handleDeleteEmployee(item);
    };
    return (
        <div className={cx('received-table')}>
            <table className={cx('table-list')}>
                <thead>
                    <tr className={cx('header-table')}>
                        <th style={{ textAlign: 'center' }}>SỐ THỨ TỰ</th>
                        <th>HỌ VÀ TÊN</th>
                        <th>TÀI KHOẢN</th>
                        <th>EMAIL</th>
                        <th>SỐ ĐIỆN THOẠI</th>
                        <th style={{ textAlign: 'center' }}>TÙY CHỌN</th>
                    </tr>
                </thead>

                <tbody>
                    {employeesList.map((item, index) => (
                        <tr className={cx('body-table')}>
                            <th style={{ textAlign: 'center' }}>{index + 1}</th>
                            <th>{item.fullname}</th>
                            <th>{item.username}</th>
                            <th>{item.email}</th>
                            <th>0987898768</th>
                            <th style={{ textAlign: 'center' }}>
                                <div className={cx('btn-options')}>
                                    <button className={cx('edit-btn')}>Sửa</button>
                                    <button className={cx('delete-btn')} onClick={() => onClickDeleteEmployee(item)}>
                                        Xóa
                                    </button>
                                </div>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeesTable;
