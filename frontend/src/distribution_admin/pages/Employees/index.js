import React, { useState } from 'react';
import Layout from '~/distribution_admin/layout';
import styles from './Employees.module.scss';
import classNames from 'classnames/bind';
import EmployeesTable from './EmployeesTable/EmployeesTable';
import ModalAddEmployee from './ModalAddEmployee/ModalAddEmployee';

const cx = classNames.bind(styles);

const Employees = () => {
    const [displayModal, setDisplayModale] = useState('none');
    const onClickHandleDisplayModal = () => {
        if (displayModal === 'flex') {
            setDisplayModale('none');
        } else {
            setDisplayModale('flex');
        }
    };
    return (
        <div className={cx('employees-container')}>
            <Layout>
                <div className={cx('sectionEmployees')}>
                    <div className={cx('header-employees')}>
                        <h2 className={cx('header-employees_title1')}>Nhân viên</h2>
                        <button className={cx('add-employee')} onClick={onClickHandleDisplayModal}>
                            Thêm mới
                        </button>
                        <span className={cx('header-employees_title2')}>Danh sách nhân viên</span>
                    </div>
                    <div className={cx('employees-table')}>
                        <EmployeesTable />
                    </div>
                </div>
            </Layout>
            <ModalAddEmployee
                displayModal={displayModal}
                onClickHandle={onClickHandleDisplayModal}
                className={cx('modal-add-employee')}
            />
        </div>
    );
};

export default Employees;
