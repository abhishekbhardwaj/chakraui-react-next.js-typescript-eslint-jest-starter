import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Flex, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  const { SITE_NAME } = process.env

  return (
    <Flex bg="gray.50" minHeight="100vh" alignItems="center" justifyContent="center">
      <Head>
        <meta charSet="utf-8" />
        <title>{SITE_NAME}</title>
      </Head>
      <Heading as="h1" size="xl">
        Hello World.
      </Heading>
    </Flex>
  )
}

export default Home
