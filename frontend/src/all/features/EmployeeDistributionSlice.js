import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../config/API';
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
        journeyId1: nanoid(),
    },
    isError: false,
    message: '',
    isSuccess: false,
    isLoading: true,
    createStatus: 'none',
    deliveriesShip: [],
    isSuccess2: false,
    isLoading2: true,
    isSuccessHome: false,
    isLoadingHome: true,
    deliveriesDay: [],
};

export const employeeDistributionSlice = createSlice({
    name: 'employeeDistribution',
    initialState,
    reducers: {
        resetEmployeeDistribution: () => initialState,
        reset: (state) => {
            const place = {
                senderId: nanoid(),
                receiverId: nanoid(),
                parcelId: nanoid(),
                feeId: nanoid(),
                journeyId1: nanoid(),
            };
            state.deliveryCreate = { ...initialState.deliveryCreate, ...place };
        },
        resetCreateStatus: (state) => {
            state.createStatus = 'none';
        },

        ChangStatusOption: (state) => {
            state.createStatus = 'flex';
        },
        addDelivery: (state, action) => {
            state.deliveryCreate = { ...state.deliveryCreate, ...action.payload };
        },
    },

    extraReducers: (builder) => {
        //Xử lý khi trạng thái của GetDelivery cập nhật
        builder.addCase(GetDelivery.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.deliveries = action.payload;
        });

        builder.addCase(GetDeliveryDay.fulfilled, (state, action) => {
            state.isLoadingHome = false;
            state.isSuccessHome = true;
            state.deliveriesDay = action.payload;
        });

        builder.addCase(GetDeliveryShip.fulfilled, (state, action) => {
            state.isLoading2 = false;
            state.isSuccess2 = true;
            state.deliveriesShip = action.payload;
        });

        //Xử lý khi trạng thái của CreateDelivery cập nhật
        builder.addCase(createDelivery.fulfilled, (state) => {
            if (state.isSuccess === true) {
                state.createStatus = 'flex';
                state.isLoading = false;
            } else {
                state.isLoading = true;
            }
        });

        //Xử lý khi trạng thái của DeleteDelivery cập nhật
        builder.addCase(DeleteDelivery.fulfilled, (state) => {
            state.createStatus = 'flex';
            state.isLoading = false;
        });

        //Xử lý khi trạng thái của UpdateDelivery cập nhật
        builder.addCase(UpdateDelivery.fulfilled, (state) => {
            state.createStatus = 'flex';
            state.isLoading = false;
        });

        //Xử lý khi trạng thái của UpdateShip cập nhật
        builder.addCase(UpdateJourneyShip.fulfilled, (state) => {
            state.createStatus = 'flex';
            state.isLoading2 = false;
        });
    },
});

export const createDelivery = createAsyncThunk('distribution/create', async (deliveryCreate, thunkAPI) => {
    try {
        const response = await axios.post(API.HTTP_API + '/distribution/deliveries/create/', deliveryCreate, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});

export const GetDelivery = createAsyncThunk('distribution/get', async (option, thunkAPI) => {
    try {
        const response = await axios.get(API.HTTP_API + '/distribution/deliveries/' + option.transactionStatus, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});

export const GetDeliveryDay = createAsyncThunk('distribution/gettoday', async (thunkAPI) => {
    try {
        const response = await axios.get(API.HTTP_API + '/distribution/deliveries/1', {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});

export const GetDeliveryShip = createAsyncThunk('distribution/ship', async (thunkAPI) => {
    try {
        const response = await axios.get(API.HTTP_API + '/distribution/ship', {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
});

export const DeleteDelivery = createAsyncThunk('distribution/delete', async (delivery, thunkAPI) => {
    try {
        const response = await axios.delete(
            API.HTTP_API + '/distribution/deliveries/delete/' + delivery.transactionId,
            {
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const UpdateDelivery = createAsyncThunk('distribution/update', async (object, thunkAPI) => {
    try {
        const response = await axios.put(
            API.HTTP_API + '/distribution/deliveries/update/' + object.transactionId,
            {
                status: object.status,
            },
            {
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.respone.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const UpdateJourneyShip = createAsyncThunk('distribution/journey/update', async (item, thunkAPI) => {
    try {
        const response = await axios.put(
            API.HTTP_API + '/distribution/ship/update/' + item.transactionId,
            {
                status: item.journeyStatus,
                confirm: item.confirm,
            },
            {
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.respone.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const { addDelivery, resetEmployeeDistribution, reset, resetState, resetCreateStatus, ChangStatusOption } =
    employeeDistributionSlice.actions;
export default employeeDistributionSlice.reducer;
