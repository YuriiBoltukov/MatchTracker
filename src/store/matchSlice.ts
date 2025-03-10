import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Match } from '../types/types.ts';

const API_URL = 'https://app.ftoyd.com/fronttemp-service/fronttemp';

interface MatchesState {
  matches: Match[];
  loading: boolean;
  error: object | null;
}

const initialState: MatchesState = {
  matches: [],
  loading: false,
  error: null,
};

export const fetchMatches = createAsyncThunk('matches/fetchMatches', async () => {
  const response = await axios.get<{ data: { matches: Match[] } }>(API_URL);
  return response.data.data.matches;
});

const matchSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.matches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default matchSlice.reducer;
