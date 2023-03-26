import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import ContactHeader from "../Components/ContactHeader";
import ContactDetails from "../Components/ContactDetails";

describe("Contact header component tests", () => {
  it("check that Contact header renders", () => {
    render(<ContactHeader />);
    const text = screen.getByText("Contact");
    expect(text).toBeInTheDocument();
  });
});

describe("Contact Details component tests", () => {
  it("check that ContactDetails component renders", () => {
    render(<ContactDetails />);
    const text = screen.getByText(/If you have any/i);
    expect(text).toBeInTheDocument();
  });
  it("check that component input changes", () => {
    render(<ContactDetails />);
    const NameInput = screen.getByPlaceholderText("Name");
    const EmailInput = screen.getByPlaceholderText("Email");
    const MessageInput = screen.getByPlaceholderText("Message");
    fireEvent.change(NameInput, { target: { value: "Marvin" } });
    fireEvent.change(EmailInput, { target: { value: "marvin@hotmail.co.uk" } });
    fireEvent.change(MessageInput, { target: { value: "Hello" } });
    expect(NameInput.value).toBe("Marvin");
    expect(EmailInput.value).toBe("marvin@hotmail.co.uk");
    expect(MessageInput.value).toBe("Hello");
  });

  it("check submit button fires", () => {
    render(<ContactDetails />);
    const button = screen.getByRole('button', {name: /submit/i});
    fireEvent.click(button);
    const text = screen.getByText(/message sent!/i);
    expect(text).toBeInTheDocument();
  })

});
