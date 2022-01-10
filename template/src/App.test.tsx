import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Navigation between unauth pages", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(window.location.pathname).toBe("/");
  fireEvent.click(screen.queryByText("Sign In") as HTMLLinkElement);
  expect(window.location.pathname).toBe("/sign-in");
  fireEvent.click(screen.queryByText("Register") as HTMLLinkElement);
  expect(window.location.pathname).toBe("/register");
  fireEvent.click(screen.queryByText("Sign In") as HTMLLinkElement);
  expect(window.location.pathname).toBe("/sign-in");
  fireEvent.click(
    screen.queryByText("Forgot your password?") as HTMLLinkElement
  );
  expect(window.location.pathname).toBe("/reset-your-password");
});
