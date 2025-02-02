import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestion } from "../../services/QuizService";

export const fetchQuestions = createAsyncThunk("quiz/fetchQuestions", async () => {
  try {
    const data = await getQuestion(); // No params
    return data.results; // Extract the "results" array from API response
  } catch (error) {
    throw new Error("Error fetching questions: " + error.message);
  }
});

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: [],
    loading:false,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
        state.loading = "true";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload;
        state.loading = "false";
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.loading = "true";
        state.error = action.error.message;
      });
  },
});

export default quizSlice.reducer;
