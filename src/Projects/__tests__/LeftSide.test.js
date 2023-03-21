import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import MyPortfolio from "../Components/LeftSide/MyPortfolio";
import StrengthShop from "../Components/LeftSide/StrengthShop";

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

describe("Test my portfolio project elements render", () => {
  it("check that header renders", () => {
    render(<MyPortfolio />);
    const text = screen.getByText(/My Portfolio/i);
    expect(text).toBeInTheDocument();
  });

  it("check that paragraph renders", () => {
    render(<MyPortfolio />);
    const text = screen.getByText(/Here is a link/i);
    expect(text).toBeInTheDocument();
  });

  it("check that image renders", () => {
    render(<MyPortfolio />);
    const image = screen.getByAltText(/project/i);
    expect(image).toHaveAttribute("src", "portfolio1828.png");
  });
});

describe("Test strength shop project elements render", () => {
  it("check that header renders", () => {
    render(<StrengthShop />);
    const text = screen.getByText(/Strength Shop Website/i);
    expect(text).toBeInTheDocument();
  });

  it("check that paragraph renders", () => {
    render(<StrengthShop />);
    const text = screen.getByText(/A clone of a website/i);
    expect(text).toBeInTheDocument();
  });

  it("check that image renders", () => {
    render(<StrengthShop />);
    const image = screen.getByAltText(/project/i);
    expect(image).toHaveAttribute("src", "Strength-shop-1828.png");
  });
});
