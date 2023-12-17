import React, { useEffect, useState } from 'react';
import styles from './DeliveryManagement.module.scss';
import classNames from 'classnames/bind';
import Layout from '~/distribution_center/layout';
import DeliveryList from './DeliveryList/DeliveryList';
import DeliveryDetails from './DeliveryDetails/DeliveryDetails';
import FadeLoader from 'react-spinners/FadeLoader';
import { useDispatch, useSelector } from 'react-redux';
import { GetDelivery, resetCreateStatus, DeleteDelivery } from '~/all/features/EmployeeDistributionSlice';
const cx = classNames.bind(styles);
const DeliveryManagement = () => {
    const { deliveries, isLoading, isSuccess, createStatus } = useSelector((state) => state.employeeDistribution);
    const dispatch = useDispatch();
    const [position, setPosition] = useState(0);
    useEffect(() => {
        if (!isSuccess || createStatus === 'flex') {
            const delay = setTimeout(() => {
                dispatch(GetDelivery());
                setPosition(0);
                dispatch(resetCreateStatus());
            }, 1000);
            return () => {
                clearTimeout(delay);
            };
        }
    }, [dispatch, createStatus]);

    const onClickHandlePostion = (index) => {
        setPosition(index);
    };

    const onClickDeleteDelivery = (item) => {
        dispatch(DeleteDelivery(item));
    };

    let content;
    if (isLoading) {
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
    } else if (isSuccess) {
        content = (
            <div className={cx('deliverySection')}>
                <Layout>
                    <div className={cx('delivery-management-page')}>
                        <div className={cx('list-delivery')}>
                            <DeliveryList
                                deliveries={deliveries}
                                position={position}
                                onClickHandlePostion={onClickHandlePostion}
                                onClickDelete={onClickDeleteDelivery}
                            />
                        </div>
                        <div className={cx('delivery-details')}>
                            <DeliveryDetails deliveryDetail={deliveries} position={position} />
                        </div>
                    </div>
                </Layout>
                <div style={{ display: createStatus }} className={cx('loading')}>
                    <div>
                        <FadeLoader color="rgba(255, 255, 255, 1)" height="10" width="6" />
                        <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
    return <div>{content}</div>;
};

export default DeliveryManagement;
