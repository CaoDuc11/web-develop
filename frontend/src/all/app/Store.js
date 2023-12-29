import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/AuthSlice';
import adminDistributionReducer from '../features/AdminDistributionSlice';
import EmployeeDistributionReducer, { employeeDistributionSlice } from '../features/EmployeeDistributionSlice';
import adminCollectionReducer from '../features/AdminCollectionSlice';
import employeeCollectionReducer from '../features/EmployeeCollectionSlice';
import journeyReducer from '../features/JourneySlice';
import managerSystemReducer from '../features/ManagerSystemSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        adminDistribution: adminDistributionReducer,
        employeeDistribution: EmployeeDistributionReducer,
        adminCollection: adminCollectionReducer,
        employeeCollection: employeeCollectionReducer,
        journey: journeyReducer,
        managerSystemReducer: managerSystemReducer,
    },
});
