import store from "../..";
import errorSlice, { resetState, setError } from "../error-slice";

describe("auth slice", () => {
  const initialState = {
    hasError: false,
    errorMessage: "",
  };
  it("should return the initial state", () => {
    const state = store.getState().errorSlice;
    expect(state).toEqual(initialState);
  });

  it("should update the store when dispatch resetState action", () => {
    const action = {
      type: resetState,
      payload: {} 
    };
    const currentState = {
        hasError: true,
        errorMessage: "error",
      };
    const state = errorSlice(currentState, action);
    expect(state).toEqual(initialState);

  });

  it("should update the store when dispatch setError action", () => {
    const action = {
      type: setError,
      payload: { hasError: true, errorMessage:"500 error" },
    };
    const state = errorSlice(initialState, action);
    expect(state.hasError).toBeTruthy();
    expect(state.errorMessage).toEqual("500 error");
  });
});
