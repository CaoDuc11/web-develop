import React from 'react';
import Layout from '~/warehouseStaff/layout';

function SelectDestination() {
    return (
        <Layout>
            <div id="orderDetails">
                {/* <!-- Thông tin đơn hàng sẽ được hiển thị ở đây --> */}
                <p>
                    <strong>Mã đơn hàng:</strong> DH12345
                </p>
                <p>
                    <strong>Người nhận:</strong> Nguyễn Văn A
                </p>
                {/* <!-- Các thông tin khác của đơn hàng --> */}
            </div>

            <form id="forwardForm">
                <label for="nextLocation">Chọn điểm tiếp theo:</label>
                <select id="nextLocation" name="nextLocation">
                    <option value="warehouse">Kho hàng</option>
                    <option value="shipping">Vận chuyển</option>
                    <option value="delivery">Giao hàng</option>
                </select>
                <button type="submit">Chuyển tiếp</button>
            </form>
        </Layout>
    );
}

export default SelectDestination;
