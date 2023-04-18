import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosApi";
import { filterTpe } from "../filter/filterSlice";

export type videoTye = {
  id: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: Date;
  duration: string;
  views: string;
  link: string;
  thumbnail: string;
  tags: string[];
  likes: number;
  unlikes: number;
};

export interface StateType {
  videos: videoTye[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: StateType = {
  videos: [],
  isError: false,
  isLoading: false,
  error: "",
};

//async thunk
export const fetchVideosAsync = createAsyncThunk(
  "videos/fetchVideos",
  async ({tags, search}: filterTpe) => {
    const videos: videoTye[] = await getVideos({tags, search});
    return videos;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message || '';
      });
  },
});

export default videoSlice.reducer;
