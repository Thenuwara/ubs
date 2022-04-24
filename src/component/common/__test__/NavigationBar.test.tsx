import { act, fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar";

const mockedUsedNavigate = jest.fn();
const mockedUseLocation = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockedUseLocation,
}));

describe("NavigationBar component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be in the document", async () => {
    await act(async () => {
      render(<NavigationBar />);
    });

    const books_menu = screen.getByText("Books");
    const movies_menu = screen.getByText("Movies");

    expect(books_menu).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(books_menu);
    });
    expect(useNavigate()).toBeCalledTimes(1);
    expect(useNavigate()).toBeCalledWith("/page/books");


    expect(movies_menu).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(movies_menu);
    });
    expect(useNavigate()).toBeCalledTimes(2);
    expect(useNavigate()).toBeCalledWith("/page/movies");
  });
});
