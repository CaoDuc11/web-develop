import { useState, useEffect, React } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser, reset } from '~/all/features/AuthSlice';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { IoPerson, IoKeySharp } from 'react-icons/io5';

const cx = classNames.bind(styles);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies('user');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user || isSuccess) {
            setCookie('access_token', user.token, { path: '/' });
            if (user.position === 'admin_distribution') {
                navigate('/admin/distribution/dashboard');
            }
            if (user.position === 'employee_distribution') {
                navigate('/distribution/dashboard');
            }
            if (user.position === 'admin_collection') {
                navigate('/warehouse/dashboard');
            }
            if (user.position === 'employee_collection') {
                navigate('/warehouse/staff/dashboard');
            }
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    };

    return (
        <div className={cx('loginSection')}>
            <div className={cx('login-background')}>
                <img src={images.login} alt="login" />
            </div>
            <div className={cx('login-container')}>
                <div className={cx('login-header')}>
                    <img src={images.logo} alt="logo" />
                    <h3 className={cx('title')}>Magic Post</h3>
                </div>

                <div className={cx('login-body')}>
                    <form onSubmit={Auth}>
                        <div className={cx('account', 'field')}>
                            <label className={cx('account-label', 'label')}>
                                <IoPerson />
                                <span>Tài khoản</span>
                            </label>
                            <div className={cx('control')}>
                                <input
                                    type="text"
                                    className={cx('input-account', 'input')}
                                    placeholder="Tài khoản"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className={cx('password', 'field')}>
                            <label className={cx('account-label', 'label')}>
                                <IoKeySharp />
                                <span>Mật khẩu</span>
                            </label>
                            <div className={cx('control')}>
                                <input
                                    type="password"
                                    className={cx('password-account', 'input')}
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" id="button" className={cx('btn-login')}>
                            <span>Đăng nhập</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
