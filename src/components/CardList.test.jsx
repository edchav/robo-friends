import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import CardList from "./CardList";

const filteredRobots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
];

it("renders without crashing", () => {
  render(<CardList robots={filteredRobots} />);
  expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
});
