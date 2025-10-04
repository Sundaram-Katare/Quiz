import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = `${import.meta.env.VITE_BACKEND_API_URL}auth/` || "http://localhost:3000/api/auth/";

export const incrementPoints = createAsyncThunk(
  "auth/incrementPoints",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.user?.token;
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
      const res = await axios.put(`${API_URL}points`, {}, config);
      // backend returns { points, user }
      const updatedUser = res.data.user || { ...state.auth.user, points: res.data.points };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || "Failed to increment points");
    }
  }
);

export const incrementQuizParticipated = createAsyncThunk(
  "auth/incrementQuizParticipated",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.user?.token;
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
      const res = await axios.put(`${API_URL}quizParticipated`, {}, config);
      // backend returns { quizParticipated, user }
      const updatedUser = res.data.user || { ...state.auth.user, quizParticipated: res.data.quizParticipated };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || "Failed to increment quizParticipated");
    }
  }
);

export const getPoints = createAsyncThunk(
  "auth/getPoints",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.user?.token;
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
      const res = await axios.get(`${API_URL}points`, config);
      // Backend returns { message: "...", points: <number> }
      const currentUser = state.auth.user || {};
      const updatedUser = { ...currentUser, points: res.data.points };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || "Failed to get points");
    }
  }
);


export const register = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
  try {
    const res = await axios.post(API_URL + "signup", userData);
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    toast.success("Register Successfully");
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message || "Error");
  }
});

export const login = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    const res = await axios.post(API_URL + "login", userData);
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    toast.success("Login Successful");
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message || "Error");
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
});

const user = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      // Increment points
      .addCase(incrementPoints.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(incrementPoints.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(incrementPoints.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Increment quiz participated
      .addCase(incrementQuizParticipated.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(incrementQuizParticipated.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(incrementQuizParticipated.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPoints.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPoints.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getPoints.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;
