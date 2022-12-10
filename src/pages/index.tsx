import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { Flex } from '@chakra-ui/react'

import MainHeading from '@/components/main-heading/main-heading'
import { APP_NAME } from '@/config'

const Home: NextPage = () => (
  <Flex bg='gray.50' minHeight='100vh' alignItems='center' justifyContent='center'>
    <Head>
      <meta charSet='utf-8' />
      <title>{APP_NAME}</title>
    </Head>
    <MainHeading>Hello World.</MainHeading>
  </Flex>
)

export default Home
