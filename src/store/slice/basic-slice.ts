import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
};
export const basicSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    resetState: () => initialState,
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { resetState, setLoading } = basicSlice.actions;
export default basicSlice.reducer;
