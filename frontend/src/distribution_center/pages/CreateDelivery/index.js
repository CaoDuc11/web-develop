import React from 'react';
import Layout from '~/distribution_center/layout';
import styles from './CreateDelivery.module.scss';
import classNames from 'classnames/bind';
import { IoDocumentTextSharp } from 'react-icons/io5';
import InputInfor from './InputInfor/InputInfor';
import InputDetail from './InputDetails/InputDetail';
import DeliveryFee from './DeliveryFee/DeliveryFee';
import { useDispatch, useSelector } from 'react-redux';
import { addDelivery, employeeDistribution, createDelivery, reset } from '~/all/features/EmployeeDistributionSlice';

const cx = classNames.bind(styles);

const CreateDelivery = () => {
    const dispatch = useDispatch();
    const { deliveryCreate, isSuccess } = useSelector((state) => state.employeeDistribution);
    const handleInput = (e) => {
        dispatch(addDelivery({ [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        dispatch(createDelivery(deliveryCreate));
        dispatch(reset());
    };

    return (
        <Layout>
            <div className={cx('sectionCreateDelivery')}>
                <div className={cx('header-label')}>
                    <IoDocumentTextSharp className={cx('header-icon')} />
                    <span className={cx('header-title')}>Tạo mới đơn hàng</span>
                </div>

                <div className={cx('mainCreateDelivery')}>
                    <div className={cx('receiverSenderInfor')}>
                        <InputInfor handleInforCustomer={handleInput} />
                    </div>

                    <div className={cx('itemDetail')}>
                        <InputDetail handleDetails={handleInput} />
                    </div>

                    <div className={cx('deliveryFee')}>
                        <DeliveryFee handleFee={handleInput} handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateDelivery;
