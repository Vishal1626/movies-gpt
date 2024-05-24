import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchToggle: false,
    gptMovies: null,
    tmdbMovieResult: null,
    searchStarted: false,
  },
  reducers: {
    toggleGptSearchBtn: (state, action) => {
      state.gptSearchToggle = !state.gptSearchToggle;
    },
    addGptMovies: (state, action) => {
      const { gptMovieSuggetion, tmdbMoviesResult } = action.payload;
      state.gptMovies = gptMovieSuggetion;
      state.tmdbMovieResult = tmdbMoviesResult;
    },
    toggleGptSearchStarted: (state) => {
      state.searchStarted = !state.searchStarted;
    },
  },
});

export const { toggleGptSearchBtn, addGptMovies, toggleGptSearchStarted } =
  gptSlice.actions;
export default gptSlice.reducer;
