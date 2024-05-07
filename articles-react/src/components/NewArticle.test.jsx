import React  from "react";
import { render, fireEvent } from "@testing-library/react";

import NewArticle from './NewArticle';

describe('src/components/NewArticle', () => {
  it('Should be rendered', () => {
    const { container } = render(<NewArticle />)
    expect(container).toBeDefined()
  })

  it('Should add warning messages on empty required fields', () => {
    const { container, queryAllByTestId, queryByTestId } = render(<NewArticle />)
    const submitBtn = queryByTestId("article-submit-btn")
    fireEvent.click(submitBtn)
    const errorBlocks = queryAllByTestId("error-block")
    expect(errorBlocks.length).toBe(2)
  })
})