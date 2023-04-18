import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsApi";

export type tagsType = {
  id: number;
  title: string;
};

export interface tagStateType {
  tags: tagsType[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: tagStateType = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};


//async thunk
export const fetchTagsAsync = createAsyncThunk("tags/fetchTags", async () => {
  const tags: tagsType[] = await getTags();
  return tags;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagsAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTagsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTagsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message || "";
      });
  },
});

export default tagsSlice.reducer;
