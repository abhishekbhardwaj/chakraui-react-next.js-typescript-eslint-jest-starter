import React, { ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

const MainHeading: React.FC<MainHeadingProps> = ({ children }) => (
  <Heading data-testid="main-heading" as="h1" size="xl">
    {children}
  </Heading>
)

export interface MainHeadingProps {
  children?: ReactNode
}

export default MainHeading
