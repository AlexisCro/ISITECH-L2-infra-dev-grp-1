import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("clicking on favorite button saves item to localStorage", async () => {
  render(<App />);

  const favoriteButtons = screen.getAllByTestId("buttonFavorites");

  fireEvent.click(favoriteButtons[0]);

  await waitFor(() => {
    const key = "favoriteMovies";
    const storedValue = localStorage.getItem(key);
    expect(storedValue).not.toBeNull();
  });

  const key = "favoriteMovies";
  const storedValue = localStorage.getItem(key);
  const parsedValue = JSON.parse(storedValue || "[]");

  expect(parsedValue.length).toBeGreaterThan(0);
  expect(parsedValue[0].Title).toBe("Spider-Man");
});