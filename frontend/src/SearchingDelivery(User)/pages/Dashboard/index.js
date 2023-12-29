import React from 'react';
import Layout from '~/SearchingDelivery(User)/layout';
import images from '~/assets/index';
import classNames from 'classnames/bind';
import styles from './user.module.scss';
import { IoLocation, IoMail } from 'react-icons/io5';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getJourney } from '~/all/features/JourneySlice';
import { useState } from 'react';

const cx = classNames.bind(styles);

const User = () => {
    const dispatch = useDispatch();
    const { journey } = useSelector((state) => state.journey);
    const { id, setId } = useState('');
    const handleInput = (e) => {
        setId(e.target.value);
    }
    const handleSubmit = () => {
        dispatch(getJourney(id));
    }
    return (
        <Layout>
            <img src={images.login} alt="login" className={cx('background')} />
            <div className={cx('searchEngine')}>
                <h1>Tra cứu vận đơn</h1>
                <form className={cx('orderForm')}>
                    <label className={cx('searchInput')} for="orderId">
                        Nhập mã đơn hàng:
                    </label>
                    <input className={cx('searchInput')} type="text" id="orderId" name="orderId" required onChange={handleInput} />
                    <button className={cx('searchInput')} type="submit" onClick={handleSubmit}>
                        Tìm kiếm
                    </button>
                    <p>Nhập mã vận đơn của bạn (cách nhau bởi dấu phẩy), tối đa 10 vận đơn.</p>
                    
                </form>
                <div className={cx('result-table')}>
                    <div className={cx('top')}>
                        <div className={cx('title')}>Kết quả tìm kiếm</div>
                    </div>
                    <div className={cx('bottom')}>
                        {id ? (
                            <table className={cx('table-list')}>
                                <thead>
                                    <tr className={cx('header-table')}>
                                        <th style={{ textAlign: 'center' }}>MÃ VẬN ĐƠN</th>
                                        <th>ĐƯỢC TẠO</th>
                                        <th>ĐẾN ĐIỂM TẬP KẾT 1</th>
                                        <th>ĐẾN ĐIỂM TẬP KẾT 2</th>
                                        <th>ĐẾN ĐIỂM GIAO DỊCH 2</th>
                                        <th>TÌNH TRẠNG</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className={cx('body-table')}>
                                        <th style={{ textAlign: 'center' }}>A0544328</th>
                                        <th>{journey.createdAt}</th>
                                        <th>{journey.collectionTime1 != null ? journey.collectionTime1 : 'Chưa đến'}</th>
                                        <th>{journey.collectionTime2 != null ? journey.collectionTime2 : 'Chưa đến'}</th>
                                        <th>{journey.distributionTime2 != null ? journey.distributionTime2 : 'Chưa đến'}</th>
                                        <th>{journey.status == 9 ? 'Đã hoàn thành' : 'Đang xử lý'}</th>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <h1 className={cx('warning')}>Không tìm thấy đơn hàng</h1>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('about')}>
                <h1>VỀ CHÚNG TÔI</h1>
                <i>Uy tín làm nên thương hiệu</i>
                <p className={cx('content')}>
                    Chào mừng bạn đến với Magic Post - nơi kết nối những chuyến hành trình vận chuyển đầy phép màu!
                    Magic Post không chỉ là một dịch vụ vận chuyển thông thường, mà là một trải nghiệm vận chuyển độc
                    đáo và tuyệt vời. Chúng tôi tận dụng sự sáng tạo và công nghệ để biến mọi hành trình gửi hàng của
                    bạn trở nên thuận tiện, an toàn và kỳ diệu. Với cam kết mang đến sự tiện lợi và tin cậy, Magic Post
                    tự hào với mạng lưới vận chuyển toàn cầu, kết nối các điểm đến khác nhau một cách thông minh và linh
                    hoạt nhất. Chúng tôi không chỉ đơn giản là đưa hàng từ A đến B, mà còn mang đến trải nghiệm tuyệt
                    vời từ quá trình đặt hàng đến lúc nhận hàng. Với đội ngũ chuyên nghiệp và nhiệt huyết, Magic Post
                    không ngừng phát triển và cải thiện quy trình vận chuyển, giúp bạn yên tâm khi giao phó hàng hóa cho
                    chúng tôi. Tận hưởng sự linh hoạt và đa dạng trong lựa chọn dịch vụ vận chuyển phù hợp với nhu cầu
                    cụ thể của bạn.
                </p>
                <p className={cx('content')}>
                    Chúng tôi hiểu rằng mỗi gói hàng là quan trọng và đáng giá với bạn, do đó, Magic Post cam kết đưa
                    hàng đến đích an toàn và đúng thời gian. Chúng tôi không chỉ vận chuyển hàng hóa mà còn mang đến
                    niềm vui và sự hài lòng cho bạn cùng người nhận. Hãy để Magic Post biến những chuyến hành trình vận
                    chuyển trở thành những kỷ niệm đáng nhớ và phép màu. Chúng tôi luôn sẵn sàng đồng hành và mang đến
                    trải nghiệm vận chuyển tốt nhất cho bạn!
                </p>
            </div>
        
            <ul className={cx('image-icon')}>
                <li className={cx('infor-icon')}>
                    <img src={images.tinh_thanh} alt="tinh_thanh" />
                    <h4>63 TỈNH THÀNH</h4>
                </li>
                <li className={cx('infor-icon')}>
                    <img src={images.buu_cuc} alt="buu_cuc" />
                    <h4>BƯU CỤC RỘNG KHẮP</h4>
                </li>
                <li className={cx('infor-icon')}>
                    <img src={images.xe} alt="xe" />
                    <h4>ĐA DẠNG PHƯƠNG TIỆN</h4>
                </li>
                <li className={cx('infor-icon')}>
                    <img src={images.nhan_vien} alt="nhan_vien" />
                    <h4>NHÂN SỰ CHUYÊN NGHIỆP</h4>
                </li>
            </ul>
            <br></br>
            <h1 className={cx('title')}>MẠNG LƯỚI PHỦ SÓNG TOÀN CẦU</h1>
            <ul className={cx('place-list')}>
                <li className={cx('place-item')}>
                    <img src={images.newyork} alt="newyork" />
                    <h3>New York</h3>
                </li>
                <li className={cx('place-item')}>
                    <img src={images.paris} alt="paris" />
                    <h3>Paris</h3>
                </li>
                <li className={cx('place-item')}>
                    <img src={images.sanfran} alt="sanfran" />
                    <h3>San Francisco</h3>
                </li>
            </ul>
            <div className={cx('contact')}>
                <ul className={cx('infor')}>
                    <h3>Liên hệ với chúng tôi</h3>
                    <li>
                        <IoLocation className={cx('user-icon')} />
                        <i>Cầu Giấy, Hà Nội, Việt Nam</i>
                    </li>
                    <li>
                        <FaPhoneAlt className={cx('user-icon')} />
                        <i>0123456789</i>
                    </li>
                    <li>
                        <IoMail className={cx('user-icon')} />
                        <i>magicpostofficial@gmail.com</i>
                    </li>
                </ul>
            </div>
            <img src={images.map} alt="login" className={cx('background')} />
        </Layout>
    );
};

export default User;
