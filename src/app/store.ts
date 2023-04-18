import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import videosReducer from "../features/videos/videoSlice";
import tagsReducer from "../features/tags/tagsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videosReducer,
    tags: tagsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
