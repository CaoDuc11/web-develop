import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../config/API';
import CreateDelivery from '~/distribution_center/pages/CreateDelivery';
const initialState = {
    deliveries: [],
    deliveryCreate: {
        senderId: nanoid(),
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        senderProvince: '',
        senderDistrict: '',
        senderWard: '',
        receiverId: nanoid(),
        receiverName: '',
        receiverPhone: '',
        receiverAddress: '',
        receiverProvince: '',
        receiverDistrict: '',
        receiverWard: '',
        parcelId: nanoid(),
        parcelContent: '',
        parcelWeight: '',
        feeId: nanoid(),
        cod: '',
        feeMain: '',
        feeSub: '',
        gtgt: '',
        vat: '',
        other: '',
    },
    isError: false,
    message: '',
    isSuccess: false,
    isLoading: true,
    createStatus: 'none',
};

export const employeeDistributionSlice = createSlice({
    name: 'employeeDistribution',
    initialState,
    reducers: {
        reset: () => initialState,
        resetState: (state) => {
            state.isError = false;
            state.message = '';
            state.isSuccess = true;
        },
        resetCreateStatus: (state) => {
            state.createStatus = 'none';
        },
        addDelivery: (state, action) => {
            state.deliveryCreate = { ...state.deliveryCreate, ...action.payload };
        },
    },

    extraReducers: (builder) => {
        //Xử lý khi trạng thái của GetDelivery cập nhật
        builder.addCase(GetDelivery.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(GetDelivery.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.deliveries = action.payload;
        });
        builder.addCase(GetDelivery.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //Xử lý khi trạng thái của CreateDelivery cập nhật
        builder.addCase(createDelivery.fulfilled, (state) => {
            state.createStatus = 'flex';
        });
    },
});

export const createDelivery = createAsyncThunk('distribution/create', async (state, thunkAPI) => {
    try {
        const response = await axios.post(API.HTTP_API + '/distribution/create/', state, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});

export const GetDelivery = createAsyncThunk('distribution/get', async (thunkAPI) => {
    try {
        const response = await axios.get(API.HTTP_API + '/distribution/deliveries/', {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});

export const { addDelivery, reset, resetState, resetCreateStatus } = employeeDistributionSlice.actions;
export default employeeDistributionSlice.reducer;
