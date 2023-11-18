import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './distribution_center/pages/Dashboard';
import CreateDelivery from './distribution_center/pages/CreateDelivery';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/distribution/dashboard" element={<Dashboard />} />
                    <Route path="/distribution/createdelivery" element={<CreateDelivery />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
