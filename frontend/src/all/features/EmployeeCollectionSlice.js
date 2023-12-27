import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../config/API';

const initialState = {
    deliveries: [],
    isError: false,
    isSuccess: false,
    isLoading: true,
    updateStatus: 'none',
    collections: [],
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
    },
});

export const getDeliveries = createAsyncThunk('collection/get', async (thunkAPI) => {
    try {
        const response = await axios.get(API.HTTP_API + '/collection/deliveries/2', {
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
