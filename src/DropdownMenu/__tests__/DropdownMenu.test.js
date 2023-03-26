import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import DropDownMenu from "../Components/DropdownMenu";

describe("Dropdown component tests", () => {
  it("check that component renders", () => {
    render(<DropDownMenu />);
    const text = screen.getByText("Projects");
    expect(text).toBeInTheDocument();
  });
});
