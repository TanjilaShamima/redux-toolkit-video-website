import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideoApi";

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
  relatedVideos: videoTye[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: StateType = {
  relatedVideos: [],
  isError: false,
  isLoading: false,
  error: "",
};

export type relatedVideosParams = {
  tags: string[];
  id: string;
};

//async thunk
export const fetchRelatedVideosAsync = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }: relatedVideosParams) => {
    const relatedVideos: videoTye[] = await getRelatedVideos({ tags, id });
    return relatedVideos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideosAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message || "";
      });
  },
});

export default relatedVideosSlice.reducer;
