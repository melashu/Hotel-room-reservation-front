import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:3000/';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: localStorage.getItem('token'),
};

const api = {

  signup: createAsyncThunk(
    'users/userData',
    async (data) => {
      try {
        const response = await axios.post(
          `${baseUrl}auth/signup`,
          data,
          {
            headers,
          },
        );
        return response.data;
      } catch (error) {
        return error;
      }
    },
  ),
  // Login user
  loginUser: createAsyncThunk(
    'loginuser', async (body) => {
      try {
        const res = await fetch(`${baseUrl}auth/login`, {
          method: 'post',
          headers,
          body: JSON.stringify(body),
        });
        return await res.json();
      } catch (error) {
        return error;
      }
    },
  ),

};

export default api;
