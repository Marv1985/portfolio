import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import AnimeGame from "../Components/RightSide/AnimeGame";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("AboutMe component tests", () => {
  it("check that header renders", () => {
    render(<AnimeGame />);
    const text = screen.getByText(/Anime Search Game/i);
    expect(text).toBeInTheDocument();
  });

  it("check that paragraph renders", () => {
    render(<AnimeGame />);
    const text = screen.getByText(/A game of find/i);
    expect(text).toBeInTheDocument();
  });

  it("check that image renders", () => {
    render(<AnimeGame />);
    const image = screen.getByAltText(/project/i);
    expect(image).toHaveAttribute("src", "anime-game1828.png");
  });
});
