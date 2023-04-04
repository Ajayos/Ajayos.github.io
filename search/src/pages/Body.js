import { Box, Center, Flex, Square, Text } from '@chakra-ui/react'
import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'

export const Body = () => {
  return (
    <div>
        <Flex color='white' >
            <Center w='40%' bg='black'>
                <Box1 />
            </Center>
            <Square w='40%' bg='black'>
                <Box2 />
            </Square>
            <Box w='20%' bg='black'>
                <Box3 />
            </Box>
        </Flex>
    </div>
  )
}
