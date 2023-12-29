import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../config/API';

const initialState = {
    deliveries: [],
    isSuccess: false,
    isLoading: true,
    updateStatus: 'none',
    collections: [],
    deliveriesFromCollection: [],
    distributions: [],
    isSuccess2: false,
    isLoading2: true,
};

export const employeeCollectionSlice = createSlice({
    name: 'employeeCollection',
    initialState,
    reducers: {
        reset: () => initialState,
        resetUpdateStatus: (state) => {
            state.updateStatus = 'none';
        },

        ChangeUpdateStatus: (state) => {
            state.updateStatus = 'flex';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getDeliveries.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.deliveries = action.payload.deliveries;
            state.collections = action.payload.collections;
        });

        builder.addCase(getDeliveriesFromCollection.fulfilled, (state, action) => {
            state.isLoading2 = false;
            state.isSuccess2 = true;
            state.deliveriesFromCollection = action.payload.deliveries;
            state.distributions = action.payload.distributions;
        });
    },
});

export const getDeliveries = createAsyncThunk('collection/deliveries1/get', async (thunkAPI) => {
    try {
        const response = await axios.get(API.HTTP_API + '/collection/deliveries', {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});

export const getDeliveriesFromCollection = createAsyncThunk('collection/deliveries2/get', async (thunkAPI) => {
    try {
        const response = await axios.get(API.HTTP_API + '/collection/received', {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});

export const updateJourney = createAsyncThunk('collection/update', async (item, thunkAPI) => {
    try {
        const response = await axios.put(
            API.HTTP_API + '/collection/deliveries/update/' + item.transactionId,
            {
                status: item.journeyStatus,
                collectionId: item.collectionId,
                distributionId: item.distributionId,
            },
            {
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});
export const { reset, resetUpdateStatus, ChangeUpdateStatus } = employeeCollectionSlice.actions;
export default employeeCollectionSlice.reducer;
