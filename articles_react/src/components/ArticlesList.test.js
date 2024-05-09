import React from 'react';
import ArticlesList from "./ArticlesList";
import { render } from "@testing-library/react";

describe("src/components/ArticlesList", () => {
  test("renders correctly", () => {
    const { getByText } = render(<ArticlesList />);
    expect(getByText("Show only published articles")).toBeInTheDocument();
  });
});
