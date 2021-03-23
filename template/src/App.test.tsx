import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory, MemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "./App";

export const InitialiserLApplication = ({
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

test("la navigation sur les pages non authentifiées", async () => {
  const history = createMemoryHistory();
  render(<InitialiserLApplication history={history} />);
  expect(history.location.pathname).toBe("/");
  fireEvent.click(screen.queryByText("Connexion") as HTMLLinkElement);
  expect(history.location.pathname).toBe("/connexion");
  fireEvent.click(screen.queryByText("S'inscrire") as HTMLLinkElement);
  expect(history.location.pathname).toBe("/sinscrire");
  fireEvent.click(screen.queryByText("Accueil") as HTMLLinkElement);
  expect(history.location.pathname).toBe("/");
});
