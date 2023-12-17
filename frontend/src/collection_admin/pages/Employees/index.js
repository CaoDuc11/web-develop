import React, { useState, useEffect } from 'react';
import Layout from '~/collection_admin/layout';
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
    setEmployeeEdit,
    UpdateEmployee,
    updateEmployee,
} from '~/all/features/AdminCollectionSlice';
import ModalEditEmployee from './ModalEditEmployee/ModalEditEmployee';

const cx = classNames.bind(styles);

const Employees2 = () => {
    const dispatch = useDispatch();
    const [employeesList, setEmployees] = useState([]);
    const { usersList } = useSelector((state) => state.adminCollection);

    useEffect(() => {
        if (usersList.length === 0) {
            dispatch(GetEmployees());
        } else {
            setEmployees(usersList);
        }
    }, [dispatch, usersList]);

    //Modal Thêm Nhân Viên
    const [displayModalAdd, setDisplayModale] = useState('none');
    const onClickHandleDisplayModal = () => {
        if (displayModalAdd === 'flex') {
            setDisplayModale('none');
        } else {
            setDisplayModale('flex');
        }
    };

    const handleFormSubmit = (data) => {
        const { fullname, username, email, password, password_confirm } = data;
        dispatch(addEmployee(fullname, username, email));
        dispatch(CreateEmployee({ fullname, email, username, password, password_confirm }));
    };

    //Chỉnh Sửa Thông Tin Nhân Viên
    const [displayModalEdit, setDisplayModaleEdit] = useState('none');
    const onClickHandleDisplayModalEdit = () => {
        if (displayModalEdit === 'flex') {
            setDisplayModaleEdit('none');
        } else {
            setDisplayModaleEdit('flex');
        }
    };
    const GetInforEmployee = (user) => {
        const { id, fullname, username, email } = user;
        dispatch(setEmployeeEdit(id, fullname, username, email));
    };
    const handleUpdate = (data) => {
        const { id, emailEdit, usernameEdit, password, password_confirm } = data;
        dispatch(UpdateEmployee({ id, emailEdit, usernameEdit, password, password_confirm }));
        dispatch(updateEmployee(id, usernameEdit, emailEdit));
    };

    //Xóa Nhân Viên
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
                        <span className={cx('header-employees_title1')}>Nhân viên</span>
                        <button className={cx('add-employee')} onClick={onClickHandleDisplayModal}>
                            Thêm mới
                        </button>
                        <span className={cx('header-employees_title2')}>Danh sách nhân viên</span>
                    </div>
                    <div className={cx('employees-table')}>
                        <EmployeesTable
                            employeesList={employeesList}
                            handleDeleteEmployee={handleDeleteEmployee}
                            onClickEdit={onClickHandleDisplayModalEdit}
                            onClickGetInfor={GetInforEmployee}
                        />
                    </div>
                </div>
            </Layout>
            <ModalAddEmployee
                displayModal={displayModalAdd}
                onClickHandle={onClickHandleDisplayModal}
                onSubmit={handleFormSubmit}
                className={cx('modal-add-employee')}
            />

            <ModalEditEmployee
                displayModalEdit={displayModalEdit}
                // className={cx('modal-add-employee')}
                onClickHandle={onClickHandleDisplayModalEdit}
                onSubmit={handleUpdate}
            />
        </div>
    );
};

export default Employees2;
