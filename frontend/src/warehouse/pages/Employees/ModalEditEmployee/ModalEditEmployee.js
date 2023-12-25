import { React, useEffect, useState } from 'react';
import styles from '../ModalAddEmployee/ModalAddEmployee.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaAddressBook } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const ModalEditEmployee = ({ displayModalEdit, onClickHandle, onSubmit }) => {
    const { employeeEdit } = useSelector((state) => state.adminCollection);
    const [emailEdit, setEmailEdit] = useState('');
    const [usernameEdit, setUsername] = useState('');
    const { id, fullname, username, email } = employeeEdit;
    useEffect(() => {
        if (employeeEdit) {
            setEmailEdit(email);
            setUsername(username);
        }
    }, [email, employeeEdit, username]);
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');

    const UpdateEmployee = (e) => {
        e.preventDefault();
        onSubmit({ id, emailEdit, usernameEdit, password, password_confirm });
        onClickHandle();
    };

    return (
        <div style={{ display: displayModalEdit }} className={cx('modal-add-employee')}>
            <div className={cx('modal-background')}>
                <div className={cx('modal-container')}>
                    <div className={cx('modal-header')}>
                        <span>Chỉnh sửa thông tin</span>
                    </div>
                    <form onSubmit={UpdateEmployee}>
                        <div className={cx('modal-body')}>
                            <div className={cx('inforItem')}>
                                <label for="fullname">
                                    Họ và tên <i style={{ color: 'red' }}>*</i>
                                </label>
                                <input
                                    style={{ backgroundColor: 'hsl(200, 80%, 90%)' }}
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    placeholder=""
                                    value={fullname}
                                    readOnly
                                />
                            </div>
                            <div className={cx('inforItem')}>
                                <label for="email">
                                    Email <i style={{ color: 'red' }}>*</i>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder=""
                                    value={emailEdit}
                                    onChange={(e) => setEmailEdit(e.target.value)}
                                />
                            </div>
                            <div className={cx('inforItem')}>
                                <label for="username">
                                    Tài khoản <i style={{ color: 'red' }}>*</i>
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder=""
                                    value={usernameEdit}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className={cx('inforItem')}>
                                <label for="password">
                                    Mật khẩu <i style={{ color: 'red' }}>*</i>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={cx('inforItem')}>
                                <label for="password-confirm">
                                    Xác nhận mật khẩu <i style={{ color: 'red' }}>*</i>
                                </label>
                                <input
                                    type="password"
                                    name="password-confirm"
                                    id="password-confirm"
                                    placeholder=""
                                    value={password_confirm}
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('modal-footer')}>
                            <div className={cx('button-red')} onClick={onClickHandle}>
                                <IoMdClose className={cx('icon')} />
                                <span>ĐÓNG</span>
                            </div>
                            <button style={{ border: 'none' }} className={cx('button-green')} type="submit">
                                <FaAddressBook className={cx('icon')} />
                                <span>Enter</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalEditEmployee;
