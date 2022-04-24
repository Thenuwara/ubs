import { render, screen } from "@testing-library/react";
import { Movie } from "../../../model/Movie";
import MovieInfo from "../MovieInfo";

describe("MovieInfo component", () => {
  it("should render", () => {
    const movieInfo = new Movie("id1", "test title 1", "http://img.png", "test full title",12,2022,"9.2","299992","test crew");
    render(<MovieInfo info={movieInfo} />);

    const title = screen.getByText("test title 1");
    const fullTitle = screen.getByText("test full title");
    const rank = screen.getByText(12);
    const year = screen.getByText(2022);
    const rate = screen.getByText("9.2");
    const count = screen.getByText("299992");
    const crew = screen.getByText("test crew");

    expect(title).toBeInTheDocument();
    expect(fullTitle).toBeInTheDocument();
    expect(rank).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(rate).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(crew).toBeInTheDocument();
  });
});
