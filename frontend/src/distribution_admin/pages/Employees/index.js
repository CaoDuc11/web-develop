import React, { useState, useEffect } from 'react';
import Layout from '~/distribution_admin/layout';
import styles from './Employees.module.scss';
import classNames from 'classnames/bind';
import EmployeesTable from './EmployeesTable/EmployeesTable';
import ModalAddEmployee from './ModalAddEmployee/ModalAddEmployee';
import { useDispatch, useSelector } from 'react-redux';
import {
    GetEmployees,
    addEmployee,
    CreateEmployee,
    DeletedEmployees,
    deleteEmployee,
} from '~/all/features/AdminDistributionSlice';

const cx = classNames.bind(styles);

const Employees = () => {
    const dispatch = useDispatch();
    const [employeesList, setEmployees] = useState([]);
    const { usersList } = useSelector((state) => state.adminDistribution);

    useEffect(() => {
        if (usersList.length === 0) {
            dispatch(GetEmployees());
        } else {
            setEmployees(usersList);
        }
    }, [dispatch, usersList]);

    const [displayModal, setDisplayModale] = useState('none');
    const onClickHandleDisplayModal = () => {
        if (displayModal === 'flex') {
            setDisplayModale('none');
        } else {
            setDisplayModale('flex');
        }
    };

    const handleFormSubmit = (data) => {
        const { fullname, username, email, password, password_confirm } = data;
        dispatch(CreateEmployee({ fullname, email, username, password, password_confirm }));
        dispatch(addEmployee(fullname, username, email));
    };

    const handleDeleteEmployee = (user) => {
        dispatch(DeletedEmployees(user));
        const { fullname, username, email } = user;
        dispatch(deleteEmployee(fullname, username, email));
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
                        <EmployeesTable employeesList={employeesList} handleDeleteEmployee={handleDeleteEmployee} />
                    </div>
                </div>
            </Layout>
            <ModalAddEmployee
                displayModal={displayModal}
                onClickHandle={onClickHandleDisplayModal}
                onSubmit={handleFormSubmit}
                className={cx('modal-add-employee')}
            />
        </div>
    );
};

export default Employees;
