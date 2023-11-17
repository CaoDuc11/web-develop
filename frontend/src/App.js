import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './distribution_center/pages/Dashboard';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/distribution/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
