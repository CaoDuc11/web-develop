import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/AuthSlice';
import adminDistributionReducer from '../features/AdminDistributionSlice';
import EmployeeDistributionReducer, { employeeDistributionSlice } from '../features/EmployeeDistributionSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        adminDistribution: adminDistributionReducer,
        employeeDistribution: EmployeeDistributionReducer,
    },
});
