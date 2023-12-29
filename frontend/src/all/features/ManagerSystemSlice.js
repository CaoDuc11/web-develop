import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../config/API';
const initialState = {
    isSuccessHome: false,
    isLoadingHome: true,
    adminUser: [],
    isSuccess2: false,
    isLoading2: true,
    distributionList: [],
    collectionList: [],
};

export const GetAdminUser = createAsyncThunk('manager/adminuser', async (thunkAPI) => {
    try {
        const response = await axios.get(API.HTTP_API + '/management/adminuser', { withCredentials: true });
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const GetSystem = createAsyncThunk('manager/system', async (options, thunkAPI) => {
    try {
        const response = await axios.get(API.HTTP_API + '/management/system', {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const managerSystemSlice = createSlice({
    name: 'managerSystem',
    initialState,
    reducers: {
        reset1: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(GetAdminUser.fulfilled, (state, action) => {
            state.adminUser = action.payload;
            state.isLoadingHome = false;
            state.isSuccessHome = true;
        });
        builder.addCase(GetSystem.fulfilled, (state, action) => {
            state.distributionList = action.payload.distributions;
            state.collectionList = action.payload.collections;
            state.isLoading2 = false;
            state.isSuccess2 = true;
        });
    },
});

export const { reset1 } = managerSystemSlice.actions;
export default managerSystemSlice.reducer;
