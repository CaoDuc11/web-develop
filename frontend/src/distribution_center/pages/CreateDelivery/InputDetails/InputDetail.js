import React from 'react';
import styles from './InputDetail.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const InputDetail = ({ handleDetails }) => {
    return (
        <div className={cx('formDetail')}>
            <div className={cx('labelDiv')}>
                <label for="label-detail" className={cx('label-detail')}>
                    3. Hàng hóa
                </label>
            </div>

            <div className={cx('productType')}>
                <label for="product-type" className={cx('label-checktype')}>
                    Loại hàng hóa <i style={{ color: 'red' }}>*</i>
                </label>
                <div className={cx('checkbox-type')}>
                    <div className={cx('type-item')}>
                        <input
                            type="checkbox"
                            id="product-type1"
                            name="product-type1"
                            value="Tài liệu"
                            className={cx('type-item-checkbox')}
                        />
                        <label for="product-type1" className={cx('type-item-label')}>
                            Tài liệu
                        </label>
                    </div>

                    <div className={cx('type-item')}>
                        <input
                            type="checkbox"
                            id="product-type2"
                            name="product-type2"
                            value="Hàng hóa"
                            className={cx('type-item-checkbox')}
                        />
                        <label for="product-type2" className={cx('type-item-label')}>
                            Hàng hóa
                        </label>
                    </div>
                </div>
            </div>

            <div className={cx('inforItem')}>
                <label for="product-detail">
                    Nội dung hàng hóa <i style={{ color: 'red' }}>*</i>
                </label>
                <input
                    type="text"
                    name="parcelContent"
                    id="product-detail"
                    placeholder="Tài liệu học tập"
                    onChange={handleDetails}
                />
            </div>

            <div className={cx('inforItem')}>
                <label for="weight">
                    Trọng lượng (gram) <i style={{ color: 'red' }}>*</i>
                </label>
                <input type="text" name="parcelWeight" id="weight" placeholder="200" onChange={handleDetails} />
            </div>
        </div>
    );
};

export default InputDetail;
