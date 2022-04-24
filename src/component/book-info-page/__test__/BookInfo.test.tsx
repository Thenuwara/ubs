import { render, screen } from "@testing-library/react";
import { Book } from "../../../model/Book";
import BookInfo from "../BookInfo";

describe("BookInfo component", () => {
  it("should render", () => {
    const bookInfo = new Book("testId", {
      title: "test Title",
      description: "test Desc",
      publisher: "test Publisher",
      publishedDate: "test PublishedDate",
      categories: ["test Categories"],
      authors: ["test Authors"],
      imageLinks: "http://img.png",
    });
    render(<BookInfo info={bookInfo} />);

    const testTitle = screen.getByText("test Title");
    const book = screen.getByText("Book");
    const desc = screen.getByText("test Desc");
    const publisher = screen.getByText("test Publisher");
    const publishedDate = screen.getByText("test PublishedDate");
    const categories = screen.getByText("test Categories");
    const authors = screen.getByText("test Authors");

    expect(testTitle).toBeInTheDocument();
    expect(book).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(publisher).toBeInTheDocument();
    expect(publishedDate).toBeInTheDocument();
    expect(categories).toBeInTheDocument();
    expect(authors).toBeInTheDocument();
  });
});
