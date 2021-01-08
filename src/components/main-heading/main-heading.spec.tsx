import React from 'react'
import { render } from '@testing-library/react'

import MainHeading from './main-heading'

describe('Index Page', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<MainHeading />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders hello world', () => {
    // Given
    const { getByTestId } = render(<MainHeading>Hello World</MainHeading>)

    // When
    const ACTUAL = getByTestId('main-heading').textContent

    // Then
    expect(ACTUAL).toEqual('Hello World')
  })
})
