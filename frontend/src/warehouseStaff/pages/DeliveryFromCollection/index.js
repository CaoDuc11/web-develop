import React, { useState, useEffect } from 'react';
import Layout from '~/warehouseStaff/layout';
import styles from './DeliveryFromCollection.module.scss';
import classNames from 'classnames/bind';
import ReceivedHeader from './ReceivedHeader/ReceivedHeader';
import DeliveriesList from './DeliveriesList/DeliveriesList';
import FadeLoader from 'react-spinners/FadeLoader';
import { useDispatch, useSelector } from 'react-redux';
import {
    getDeliveriesFromCollection,
    resetUpdateStatus,
    updateJourney,
    ChangeUpdateStatus,
} from '~/all/features/EmployeeCollectionSlice';
import ModalDetailsCollection from '~/warehouseStaff/layout/components/ModalDetailsCollection/ModalDetailsCollection';
const cx = classNames.bind(styles);
const DeliveryFromCollection = () => {
    const { deliveriesFromCollection, isLoading2, isSuccess2, distributions, updateStatus } = useSelector(
        (state) => state.employeeCollection,
    );
    const dispatch = useDispatch();
    const [position, setPosition] = useState(0);
    const [displayModal, setDisplayModal] = useState('none');
    const [distributionReceived, setDistributionReceived] = useState({
        distributionId: '',
        distributionName: '',
    });
    useEffect(() => {
        if (!isSuccess2 || updateStatus === 'flex') {
            const delay = setTimeout(() => {
                dispatch(getDeliveriesFromCollection());
                setPosition(0);
                dispatch(resetUpdateStatus());
            }, 1000);
            return () => {
                clearTimeout(delay);
            };
        }
    }, [dispatch, isSuccess2, updateStatus]);
    const onClickSubmit = (item) => {
        dispatch(updateJourney({ ...item, distributionId: distributionReceived.distributionId }));
        dispatch(ChangeUpdateStatus());
    };
    const handleSelectCollection = (e) => {
        const distribution = distributions.find((element) => element.distributionName === e.target.value);
        setDistributionReceived(distribution);
    };
    const handleClickOpen = (index) => {
        setPosition(index);
        setDisplayModal('flex');
    };
    const CloseModal = () => {
        setDisplayModal('none');
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
            <div className={cx('deliveries-from-collection')}>
                <Layout>
                    <div className={cx('deliveries-content')}>
                        <ReceivedHeader />
                        <DeliveriesList
                            deliveries={deliveriesFromCollection}
                            distributions={distributions}
                            onClick={onClickSubmit}
                            handleOpen={handleClickOpen}
                            handleSelect={handleSelectCollection}
                        />
                    </div>
                </Layout>
                <div style={{ display: updateStatus }} className={cx('loading')}>
                    <div>
                        <FadeLoader color="rgba(255, 255, 255, 1)" height="10" width="6" />
                        <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
                    </div>
                </div>
                <ModalDetailsCollection
                    display={displayModal}
                    deliveries={deliveriesFromCollection}
                    index={position}
                    handleClose={CloseModal}
                />
            </div>
        );
    }
    return <div>{content}</div>;
};

export default DeliveryFromCollection;
