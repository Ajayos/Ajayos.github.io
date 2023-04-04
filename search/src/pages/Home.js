import React from 'react';
import Head from './Head';
import { Box, Flex, Grid, GridItem, IconButton, Spacer } from '@chakra-ui/react';
import { Body } from './Body';

const Home = () => {
    return (
        <>
          <Flex direction={'row'} bg={"#272b33"}>
            <Box p='5' >
              hi
            </Box>
            <Spacer />
            <Spacer />
            <Spacer />
            
          </Flex>
          <Head />
          <Body />
          </>
      )
    }

export default Home;
