import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders MyApp", () => {
  render(<App />);
  const linkElement = screen.getByText(/MyApp/i);
  expect(linkElement).toBeInTheDocument();
});
