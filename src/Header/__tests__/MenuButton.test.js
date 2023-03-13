import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import MenuButton from "../Components/MenuButton";

describe("HeaderIntro component tests", () => {
  it("check that image renders", () => {
    render(<MenuButton />);
    const image = screen.getByAltText(/death star/i);
    expect(image).toHaveAttribute("src", "death-star.svg");
  });

  it("check that image click opens menu", () => {
    render(<MenuButton />);
    const image = screen.getByAltText(/death star/i);
    fireEvent.click(image);
    const text = screen.getByText(/BY MARVIN SHANNON/i);
    expect(text).toBeInTheDocument();
  });
});
