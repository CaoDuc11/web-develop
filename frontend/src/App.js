import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardDDD from './distribution_center/pages/DashboardDDD';
import CreateDelivery from './distribution_center/pages/CreateDelivery';
import DeliveryManagement from './distribution_center/pages/DeliveryManagement';
import ReceivedGoods from './distribution_center/pages/ReceivedGoods';

import Add from './warehouse/pages/ManageStaff/Add/Add';
import ManageStaff from './warehouse/pages/ManageStaff/ManageStaff';
import ChangeInfor from './warehouse/pages/ManageStaff/ChangeInfor/ChangeInfor';
import Warehouse from './warehouse/pages/Dashboard';

import Dashboard from './distribution_admin/pages/Dashboard';
import Employees from './distribution_admin/pages/Employees';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/distribution/dashboard" element={<DashboardDDD />} />
                    <Route path="/distribution/createdelivery" element={<CreateDelivery />} />
                    <Route path="/distribution/deliverymanagement" element={<DeliveryManagement />} />
                    <Route path="/distribution/receivedgoods" element={<ReceivedGoods />} />

                    <Route path="/admin/distribution/dashboard" element={<Dashboard />} />
                    <Route path="/admin/distribution/employees" element={<Employees />} />

                    <Route path="/warehouse/dashboard" element={<Warehouse />} />
                    <Route path="/warehouse/managestaff" element={<ManageStaff />} />
                    <Route path="/warehouse/managestaff/add" element={<Add />} />
                    <Route path="/warehouse/managestaff/changeInfor" element={<ChangeInfor />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
