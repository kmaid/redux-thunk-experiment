import React from "react";
import { render } from "@testing-library/react";
import Router from "./App";

test.skip("renders learn react link", () => {
  const { getByText } = render(<Router />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
