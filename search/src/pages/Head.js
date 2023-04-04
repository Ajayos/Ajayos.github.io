import { Box, Center, Flex, IconButton, Spacer } from '@chakra-ui/react';
import React from 'react';
//import { SettingsIcon } from '@chakra-ui/icons';
import { FcHome, FcSettings } from 'react-icons/fc';
import  { TbCircleDashed } from 'react-icons/tb';
import { MdGroups } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import { BsRobot } from 'react-icons/bs';

const Head = () => {
  const [activebar, setActivebar] = React.useState(0);
  return (
    <div>
      <Box bg='black' w='100%' p={6} color='white'>
             <Flex direction={'row'}>
                <Center>
                  <Box></Box><Spacer /><Spacer /><Spacer /><Spacer /><Spacer />
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
                </Center>
             </Flex>
      </Box>
      <Box bg='gray' w='100%' p={1} color='white'>
      </Box>
    </div>
  );
}

export default Head;
