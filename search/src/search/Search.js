import { Box, Center, Container, Input, InputGroup, InputLeftAddon, InputLeftElement, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import "./index.css"
import { FcSearch } from 'react-icons/fc'
const Search = () => {
  return (
    <>
        <Container  h="100px" w="500px" maxW="xl" centerContent>
            <Box
                d="flex"
                p={9}
                w="100%"
                h="100px"
            >
            </Box>
            <Box
                d="flex"
                p={9}
                w="100%"
                h="100px"
            >
            </Box>
            <Box
                d="flex"
                p={9}
                w="100%"
                h="100px"
            >
            </Box>
            <Box
                d="flex"
                p={9}
                w="100%"
            >
                <Text fontSize="7xl"  fontFamily="Open Sans, sans-serif, bold, Arvo " color={"white"} align="center">AJAY O S</Text>
            </Box>
            <Center>
                <Box  w="100%" p={4} >
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<FcSearch color='gray.300' />}
                        />
                            <Input
                                bg={"black"}
                                w="750px"
                                fontSize={"lg"}
                                placeholder='Search....' 
                                color={"white"}
                                colorScheme="red"
                                focusBorderColor="white"
                                
                            />
                    </InputGroup>

                    
                </Box>
            </Center>
        </Container>
    </>
  )
}

export default Search
