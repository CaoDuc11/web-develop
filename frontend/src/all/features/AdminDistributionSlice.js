import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API from '../config/API';

const initialState = {
    isError: false,
    message: '',
    isSuccess: false,
    isLoading: false,
    usersList: [],
    employeeEdit: {},
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

export const GetEmployees = createAsyncThunk('admin/distribution/employees', async (thunkAPI) => {
    try {
        const response = await axios.get(API.HTTP_API + '/admin/distribution/employees', { withCredentials: true });
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const DeletedEmployees = createAsyncThunk('admin/distribution/delete', async (user, thunkAPI) => {
    try {
        const response = await axios.delete(API.HTTP_API + '/admin/distribution/delete/' + user.id, {
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

export const UpdateEmployee = createAsyncThunk('admin/distribution/update', async (user, thunkAPI) => {
    try {
        const response = await axios.put(
            API.HTTP_API + '/admin/distribution/employees/' + user.id,
            {
                username: user.usernameEdit,
                email: user.emailEdit,
                password: user.password,
                password_confirm: user.password_confirm,
            },
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

export const adminDistributionSlice = createSlice({
    name: 'adminDistribution',
    initialState,
    reducers: {
        resetAdminDistribution: () => initialState,
        reset: (state) => {
            state.isError = false;
            state.message = '';
            state.isSuccess = false;
            state.isLoading = false;
        },

        addEmployee: {
            reducer(state, action) {
                state.usersList.push(action.payload);
            },

            prepare(fullname, username, email) {
                return {
                    payload: {
                        fullname,
                        username,
                        email,
                    },
                };
            },
        },

        deleteEmployee: {
            reducer(state, action) {
                const { username } = action.payload;

                state.usersList = state.usersList.filter((item) => item.username !== username);
            },

            prepare(fullname, username, email) {
                return {
                    payload: {
                        fullname,
                        username,
                        email,
                    },
                };
            },
        },

        setEmployeeEdit: {
            reducer(state, action) {
                const { id, fullname, username, email } = action.payload;
                state.employeeEdit = { id, fullname, username, email };
            },

            prepare(id, fullname, username, email) {
                return {
                    payload: {
                        id,
                        fullname,
                        username,
                        email,
                    },
                };
            },
        },

        updateEmployee: {
            reducer(state, action) {
                const { id, username, email } = action.payload;
                let employee = state.usersList.find((item) => item.id === id);
                employee.username = username;
                employee.email = email;
            },

            prepare(id, username, email) {
                return {
                    payload: {
                        id,
                        username,
                        email,
                    },
                };
            },
        },
    },
    extraReducers: (builder) => {
        //Xử lý khi trạng thái của CreateEmployee cập nhật
        builder.addCase(CreateEmployee.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(CreateEmployee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.usersList[state.usersList.length - 1].id = action.payload.id;
        });
        builder.addCase(CreateEmployee.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //Xử lý khi trạng thái của GetEmployees cập nhật
        // builder.addCase(GetEmployees.pending, (state, action) => {
        //     state.isLoading = true;
        // });

        builder.addCase(GetEmployees.fulfilled, (state, action) => {
            state.usersList = action.payload;
        });

        // builder.addCase(GetEmployees.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        // });
    },
});
export const { reset, resetAdminDistribution, addEmployee, deleteEmployee, setEmployeeEdit, updateEmployee } =
    adminDistributionSlice.actions;
export default adminDistributionSlice.reducer;
