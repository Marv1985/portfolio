import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import MessageSent from "../MessageSent";

describe("Dropdown component tests", () => {
  it("check that component renders", () => {
    render(<MessageSent />);
    const text = screen.getByText(/message sent!/i);
    expect(text).toBeInTheDocument();
  });
});
