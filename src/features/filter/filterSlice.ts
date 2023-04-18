import { createSlice } from "@reduxjs/toolkit";

export type filterTpe = {
  tags: string[];
  search: string;
};

const initialState: filterTpe = {
  tags: [],
  search: "",
};

const filterVideosSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterVideosSlice.reducer;
export const { tagRemoved, tagSelected, searched } = filterVideosSlice.actions;
