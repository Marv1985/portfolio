import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import AboutMe from "../Components/AboutMe";

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
  it("check that component renders", () => {
    render(<AboutMe />);
    const text = screen.getByText(/const/i);
    expect(text).toBeInTheDocument();
  });
});
