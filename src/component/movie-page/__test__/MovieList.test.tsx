import { act, fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../../model/Movie";
import MovieList from "../MovieList";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("MovieList component", () => {
  it("should render", async () => {
    const movies = [
      new Movie("1", "test title 1", "http://img.png", "test full title 1", 12, 2022, "9.2", "299992", "test crew 1"),

      new Movie("2", "test title 2", "http://img.png", "test full title 2", 12, 2022, "7.7", "2992", "test crew 2"),
    ];
    render(<MovieList movies={movies} />);

    const testTitle1 = screen.getByText("test title 1");
    const testTitle2 = screen.getByText("test title 2");

    expect(testTitle1).toBeInTheDocument();
    expect(testTitle2).toBeInTheDocument();

    const secondCard = screen.getByTestId("card-test-id2");
    await act(async () => {
      fireEvent.click(secondCard);
    });
    expect(useNavigate()).toBeCalledTimes(1);
    expect(useNavigate()).toBeCalledWith("/page/movies/2");
  });
});
