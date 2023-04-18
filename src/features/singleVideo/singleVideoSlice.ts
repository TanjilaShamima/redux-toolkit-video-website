import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./singleVideoApi";
import { videoTye } from "../videos/videoSlice";

export interface StateType {
  video: videoTye;
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: StateType = {
  video: {} as videoTye,
  isError: false,
  isLoading: false,
  error: "",
};

//async thunk
export const fetchVideoAsync = createAsyncThunk(
  "video/fetchVideo",
  async (id: string) => {
    const video: videoTye = await getVideo(id);
    return video;
  }
);

const singleVideoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideoAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {} as videoTye;
        state.isError = true;
        state.error = action.error?.message || "";
      });
  },
});

export default singleVideoSlice.reducer;
