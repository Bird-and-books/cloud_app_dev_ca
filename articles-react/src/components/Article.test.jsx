import React from 'react';
import Article from "./Article";
import { render } from "@testing-library/react";

describe("src/components/Article", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Article title="Test Article" />);
    expect(getByText("Test Article")).toBeInTheDocument();
  });
});
