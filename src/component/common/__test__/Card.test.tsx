import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card component", () => {
  it("should render", async() => {
    const props = { id: "1", title: "the end", image: "http:img.png", onClick: jest.fn() };
    render(<Card {...props} />);

    const testTitle = screen.getByText("the end");
    expect(testTitle).toBeInTheDocument();
  });
});
