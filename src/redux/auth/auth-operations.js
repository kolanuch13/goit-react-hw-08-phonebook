import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
    "auth/register",
    async (credential, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/signup", credential);
            token.set(data.token);
          return data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
    }
);
    
export const logIn = createAsyncThunk(
    "auth/login",
    async (credential, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/login", credential);
          token.set(data.token);
          return data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            token.unset();
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});