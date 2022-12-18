import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../config/apiUrl";

export const fetchRepos = createAsyncThunk(
  "TrendingRepos/fetchRepos",
  ({ page, limit }) => {
    return axios
      .get(
        BaseURL(`search/repositories?q=trending&page=${page}&per_page=${limit}`)
      )
      .then((res) => res?.data);
  }
);

const initialState = {
  isLoading: false,
  repos: [],
  isError: null,
};

const TrendingRepoReducer = createSlice({
  name: "TrendingRepos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRepos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.repos = action.payload;
      state.isError = null;
    });
    builder.addCase(fetchRepos.rejected, (state, action) => {
      state.isLoading = false;
      state.repos = [];
      state.isError = action.error.message;
    });
  },
});
export default TrendingRepoReducer.reducer;
