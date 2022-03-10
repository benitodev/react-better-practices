import { render, screen } from "@testing-library/react";
import "__tests__/intersectionObserverMock";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
