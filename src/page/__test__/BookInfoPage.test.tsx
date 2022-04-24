import { render, screen } from "@testing-library/react";
import BookInfoPage from "../BookInfoPage";
import * as google_api from "../../service/google-api";
import { ApiErrorResponse, ApiOkResponse } from "apisauce";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import errorSlice from "../../store/slice/error-slice";

describe("BookInfoPage component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const customStore = configureStore({
    reducer: combineReducers({ errorSlice }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    preloadedState: {
      errorSlice: {
        hasError: false,
        errorMessage: "",
      },
    },
  });
  it("should render", async () => {
    jest.spyOn(google_api, "getBooks").mockReturnValue(
      new Promise((resolve) =>
        resolve({
          ok: true,
          data: { items: [] },
        } as ApiOkResponse<any>)
      )
    );
      render(
        <Provider store={customStore}>
          <BookInfoPage />
        </Provider>
      );

    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Published Date")).toBeInTheDocument();
    expect(screen.getByText("Publisher")).toBeInTheDocument();
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByText("Authors")).toBeInTheDocument();

    expect(google_api.getBooks).toBeCalledTimes(1);
  });

  it("should show error notification when unable to fetch data", () => {
    jest.spyOn(google_api, "getBooks").mockReturnValue(
      new Promise((resolve) =>
        resolve({
          ok: false,
          data: { items: [] },
        } as ApiErrorResponse<any>)
      )
    );
      render(
        <Provider store={customStore}>
          <BookInfoPage />
        </Provider>
      );
    expect(google_api.getBooks).toBeCalledTimes(1);
  });
});
