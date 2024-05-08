import React  from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";

import NewArticleForm from './NewArticleForm';

describe('src/components/NewArticleForm', () => {
  test('Should be rendered', () => {
    const { container } = render(<NewArticleForm />)
    expect(container).toBeDefined()
  })

  test('Should add warning messages on empty required fields', async() => {
    await act( async () => render(<NewArticleForm />))
    const submitBtn = screen.queryByTestId("article-submit-btn")
    act(() => fireEvent.click(submitBtn))
    const errorBlocks = screen.queryAllByTestId("error-block")
    expect(errorBlocks.length).toBe(2)
  })
})