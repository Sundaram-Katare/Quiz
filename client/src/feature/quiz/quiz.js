import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:3000/api/"

export const fetchQuizzes = createAsyncThunk("quiz/", async () => {
  const response = await axios.get(`${BACKEND_API_URL}quiz`);
  return response.data;
});

const initialState = {
  quizzes: [],
  quiz: [{}],
  status: "idle",
  error: null
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes.push(action.payload);
    },
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
  },
  extraReducers: (builder) => {
      builder
        .addCase(fetchQuizzes.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchQuizzes.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.quizzes = action.payload;
        })
        .addCase(fetchQuizzes.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
});

export const { addQuiz, setQuizzes } = quizSlice.actions;

export default quizSlice.reducer;