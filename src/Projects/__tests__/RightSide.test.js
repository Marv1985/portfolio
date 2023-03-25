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

describe("AnimeGame component tests", () => {
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

describe("AnimeGame links test", () => {
  it("check git link work", () => {
    render(<AnimeGame />);
    const link = screen.getByRole("link", { name: "GIT Repo" });
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/Marv1985/anime-search"
    );
  });
  it("check live link work", () => {
    render(<AnimeGame />);
    const link = screen.getByRole("link", { name: "Live App" });
    expect(link).toHaveAttribute("href", "https://anime-search-2bb0b.web.app/");
  });
});
