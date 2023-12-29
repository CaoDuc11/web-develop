import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardDDD from './distribution_center/pages/DashboardDDD';
import CreateDelivery from './distribution_center/pages/CreateDelivery';
import DeliveryManagement from './distribution_center/pages/DeliveryManagement';
import ReceivedGoods from './distribution_center/pages/ReceivedGoods';
import StatisticWarehouse from './warehouse/pages/StatisticWarehouse/StatisticWarehouse';
import Warehouse from './warehouse/pages/Dashboard';
import ManageStaff from './warehouse/pages/Employees';
import Employees from './distribution_admin/pages/Employees';
import WarehouseStaff from './warehouseStaff/pages/Dashboard';
import DeliveryFromCollection from './warehouseStaff/pages/DeliveryFromCollection';
import DeliveryFromDistribution from './warehouseStaff/pages/CreateDelivery';
import Login from './all/Login';
import User from './SearchingDelivery(User)/pages/Dashboard';
import AdminDistributionDashboard from './distribution_admin/pages/Dashboard';
import StatisticDistributionEmployee from './distribution_center/pages/StatisticDistributionEmployee';
import ManagerDashboard from './system_management/pages/ManagerDashboard';
import ManagerStatistic from './system_management/pages/ManagerStatistic';
import ManagerSystemTable from './system_management/pages/ManagerSystemTable';
import ManagerEmployee from './system_management/pages/ManagerEmployee';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/distribution/dashboard" element={<DashboardDDD />} />
                    <Route path="/distribution/createdelivery" element={<CreateDelivery />} />
                    <Route path="/distribution/deliverymanagement" element={<DeliveryManagement />} />
                    <Route path="/distribution/statistic" element={<StatisticDistributionEmployee />} />

                    <Route path="/warehouse/dashboard" element={<Warehouse />} />
                    <Route path="/warehouse/managestaff" element={<ManageStaff />} />
                    <Route path="/warehouse/statistic" element={<StatisticWarehouse />} />

                    <Route path="/distribution/receivedgoods" element={<ReceivedGoods />} />

                    <Route path="/admin/distribution/dashboard" element={<AdminDistributionDashboard />} />
                    <Route path="/admin/distribution/employees" element={<Employees />} />
                    <Route path="/user/dashboard" element={<User />} />

                    <Route path="/warehouse/staff/dashboard" element={<WarehouseStaff />} />
                    <Route path="/warehouse/staff/acceptDelivery" element={<DeliveryFromDistribution />} />
                    <Route path="/warehouse/staff/createDelivery" element={<DeliveryFromCollection />} />

                    <Route path="/management/dashboard" element={<ManagerDashboard />} />
                    <Route path="/management/statistics" element={<ManagerStatistic />} />
                    <Route path="/management/system" element={<ManagerSystemTable />} />
                    <Route path="/management/employees" element={<ManagerEmployee />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
