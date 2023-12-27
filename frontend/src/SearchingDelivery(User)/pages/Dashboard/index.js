import React from 'react';
import Layout from '~/SearchingDelivery(User)/layout';
import images from '~/assets/index';
import classNames from 'classnames/bind';
import styles from './user.module.scss';
import { IoLocation, IoMail } from 'react-icons/io5';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';

const cx = classNames.bind(styles);

const User = () => {
    return (
        <Layout>
            <img src={images.login} alt="login" className={cx('background')} />
            <div className={cx('searchEngine')}>
                <h1>Tra cứu vận đơn</h1>
                <form className={cx('orderForm')}>
                    <label className={cx('searchInput')} for="orderId">
                        Nhập mã đơn hàng:
                    </label>
                    <input className={cx('searchInput')} type="text" id="orderId" name="orderId" required />
                    <p>Nhập mã vận đơn của bạn (cách nhau bởi dấu phẩy), tối đa 10 vận đơn.</p>
                    <button className={cx('searchInput')} type="submit">
                        Tìm kiếm
                    </button>
                </form>
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
            <div className={cx('contact')}>
                <div className={cx('infor')}>
                    <li>
                        <h3>Liên hệ với chúng tôi</h3>
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
                </div>
                <img className={cx('infor-icon')} src={images.tinh_thanh} alt="tinh_thanh" />
                <img className={cx('infor-icon')} src={images.buu_cuc} alt="buu_cuc" />
                <img className={cx('infor-icon')} src={images.xe} alt="xe" />
                <img className={cx('infor-icon')} src={images.nhan_vien} alt="nhan_vien" />
            </div>
            <div className={cx('place-list')}>
                <h1>MẠNG LƯỚI PHỦ SÓNG TOÀN CẦU</h1>
                <div className={cx('place-item')}>
                    <img src={images.newyork} alt="newyork" />
                    <h3>New York</h3>
                </div>
                <div className={cx('place-item')}>
                    <img src={images.paris} alt="paris" />
                    <h3>Paris</h3>
                </div>
                <div className={cx('place-item')}>
                    <img src={images.sanfran} alt="sanfran" />
                    <h3>San Francisco</h3>
                </div>
            </div>
        </Layout>
    );
};

export default User;
