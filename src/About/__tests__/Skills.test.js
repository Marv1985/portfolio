import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import Skills from "../Components/Skills";

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

describe("Skills component renders tests", () => {
  it("check that component renders", () => {
    render(<Skills />);
    const text = screen.getByText("icon.value");
    expect(text).toBeInTheDocument();
  });

  it("check react svg renders", () => {
    render(<Skills />);
    const text = screen.getByTestId("react-svg-checker");
    expect(text).toBeInTheDocument();
  });

  it("check js svg renders", () => {
    render(<Skills />);
    const text = screen.getByTestId("js-svg-checker");
    expect(text).toBeInTheDocument();
  });

  it("check css svg renders", () => {
    render(<Skills />);
    const text = screen.getByTestId("css-svg-checker");
    expect(text).toBeInTheDocument();
  });

  it("check html svg renders", () => {
    render(<Skills />);
    const text = screen.getByTestId("html-svg-checker");
    expect(text).toBeInTheDocument();
  });

  it("check git svg renders", () => {
    render(<Skills />);
    const text = screen.getByTestId("git-svg-checker");
    expect(text).toBeInTheDocument();
  });

  it("check jest svg renders", () => {
    render(<Skills />);
    const text = screen.getByTestId("jest-svg-checker");
    expect(text).toBeInTheDocument();
  });

  it("check sass svg renders", () => {
    render(<Skills />);
    const text = screen.getByTestId("sass-svg-checker");
    expect(text).toBeInTheDocument();
  });

  it("check firebase svg renders", () => {
    render(<Skills />);
    const text = screen.getByTestId("fire-svg-checker");
    expect(text).toBeInTheDocument();
  });

  it("check webpack svg renders", () => {
    render(<Skills />);
    const text = screen.getByTestId("web-svg-checker");
    expect(text).toBeInTheDocument();
  });
});

describe("Svg icons hover output to underneath html div tests", () => {
  it("check react svg hover", async () => {
    render(<Skills />);
    fireEvent.mouseOver(screen.getByTestId("react-svg-checker"));
    await waitFor(() => screen.findByTestId("hover-output"));
    expect(screen.getByTestId("hover-output")).toHaveTextContent("React");
  });

  it("check javascript svg hover", async () => {
    render(<Skills />);
    fireEvent.mouseOver(screen.getByTestId("js-svg-checker"));
    await waitFor(() => screen.findByTestId("hover-output"));
    expect(screen.getByTestId("hover-output")).toHaveTextContent("Javascript");
  });

  it("check css svg hover", async () => {
    render(<Skills />);
    fireEvent.mouseOver(screen.getByTestId("css-svg-checker"));
    await waitFor(() => screen.findByTestId("hover-output"));
    expect(screen.getByTestId("hover-output")).toHaveTextContent("Css");
  });

  it("check html svg hover", async () => {
    render(<Skills />);
    fireEvent.mouseOver(screen.getByTestId("html-svg-checker"));
    await waitFor(() => screen.findByTestId("hover-output"));
    expect(screen.getByTestId("hover-output")).toHaveTextContent("Html");
  });

  it("check Git svg hover", async () => {
    render(<Skills />);
    fireEvent.mouseOver(screen.getByTestId("git-svg-checker"));
    await waitFor(() => screen.findByTestId("hover-output"));
    expect(screen.getByTestId("hover-output")).toHaveTextContent("Git");
  });

  it("check jest svg hover", async () => {
    render(<Skills />);
    fireEvent.mouseOver(screen.getByTestId("jest-svg-checker"));
    await waitFor(() => screen.findByTestId("hover-output"));
    expect(screen.getByTestId("hover-output")).toHaveTextContent("Jest");
  });

  it("check sass svg hover", async () => {
    render(<Skills />);
    fireEvent.mouseOver(screen.getByTestId("sass-svg-checker"));
    await waitFor(() => screen.findByTestId("hover-output"));
    expect(screen.getByTestId("hover-output")).toHaveTextContent("Sass");
  });

  it("check firebase svg hover", async () => {
    render(<Skills />);
    fireEvent.mouseOver(screen.getByTestId("fire-svg-checker"));
    await waitFor(() => screen.findByTestId("hover-output"));
    expect(screen.getByTestId("hover-output")).toHaveTextContent("Firebase");
  });
});
