import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../config/API';
const initialState = {
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
    isError: false,
    message: '',
    isSuccess: false,
    isLoading: false,
};

export const employeeDistributionSlice = createSlice({
    name: 'employeeDistribution',
    initialState,
    reducers: {
        reset: () => initialState,
        addDelivery: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const createDelivery = createAsyncThunk('distribution/create', async (state, thunkAPI) => {
    try {
        console.log(state);
        const response = await axios.post(API.HTTP_API + '/distribution/create/', state, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});

export const { addDelivery } = employeeDistributionSlice.actions;
export default employeeDistributionSlice.reducer;
