import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, it, vi, beforeEach, describe } from "vitest";
import { MainPage } from "./MainPage";

describe("MainPage", () => {
  const mockProps = {
    onRequestRobots: vi.fn(),
    onSearchChange: vi.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<MainPage {...mockProps} />);
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  it("shows loading when isPending is true", () => {
    const loadingProps = { ...mockProps, isPending: true };
    render(<MainPage {...loadingProps} />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("filters Robots correctly with empty search", () => {
    const robots = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ];
    const propsWithRobots = { ...mockProps, robots };
    render(<MainPage {...propsWithRobots} />);
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
  });

  it("filters Robots correctly with search field", () => {
    const robots = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
      {
        id: 2,
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
      },
    ];
    const propsWithSearch = { ...mockProps, robots, searchField: "Leanne" };
    render(<MainPage {...propsWithSearch} />);
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
  });

  it("shows no robots when search does not match", () => {
    const robots = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ];
    const propsWithSearch = { ...mockProps, robots, searchField: "Xavier" };
    render(<MainPage {...propsWithSearch} />);
    expect(screen.queryByText("Leanne Graham")).not.toBeInTheDocument();
  });
});
