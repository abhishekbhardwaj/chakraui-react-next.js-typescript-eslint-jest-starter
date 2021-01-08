/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import ChakraTheme from '@src/styles/chakra-theme'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={ChakraTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
