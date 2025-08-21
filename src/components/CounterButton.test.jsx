import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import CounterButton from "./CounterButton";

it("renders without crashing", () => {
  render(<CounterButton />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

it("correctly increments the counter", async () => {
  const user = userEvent.setup();
  render(<CounterButton />);

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Count: 0");

  await user.click(button);
  expect(button).toHaveTextContent("Count: 1");

  await user.click(button);
  await user.click(button);
  expect(button).toHaveTextContent("Count: 3");
});
