import React from 'react';
import Head from './Head';
import { Box, Flex, Grid, GridItem, IconButton, Spacer } from '@chakra-ui/react';

import { SettingsIcon } from '@chakra-ui/icons';
import { FcHome, FcSettings } from 'react-icons/fc';
import  { TbCircleDashed } from 'react-icons/tb';
import { MdGroups } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import { BsRobot } from 'react-icons/bs';

const Home = () => {
    const [activebar, setActivebar] = React.useState(0);
    return (
        <>
          <Flex direction={'row'} bg={"black"}>
            <Box p='4' >
              hi
            </Box>
            <Spacer />
            <Spacer />
            <Spacer />
            <Box p='4' bg={activebar === 0 ? 'blue.500' : 'black'}>
              <IconButton
                bg={activebar === 0 ? 'blue.500' : 'black'}
                onClick={() => setActivebar(0)}
                colorScheme='green'
                variant='ghost'
                aria-label='home'
                left={1}
                size='lg'
                borderWidth="3px"
                icon={<FcHome size={'lg'} />}
              />
            </Box>
            <Box p='4' bg={activebar === 1 ? 'blue.500' : 'black'}>
              <IconButton
                bg={activebar === 1 ? 'blue.500' : 'black'}
                onClick={() => setActivebar(1)}
                colorScheme='green'
                variant='ghost'
                aria-label='home'
                left={1}
                size='lg'
                borderWidth="3px"
                icon={<GoPerson size={'lg'} />}
              />
            </Box>
            <Box p='4' bg={activebar === 2 ? 'blue.500' : 'black'}>
              <IconButton
                bg={activebar === 2 ? 'blue.500' : 'black'}
                onClick={() => setActivebar(2)}
                colorScheme='green'
                variant='ghost'
                aria-label='home'
                left={1}
                size='lg'
                borderWidth="3px"
                icon={<MdGroups size={'lg'} />}
              />
            </Box>
            <Box p='4' bg={activebar === 3 ? 'blue.500' : 'black'}>
              <IconButton
                bg={activebar === 3 ? 'blue.500' : 'black'}
                onClick={() => setActivebar(3)}
                colorScheme='green'
                variant='ghost'
                aria-label='home'
                left={1}
                size='lg'
                borderWidth="3px"
                icon={<TbCircleDashed size={'lg'} />}
              />
            </Box>
            <Box p='4' bg={activebar === 4 ? 'blue.500' : 'black'}>
              <IconButton
                bg={activebar === 4 ? 'blue.500' : 'black'}
                onClick={() => setActivebar(4)}
                colorScheme='blue.500'
                color='blue.500'
                variant='ghost'
                aria-label='home'
                left={1}
                size='lg'
                borderWidth="3px"
                icon={<FcSettings size={'lg'} />}
              />
            </Box>
            <Box p='4'  bg={activebar === 5 ? 'blue.500' : 'black'}>
              <IconButton
                bg={activebar === 5 ? 'blue.500' : 'black'}
                onClick={() => setActivebar(5)}
                colorScheme='blue.500'
                color='blue.500'
                variant='ghost'
                aria-label='home'
                left={1}
                size='lg'
                borderWidth="3px"
                isDisabled
                icon={<BsRobot size={'lg'} />}
              />
            </Box>
            <Spacer />
            <Box p='4'>
                mj
            </Box>
          </Flex>
          { activebar === 0 ? (<>HI</>) :
            activebar === 1 ? (<>HI</>) :
            activebar === 2 ? (<>HI</>) :
            activebar === 3 ? (<>HI</>) :
            activebar === 4  ? (<>HI</>) :
            activebar === 5 ? (<>HI</>) :
            (<></>)
            }
        </>
      )
    }

export default Home;
