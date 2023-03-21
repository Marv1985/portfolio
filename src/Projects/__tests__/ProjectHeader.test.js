import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import ProjectsHeader from "../Components/ProjectsHeader";

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
    render(<ProjectsHeader />);
    const text = screen.getByText(/PROJECTS/i);
    expect(text).toBeInTheDocument();
  });
});
