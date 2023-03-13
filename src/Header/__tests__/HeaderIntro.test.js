import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import HeaderIntro from "../Components/HeaderIntro";

describe("HeaderIntro component tests", () => {
  it("check that component renders", () => {
    render(<HeaderIntro />);
    const text = screen.getByText(/Marvin/i);
    expect(text).toBeInTheDocument();
  });
});
