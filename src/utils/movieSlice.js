import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMOvies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addMovireTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addUpcomingMOvies: (state, action) => {
      state.upcomingMOvies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovireTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMOvies,
} = movieSlice.actions;

export default movieSlice.reducer;
