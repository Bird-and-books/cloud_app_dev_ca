import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import NewArticleForm from './NewArticleForm';

describe('src/components/NewArticleForm', () => {
  test('Should be rendered', () => {
    const { container } = render(<NewArticleForm />)
    expect(container).toBeDefined()
  })

  // test('Should add warning messages on empty required fields', async () => {
  //   render(<NewArticleForm />)

  //   const titleInput = screen.queryByPlaceholderText("Place for title")
  //   fireEvent.blur(titleInput)

  //   let errorBlocks;
  //   await waitFor(() => {
  //     errorBlocks = screen.queryByTestId("error-block")     
  //   });
  //   expect(errorBlocks).toBeInTheDocument()
  // })
})