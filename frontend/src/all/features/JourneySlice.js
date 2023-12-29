import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../config/API';

const initialState = {
    isError: false,
    message: '',
    isSuccess: false,
    isLoading: false,
    journey: [],
};

export const getJourney = createAsyncThunk('/journey', async (id, thunkAPI) => {
    try {
        const response = await axios.get(API.HTTP_API + "/journey/" + id, { withCredentials: true });
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const journeySlice = createSlice({
    name: 'journey',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.message = '';
            state.isSuccess = false;
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getJourney.fulfilled, (state, action) => {
            state.journey = action.payload;
            state.isSuccess = true;
        });
    }
});

export const { reset } = journeySlice.actions;
export default journeySlice.reducer;