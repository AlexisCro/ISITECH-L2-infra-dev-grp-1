import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("clicking on favorite button saves item to localStorage", async () => {
  render(<App />);
  
  userEvent.click(screen.getByTestId("switchMode"));

  expect(screen.getByText("Dark Mode")).toBeInTheDocument();
});
