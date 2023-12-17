import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/AuthSlice';
import adminDistributionReducer from '../features/AdminDistributionSlice';
import adminCollectionReducer from '../features/AdminCollectionSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        adminDistribution: adminDistributionReducer,
        adminCollection: adminCollectionReducer,
    },
});
