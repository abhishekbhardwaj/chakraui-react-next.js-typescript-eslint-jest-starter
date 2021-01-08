import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'

import MainHeading from '@src/components/main-heading/main-heading'

const Home: NextPage = () => {
  const { SITE_NAME } = process.env

  return (
    <Flex bg="gray.50" minHeight="100vh" alignItems="center" justifyContent="center">
      <Head>
        <meta charSet="utf-8" />
        <title>{SITE_NAME}</title>
      </Head>
      <MainHeading>Hello World.</MainHeading>
    </Flex>
  )
}

export default Home
