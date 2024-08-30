
import { render } from "@testing-library/react";
import App from "./App";

test("saves and retrieves item from localStorage", () => {
  render(<App />);

  const key = "key";
  const value = "test value";
  localStorage.setItem(key, value);
  const storedValue = localStorage.getItem(key);
  expect(storedValue).toBe(value);
});
