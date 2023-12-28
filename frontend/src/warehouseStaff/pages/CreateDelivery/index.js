import React, { useEffect, useState } from 'react';
import Layout from '~/warehouseStaff/layout';
import styles from './CreateDeliveryW.module.scss';
import classNames from 'classnames/bind';
import AcceptedList from './AcceptedList/AcceptedList';
import SearchBar from './SearchBar/SearchBar';
import FadeLoader from 'react-spinners/FadeLoader';
import { useDispatch, useSelector } from 'react-redux';
import {
    getDeliveries,
    updateJourney,
    resetUpdateStatus,
    ChangeUpdateStatus,
} from '~/all/features/EmployeeCollectionSlice';
import ModalDetailsCollection from '../../layout/components/ModalDetailsCollection/ModalDetailsCollection';
const cx = classNames.bind(styles);
const DeliveryFromDistribution = () => {
    const { deliveries, isLoading, isSuccess, updateStatus, collections } = useSelector(
        (state) => state.employeeCollection,
    );
    const dispatch = useDispatch();
    const [position, setPosition] = useState(0);
    const [displayModal, setDisplayModal] = useState('none');
    const [collectionReceived, setCollectionReceived] = useState({
        collectionId: '',
        collectionName: '',
    });
    useEffect(() => {
        if (!isSuccess || updateStatus === 'flex') {
            const delay = setTimeout(() => {
                dispatch(getDeliveries());
                setPosition(0);
                dispatch(resetUpdateStatus());
            }, 1000);
            return () => {
                clearTimeout(delay);
            };
        }
    }, [dispatch, isSuccess, updateStatus]);
    const onClickSubmit = (item) => {
        dispatch(updateJourney({ ...item, collectionId: collectionReceived.collectionId }));
        dispatch(ChangeUpdateStatus());
    };
    const handleSelectCollection = (e) => {
        const collection = collections.find((element) => element.collectionName === e.target.value);
        setCollectionReceived(collection);
    };
    const handleClickOpen = (index) => {
        setPosition(index);
        setDisplayModal('flex');
    };
    const CloseModal = () => {
        setDisplayModal('none');
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
                    <div className={cx('acceptedDelivery')}>
                        <SearchBar />
                        <AcceptedList
                            deliveries={deliveries}
                            onClick={onClickSubmit}
                            handleOpen={handleClickOpen}
                            collections={collections}
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
                    deliveries={deliveries}
                    index={position}
                    handleClose={CloseModal}
                />
            </div>
        );
    }
    return <div>{content}</div>;
};

export default DeliveryFromDistribution;
