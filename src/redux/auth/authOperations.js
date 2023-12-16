import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastError = (text) => {
  toast.error(text, {
    position: 'top-center',
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

export const instance = axios.create({
  baseURL: '',
});

export const token = {
  set: (token) => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
};

export const registerUser = createAsyncThunk(
  //   'auth/registerUser',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await instance.post('auth/register', dataUser);
      token.set(data.token);

      return data;
    } catch (error) {
      toastError(`Oops! Something was wrong... ${error.response.data}`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  //   'auth/loginUser',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await instance.post('auth/login', dataUser);
      token.set(data.token);

      return data;
    } catch (error) {
      toastError(`Oops! Something was wrong... ${error.response.data}`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
