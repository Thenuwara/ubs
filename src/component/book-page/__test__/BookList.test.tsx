import { act, fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { Book } from "../../../model/Book";
import BookList from "../BookList";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("BookList component", () => {
  it("should render", async () => {
    const books = [
      new Book("1", {
        title: "test Title 1",
        description: "test Desc 1",
        publisher: "test Publisher 1",
        publishedDate: "test PublishedDate 1",
        categories: ["test Categories 1"],
        authors: ["test Authors 1"],
        imageLinks: "http://img1.png",
      }),
      new Book("2", {
        title: "test Title 2",
        description: "test Desc 2",
        publisher: "test Publisher 2",
        publishedDate: "test PublishedDate 2",
        categories: [],
        authors: [],
        imageLinks: "http://img2.png",
      }),
    ];
    render(<BookList books={books} />);

    const testTitle1 = screen.getByText("test Title 1");
    const testTitle2 = screen.getByText("test Title 2");

    expect(testTitle1).toBeInTheDocument();
    expect(testTitle2).toBeInTheDocument();

    const firstCard = screen.getByTestId("card-test-id1");
    await act(async () => {
      fireEvent.click(firstCard);
    });
    expect(useNavigate()).toBeCalledTimes(1);
    expect(useNavigate()).toBeCalledWith("/page/books/1");
  });
});
