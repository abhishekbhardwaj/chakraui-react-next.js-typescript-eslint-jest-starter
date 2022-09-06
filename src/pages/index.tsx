import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import { publicRuntimeConfig } from '@src/config'

import MainHeading from '@src/components/main-heading/main-heading'

const Home: NextPage = () => {
  return (
    <Flex bg="gray.50" minHeight="100vh" alignItems="center" justifyContent="center">
      <Head>
        <meta charSet="utf-8" />
        <title>{publicRuntimeConfig.APP_NAME}</title>
      </Head>
      <MainHeading>Hello World.</MainHeading>
    </Flex>
  )
}

export default Home
