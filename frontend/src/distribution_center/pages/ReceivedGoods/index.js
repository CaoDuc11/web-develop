import React, { useEffect, useState } from 'react';
import Layout from '~/distribution_center/layout';
import styles from './ReceivedGoods.module.scss';
import classNames from 'classnames/bind';
import ReceivedHeader from './ReceivedHeader/ReceivedHeader';
import ReceivedTable from './ReceivedTable/ReceivedTable';
import ModalDetails from './ModalDetails/ModalDetails';
import FadeLoader from 'react-spinners/FadeLoader';
import { useDispatch, useSelector } from 'react-redux';
import { GetDeliveryShip, resetCreateStatus, UpdateJourneyShip } from '~/all/features/EmployeeDistributionSlice';
const cx = classNames.bind(styles);

const ReceivedGoods = () => {
    const { deliveriesShip, isLoading2, isSuccess2, createStatus } = useSelector((state) => state.employeeDistribution);
    const dispatch = useDispatch();
    const [position, setPosition] = useState(0);
    const [displayModal, setDisplayModal] = useState('none');
    useEffect(() => {
        if (!isSuccess2 || createStatus === 'flex') {
            const delay = setTimeout(() => {
                dispatch(GetDeliveryShip());
                setPosition(0);
                dispatch(resetCreateStatus());
            }, 1000);
            return () => {
                clearTimeout(delay);
            };
        }
    }, [dispatch, isSuccess2, createStatus]);
    const onClickSubmit = (item) => {
        dispatch(UpdateJourneyShip(item));
    };
    const handleClickOpen = (index) => {
        setPosition(index);
        setDisplayModal('flex');
    };
    const CloseModal = () => {
        setDisplayModal('none');
    };
    const selectConfirm = (e, item) => {
        dispatch(UpdateJourneyShip({ ...item, confirm: e.target.value }));
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
            <div className={cx('receved-goods-container')}>
                <Layout>
                    <div className={cx('received-goods-page')}>
                        <ReceivedHeader />
                        <ReceivedTable
                            deliveriesShip={deliveriesShip}
                            handleOpen={handleClickOpen}
                            onClick={onClickSubmit}
                            selectConfirm={selectConfirm}
                        />
                    </div>
                </Layout>
                <div style={{ display: createStatus }} className={cx('loading')}>
                    <div>
                        <FadeLoader color="rgba(255, 255, 255, 1)" height="10" width="6" />
                        <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
                    </div>
                </div>
                <ModalDetails
                    className={cx('modal-details')}
                    display={displayModal}
                    deliveries={deliveriesShip}
                    index={position}
                    handleClose={CloseModal}
                />
            </div>
        );
    }
    return <div>{content}</div>;
};

export default ReceivedGoods;
