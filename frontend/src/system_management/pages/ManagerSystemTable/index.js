import { React, useState, useEffect } from 'react';
import styles from './ManagerSystemTable.module.scss';
import classNames from 'classnames/bind';
import Layout from '~/system_management/layout';
import SystemTableFrom from './SystemTable/SystemTable';
import { useDispatch, useSelector } from 'react-redux';
import { GetSystem } from '~/all/features/ManagerSystemSlice';
import FadeLoader from 'react-spinners/FadeLoader';
import { MdOutlineChangeCircle } from 'react-icons/md';
const cx = classNames.bind(styles);
const ManagerSystemTable = () => {
    const [system, setSystem] = useState('collection');
    const dispatch = useDispatch();
    const { distributionList, collectionList, isSuccess2, isLoading2 } = useSelector((state) => state.managerSystem);
    useEffect(() => {
        if (!isSuccess2) {
            const delay = setTimeout(() => {
                dispatch(GetSystem());
            }, 1000);
            return () => {
                clearTimeout(delay);
            };
        }
    }, [dispatch]);
    const handleChangeSystem = () => {
        setSystem(system === 'collection' ? 'distribution' : 'collection');
    };
    let content;
    if (isLoading2) {
        content = (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                    background: 'hsl(200, 80%, 90%)',
                }}
            >
                <FadeLoader color="rgba(255, 255, 255, 1)" height="10" width="6" />
                <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
            </div>
        );
    } else if (isSuccess2) {
        content = (
            <div className={cx('system-container')}>
                <Layout>
                    <div className={cx('sectionSystem')}>
                        <div className={cx('header-system')}>
                            <span className={cx('header-system_title1')}>Hệ Thống Điểm Tập Kết - Giao Dịch</span>
                            <button className={cx('add-system')} onClick={handleChangeSystem}>
                                <span>OnChange</span>
                                <MdOutlineChangeCircle
                                    style={{
                                        display: 'inline-block',
                                        width: '1.4rem',
                                        height: '1.4rem',
                                        marginLeft: '0.15rem',
                                    }}
                                />
                            </button>
                            <span className={cx('header-system_title2')}>
                                {system === 'collection' ? 'Danh sách điểm tập kết' : 'Danh sách điểm giao dịch'}
                            </span>
                        </div>
                        <div className={cx('system-table')}>
                            <SystemTableFrom
                                distributionList={distributionList}
                                collectionList={collectionList}
                                system={system}
                            />
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
    return <div>{content}</div>;
};

export default ManagerSystemTable;
