import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './distribution_center/pages/Dashboard';
import CreateDelivery from './distribution_center/pages/CreateDelivery';
import DeliveryManagement from './distribution_center/pages/DeliveryManagement';
import DeliveryReceipt from './distribution_center/pages/DeliveryManagement/DeliveryReceipt/DeliveryReceipt';
import ReceivedGoods from './distribution_center/pages/ReceivedGoods';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/distribution/dashboard" element={<Dashboard />} />
                    <Route path="/distribution/createdelivery" element={<CreateDelivery />} />
                    <Route path="/distribution/deliverymanagement" element={<DeliveryManagement />} />
                    <Route path="/distribution/receivedgoods" element={<ReceivedGoods />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
