import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../config/API';

const initialState = {
    isError: false,
    message: '',
    isSuccess: false,
    isLoading: false,
    usersList: [],
};

export const CreateEmployee = createAsyncThunk('admin/distribution/create', async (inforEmployee, thunkAPI) => {
    try {
        const response = await axios.post(
            API.HTTP_API + '/admin/distribution/create',
            {
                fullname: inforEmployee.fullname,
                email: inforEmployee.email,
                username: inforEmployee.username,
                password: inforEmployee.password,
                password_confirm: inforEmployee.password_confirm,
            },
            { withCredentials: true },
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const adminDistributionSlice = createSlice({
    name: 'adminDistribution',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(CreateEmployee.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(CreateEmployee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(CreateEmployee.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    },
});
export default adminDistributionSlice.reducer;
