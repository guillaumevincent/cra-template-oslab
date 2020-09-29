import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory, MemoryHistory } from "history";
import { Router } from "react-router-dom";

export const InitApp = ({
  history = createMemoryHistory(),
}: {
  history?: MemoryHistory;
}) => {
  return (
    <Router history={history}>
      <App />
    </Router>
  );
};

test("routing pages unauth", async () => {
  const history = createMemoryHistory();
  render(<InitApp history={history} />);
  expect(history.location.pathname).toBe("/");
  fireEvent.click(screen.queryByText(/login/i) as HTMLLinkElement);
  expect(history.location.pathname).toBe("/login");
  fireEvent.click(screen.queryByText(/register/i) as HTMLLinkElement);
  expect(history.location.pathname).toBe("/register");
  fireEvent.click(screen.queryByText(/home/i) as HTMLLinkElement);
  expect(history.location.pathname).toBe("/");
});
