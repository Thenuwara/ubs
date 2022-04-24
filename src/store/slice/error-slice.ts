import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  hasError: false,
  errorMessage: "",
};
export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    resetState: () => initialState,
    setError: (state, action) => {
      state.hasError = action.payload.hasError;
      state.errorMessage = action.payload.errorMessage;
    },
  },
  extraReducers: (builder) => {},
});

export const { resetState, setError } = errorSlice.actions;
export default errorSlice.reducer;
